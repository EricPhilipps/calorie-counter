const calorieLogHandler = (event) => {
  event.preventDefault();
  
  const food = document.querySelector('#food-item').value.trim();
  const amount = document.querySelector('#amount').value.trim();
  const unit = document.querySelector('#unit').value.trim();
  
  if (food && amount && unit) {
    fetch('/api/calories', {
      method: 'POST',
      body: JSON.stringify({ food, amount, unit }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      //console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      const calorieUl = document.querySelector("#calorie-list")
      for (let i = 0; i < data.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = data[i].calories;
        calorieUl.appendChild(listItem)
        
      }
    })
  }
};

document
  .querySelector('.logging-form')
  .addEventListener('submit', calorieLogHandler)
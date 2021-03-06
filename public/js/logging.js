const calorieLogHandler = (event) => {
  event.preventDefault();
  
  const food = document.querySelector('#food-item').value.trim();
  const amount = document.querySelector('#amount').value.trim();
  const unit = document.querySelector('#unit').value.trim();
  
  if (food && amount) {
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
        listItem.id = "testdata";
        const saveBtn = document.createElement("button");
        saveBtn.innerHTML = "Save";
        saveBtn.id = "save-btn";
        saveBtn.setAttribute("data-food",data[i].name);
        saveBtn.setAttribute("data-amount",amount);
        saveBtn.setAttribute("data-unit",unit)
        saveBtn.setAttribute("data-calorie",data[i].calories);

        listItem.textContent = 
          "Food: " + data[i].name +
          " Amount: " + amount + unit +
          " Servings: " + data[i].serving_size_g +
          " Calories: " + data[i].calories;
          listItem.appendChild(saveBtn);
          calorieUl.appendChild(listItem);
      }
    })
  }
};

document
  .querySelector('.logging-form')
  .addEventListener('submit', calorieLogHandler)
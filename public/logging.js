const calorieLog = async (event) => {
    event.preventDefault();
  
    const food = document.querySelector('#food-item').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const unit = document.querySelector('#unit').value.trim();
  
    if (food && amount && unit) {
      const response = await fetch('/api/calories', {
        method: 'POST',
        body: JSON.stringify({ food, amount, unit }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
  };
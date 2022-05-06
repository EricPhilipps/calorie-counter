const calorieBtn = document.querySelector("#calorie-list")
console.log(calorieBtn);

calorieBtn.addEventListener('click', function (event) {
    if(event.target.matches('button')){
        const thisFood = event.target.dataset.food;
        const thisAmount = event.target.dataset.amount;
        const thisUnit = event.target.dataset.unit;
        const thisCalorie = event.target.dataset.calorie;

        console.log(thisFood);
        console.log(thisAmount);
        console.log(thisUnit);
        console.log(thisCalorie);
        // fetch!
        fetch('/api/dbcalorie' , {
            method: 'POST',
            body: JSON.stringify({ 
                food_name: thisFood,
                amount: thisAmount,
                unit: thisUnit,
                calories: thisCalorie
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            return response.json();
        })
    }
});
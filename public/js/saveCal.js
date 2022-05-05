const calorieBtn = document.querySelector("#calorie-list")
console.log(calorieBtn);

calorieBtn.addEventListener('click', function (event) {
    if(event.target.matches('button')){
        let thisFood = event.target.dataset.food;
        let thisAmount = event.target.dataset.amount;
        let thisUnit = event.target.dataset.unit;
        let thisCalorie = event.target.dataset.calorie;
        let dateId = 1;
        console.log(thisFood);
        console.log(thisAmount);
        console.log(thisUnit);
        console.log(thisCalorie);
        // fetch!
        fetch('/api/dbcalorie' , {
            method: 'POST',
            body: JSON.stringify({ 
                thisFood,
                thisAmount,
                thisUnit,
                thisCalorie,
                dateId
            })
            .then(response => {
                // return response.json();
            })
        })
    }
});
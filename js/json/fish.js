fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => {
        const myData = data.meals;
        let twoFavoriteFood = getTwoFood(myData);
        
        twoFavoriteFood.map(food => {
            const foodContainer = document.getElementById('foodContainer');
            const div = newDiv(food);
            foodContainer.appendChild(div);

        })

    })





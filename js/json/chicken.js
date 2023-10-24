fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then(res => res.json())
    .then(data => {
        const myData = data.meals;
        const twoFavoriteFood = getTwoFood(myData);

        twoFavoriteFood.map(ChickenFood => {
            const foodContainer = document.getElementById('foodContainer');
            const div = newDiv(ChickenFood);
            foodContainer.appendChild(div);
        })

    })


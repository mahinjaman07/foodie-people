fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chocolate')
    .then(res => res.json())
    .then(data => {
        const myData = data.meals;
        const twoFavoriteFood = getTwoFood(myData);

        twoFavoriteFood.map(rice => {
            const foodContainer = document.getElementById('foodContainer');
            const div = newDiv(rice);
            foodContainer.appendChild(div);
        })

    })
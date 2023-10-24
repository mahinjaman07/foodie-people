// document.getElementById('search-btn').addEventListener('click',function(){
//     const inputFoodName = document.getElementById('input-text').value;
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         location.href = "searchFood.html";
//         const dataArr = data.meals;
//             dataArr.map(foods => {
//                 location.href = "searchFood.html";
//                 const searchFoodDiv = document.getElementById('foodContainer');
//                 const searchFood = newDiv(foods);
//                 console.log(searchFoodDiv);
//                 searchFoodDiv.innerHTML = '';
//                 searchFoodDiv.appendChild(searchFood);
                
//             })
            
//     })
//     .catch(error => {
//         alert('Sorry Sir This Product Not Available..! Thank You');
//         console.log(error);
//     })
// })


// Set The New Data
const allData = itemsName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemsName}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const allData = data.meals;
            allData.map(foods => {
                const allDataContainer = document.getElementById('allFoodContainer');
                const foodDiv = allDataDiv(foods);
                allDataContainer.appendChild(foodDiv)
            })
        })
}

const chicken = allData('chicken');
const burger = allData('burger');
const rice = allData('rice');
const fish = allData('fish');
const chocolate = allData('chocolate');
const iceCream = allData('ice');
const pizza = allData('pizza');
const egg = allData('egg');

// All Food Div
function allDataDiv(arrData) {
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="card mb-3" style = "max-width: 540px max-height:200px;" >
                    <div class="row g-0 align-items-center justify-content-center">
                        <div class="col-md-4">
                            <img src="${arrData.strMealThumb}" class=" w-100 rounded" alt="${arrData.strMeal}">
                        </div>
                        <div class="col-md-8 overflow-auto  " style="height: 150px">
                            <div class="card-body">
                                <h3 h5 class="card-title"> ${arrData.strMeal}</h3>
                                <p class="card-text ">${arrData.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#allFoodsModal" onclick="allFoodDetails(${arrData.idMeal})" id="details-btn">View Details</button>
            </div>`
    return div;
}



// New Modal Details
function allFoodDetails(foodId) {
    const detailsDiv = document.getElementById('details-div');
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const newDetails = data.meals[0];
            const modalContent = document.querySelector('.modal-dialog');
            const div = document.createElement('div');
            div.classList.add('modal-content')
            div.innerHTML = `
            
                    <div class="modal-header">
                        <h5 class="modal-title">${newDetails.strMeal}</h5>
                    </div>
                    <div class="modal-body">
                        <img class="img-fluid" src="${newDetails.strMealThumb}" alt="Thumbnail">
                        <p><span class="fw-bolder">Category :</span>${newDetails.strCategory}</p>
                        <p><span class="fw-bolder">Area :</span>${newDetails.strArea}</p>
                        <p><span class="fw-bolder">Instruction :</span>${newDetails.strInstructions}</p>
                        <p><span class="fw-bolder">YouTube :</span>${newDetails.strYoutube}</p>
                    </div>
                    <div class="modal-footer">
                        <button onclick="clearData('.modal-dialog')" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
            `
            modalContent.innerHTML = '';
            modalContent.appendChild(div)
        })

}


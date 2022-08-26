document.body.style.backgroundImage = "url(./images/galaxy.gif)";
/* HEADER */
let title = document.querySelector('h1');
title.style.color = "#fff";
title.style.textAlign = "center";
title.style.fontFamily = "sans-serif";

let inputWrapper = document.querySelector('.inpt-wrapper');
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "row";
inputWrapper.style.alignItems = "center";
inputWrapper.style.justifyContent = "center";

let input = document.querySelector('#mass');
input.style.margin = "2vw";
input.style.border = "none";
input.style.padding = "1.2vw";
input.style.borderRadius = "2%";

let select = document.querySelector('select');
select.classList = "select";
select.style.padding = "1.2vw";
select.style.color = "gray";
select.style.border = "none";
select.style.borderRadius = "2%";

let button = document.querySelector('button');
button.style.margin = "2vw";
button.style.padding = "1.2vw";
button.style.backgroundColor = "rgba(112, 112, 112, 0.79)";
button.style.border = "none";
button.style.color = "white";
button.style.borderRadius = "2%";

/* PLANET CONTAINER */
let flexContainer = document.querySelector('.flex-container');
flexContainer.style.backgroundColor = "rgba(70, 70, 70, 0.5)";
flexContainer.style.display = "flex";
flexContainer.style.flexDirection = "row";
flexContainer.style.alignItems = "center";
flexContainer.style.justifyContent = "center";
flexContainer.style.margin = "0vh 8vw";
flexContainer.style.padding = "2vw";

let planetContainer = document.querySelector('.image')
let planetImage = document.querySelector('.planet-image');
planetImage.style.display = "none";
//console.log(planetImage);
let descriptionContainer = document.querySelector('.description');
let description = document.createElement('p');
descriptionContainer.appendChild(description);
description.textContent = "Mass is required";
description.style.fontFamily = "sans-serif";
description.style.color = "white";
description.style.fontSize = "1rem";
description.style.padding = "3vh 10vw";
description.style.backgroundColor = "rgba(80, 80, 80, 0.3)";
description.style.borderRadius = "2%";
description.style.display = "flex";
description.style.flexDirection = "column";
description.style.alignItems = "center";
description.style.textAlign = "center";

let result = document.createElement('span');
result.textContent = "5N";
result.style.margin = "1vw";
result.style.padding = "4vw";
result.style.borderRadius = "50%";
result.style.backgroundColor = "rgba(100, 100, 100, 0.3)";

/* CREA DISTINTOS VALORES PARA SELECCIONAR, LAS IMAGENES DE LOS PLANETAS */
//console.log(planets);
for(let planet of planets){
    let value = document.createElement('option');
    value.classList = "planet";
    value.textContent = planet.name;
    select.appendChild(value);
    //console.log(planet.name);
    let planetImage = document.createElement('img');
    planetImage.src = planet.image;
    planetImage.style.display = "none";
    planetContainer.appendChild(planetImage);
    //console.log(planet.image);
}

/* SELECT EVENT LISTENER */
let planetGravity;
let planetName;

select.addEventListener('change', e => {
    //console.log(e.target.value);
    let planetImageToShow = e.target.value;
    for(let planet of planets){
        if(planet.name == planetImageToShow){
            //console.log(planet.image);
            planetName = planet.name.toUpperCase();
            planetImage.src = planet.image;
            planetImage.style.width = "20vw";
            planetImage.style.padding = "4vh";
            planetGravity = planet.surfaceGravity;
            //console.log(planetGravity);
        }
    }
})

/* INPUT EVENT LISTENER */
let massKg;
input.addEventListener('change', e => {
    massKg = parseInt(input.value);
    if (isNaN(massKg)){
        console.log("Enter a valid number");
    }
})

/*Weight = Mass x Surface Gravity*/
function calculateWeight(kg, surface){
    let weight = kg * surface;
    return weight.toFixed(2);
}

/* BUTTON EVENT LISTENER */
//console.log(planetName);
//console.log(input.value.length);
button.addEventListener('click', e => {
    if (input.value.length != 0){
        planetImage.style.display = "block";
        description.textContent = `The weight of the object on ${planetName}`;
        let calcul = calculateWeight(massKg, planetGravity)
        //console.log(massKg);
        //console.log(planetGravity);
        result.textContent = calcul;
        description.appendChild(result);
        //console.log(calcul);
    }
})
let code = [];
let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];
// let hexColour = `#`;
console.log("original: "+code.length);


function cssManipulator(sele, prop, value) {
    return document.querySelector(sele).style.setProperty(prop, value);
}

function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function changeColour() {
    let hexColour = `#`;
    console.log("before: "+code.length);

    while (code.length <= 5) {
        let randomHexCode = hexCode[getRandomIndex(0, 15)];
        hexColour += randomHexCode;
        code.push(randomHexCode);
    };

    console.log(code.length);
    console.log(hexColour);
    
    let eleRef = document.querySelector(`.hexColourCode`);
    eleRef.innerHTML = hexColour;

    cssManipulator(`body`, `background-color`, hexColour);

    code = [];
}

// changeColour();







// let c1; let c2; let c3; let c4; let c5; let c6;
// function changeColour() {
//     let eleRef = document.querySelector(`.hexColourCode`);
//     let hexColour = `#` + c1 + c2 + c3 + c4 + c5 + c6;

//     c1 = hexCode[getRandomIndex(0, 15)];
//     c2 = hexCode[getRandomIndex(0, 15)];
//     c3 = hexCode[getRandomIndex(0, 15)];
//     c4 = hexCode[getRandomIndex(0, 15)];
//     c5 = hexCode[getRandomIndex(0, 15)];
//     c6 = hexCode[getRandomIndex(0, 15)];

//     console.log(hexColour);

//     eleRef.innerHTML = hexColour;
//     cssManipulator(`body`, `background-color`, hexColour);
// }
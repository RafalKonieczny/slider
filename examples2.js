let bool = 5 > 10;
console.log(bool);

let bool2 = 1 === 1;
console.log(bool2);

let bool3 = 1 !==2;
console.log(bool3);

let bool4 = "Rafał" === "Rafał";
console.log(bool4);

let isBiggerThen10 = (number) => {
    if(number > 10) {
        console.log("Liczna jest większa od 10");
    }

    else {
        console.log("Liczba nie jest większa od 10");
    }
};

isBiggerThen10(20);
isBiggerThen10(5);


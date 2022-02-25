"use strict";
let n1 = 10;
let n2 = 20;
let msg = "La respuesta es: ";
const suma = (n1, n2) => {
    let resp = n1 + n2;
    console.log(msg);
    console.log(`${n1} + ${n2} = ${resp}`);
};
suma(5, 10);

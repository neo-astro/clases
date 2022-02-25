let n1:number = 10
let n2:number = 20
let msg = "La respuesta es: "
const suma = (n1:number,n2:number)=>{
    let resp = n1 + n2
    console.log(msg);
    console.log(`${n1} + ${n2} = ${resp}`);
}

suma(5,10)
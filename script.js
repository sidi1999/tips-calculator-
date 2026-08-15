// 1. recojer los valores de los inputsnumber y asignarlos a variables
// 2. recoger el valor del boton que se pulsa
// 3. con una funcion calcular el valor de la cuenta y el tip por persona 
// 4. insertar la info en el apartado de los amount


const contInput1 = document.querySelector("#cont-input1")
const contInput2 = document.querySelector("#cont-input2")
const inputBill = document.getElementById("input-bill");
const inputPeople = document.getElementById("input-people");
const resetBtn = document.querySelector("#btn-reset");

// Seleccionar elementos del resultado ANTES de usarlos
const tip = document.getElementById("tip");
const totalBill = document.getElementById("total-bill");

const btns = document.querySelectorAll(".btn");
const error = document.querySelector(".error");

error.classList.add("hidden");
let bill = 0;
let people = 0;
let btnSelected = 0;

resetBtn.addEventListener('click', ()=>{
    bill = 0;
    people = 0;
    btnSelected = 0;
    inputBill.value = ""
    inputPeople.value = ""
    tip.textContent = "$0.00";
    totalBill.textContent = "$0.00";
    // Limpiar los bordes
    contInput1.classList.remove("border-red", "border-green");
    contInput2.classList.remove("border-red", "border-green");
})


inputBill.addEventListener('input', (e)=> {bill = parseFloat(e.target.value) || 0;
    if(bill > 0){
        contInput1.classList.add("border-green")
        calculatorTip();
    }

    else{
        contInput1.classList.add("border-red")
    }
    
})
inputPeople.addEventListener('input', (e)=> {people = parseFloat(e.target.value) || 0;
    calculatorTip();
})
   
btns.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        btns.forEach(b => b.classList.remove("btn-active"));
        btnSelected = parseFloat(event.target.value) || 0;
        btn.classList.add("btn-active");
        calculatorTip();
    })
})

const calculatorTip = ()=>{
    if (people > 0 ){
    contInput2.classList.add("border-green")
    const billperoson = bill / people
    const tipCalc = (billperoson * btnSelected)/100;

    const billtotal = billperoson + tipCalc;

    tip.textContent = `$${tipCalc.toFixed(2)}`;
    totalBill.textContent = `$${billtotal.toFixed(2)}`;
    error.classList.add("hidden");
    }
    else{
        error.classList.remove("hidden");
        contInput2.classList.add("border-red")
    }
    
}


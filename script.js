// 1. recojer los valores de los inputsnumber y asignarlos a variables
// 2. recoger el valor del boton que se pulsa
// 3. con una funcion calcular el valor de la cuenta y el tip por persona 
// 4. insertar la info en el apartado de los amount

// variables
const contInput1 = document.querySelector("#cont-input1")
const contInput2 = document.querySelector("#cont-input2")
const inputBill = document.getElementById("input-bill");
const inputPeople = document.getElementById("input-people");
const resetBtn = document.querySelector("#btn-reset");
const tip = document.getElementById("tip");
const totalBill = document.getElementById("total-bill");

const btns = document.querySelectorAll(".btn");
const error = document.querySelector(".error");
let bill = 0;
let people = 0;
let btnSelected = 0;








// input bill
inputBill.addEventListener('input', (e)=> 
    { bill = parseFloat(e.target.value)|| 0;
    if(bill > 0){
        contInput1.classList.add("border-green");
        contInput1.classList.remove("border-red");
        calculatorTip();}
    else{
        contInput1.classList.add("border-red");
        contInput1.classList.remove("border-green");
    }
    console.log(bill);
})
// btns
btns.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        btns.forEach(b => b.classList.remove("btn-active"));
        btnSelected = parseFloat(event.target.value);
        btn.classList.add("btn-active");
        calculatorTip();
    })
})

// input people
inputPeople.addEventListener('input', (e)=> {people = parseFloat(e.target.value);
    calculatorTip();
})
   

// function 
const calculatorTip = ()=>{
    if (people > 0 ){
    contInput2.classList.add("border-green")
    const billperson = bill / people;
    const tipCalc = (billperson * btnSelected)/100;

    const billtotal = billperson + tipCalc;

    tip.textContent = `$${tipCalc.toFixed(2)}`;
    totalBill.textContent = `$${billtotal.toFixed(2)}`;
    error.classList.add("hidden");

    contInput2.classList.add("border-green");
    contInput2.classList.remove("border-red");
    resetBtn.disabled= false;
    
    }
    else{
        error.classList.remove("hidden");
        contInput2.classList.add("border-red");
        contInput2.classList.remove("border-green");
    }
    
}

error.classList.add("hidden");

resetBtn.disabled= true;
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
    btns.forEach(b => b.classList.remove("btn-active"));
    resetBtn.disabled=true;
})

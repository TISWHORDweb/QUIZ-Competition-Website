let pay = document.getElementById("pay")
let amount = document.getElementById("amount")
let mode = document.getElementById("mode")


pay.onclick = function (e){
    e.preventDefault()

    let amountVal = amount.value

    if(amountVal < 5000 ){
        alert("Sorry you can't deposit any amount lower than 5000")
    }else {
        alert(`Transaction of ${amountVal} is successful`)
       mode.classList.toggle("modalss")
    }

    document.getElementById("was").innerHTML = amountVal
    

}
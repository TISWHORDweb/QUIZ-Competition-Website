////////////signup
let school = document.getElementById("school")
let cand = document.getElementById("cand")
let btnSigns = document.getElementById("btnSigns")
let noom = document.getElementById("noom")
let emmail = document.getElementById("emmail")



let data = localStorage.getItem('school');
console.log(data)
arr = JSON.parse(data);
console.log(arr.school)

let Selects = document.getElementById("Selects").innerHTML = arr.school


btnSigns.onclick = function(e){
    e.preventDefault()
    //let schoolval = school.value
    let candval = cand.value
    let noomVal = noom.value
    let emmailVal = emmail.value

   if(candval == "" || candval == null || noom == "" || noom == null || emmail == "" || emmail == null){
     alert("fill in the following options")
   }else{
    let userData = {candidate: candval, number: noomVal, email: emmailVal}

    localStorage.setItem('user', JSON.stringify(userData));
    let data = localStorage.getItem('user');
    console.log(data)
    arr = JSON.parse(data);
    alert(`${arr.candidate} is registered successfully`)
    window.location.href = '/login.html'
   }
}
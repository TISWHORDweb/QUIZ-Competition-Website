////////////login
// let school = document.getElementById("school")
let btnSigns = document.getElementById("btnSigns")
let noom = document.getElementById("noom")
let emmail = document.getElementById("emmail")

//let val = document.getElementById("val").innerHTML = arr.school

btnSigns.onclick = function(e){
    e.preventDefault()
    let noomVal = noom.value
    let emmailVal = emmail.value

   if(noomVal == "" || noomVal == null || emmailVal == "" || emmailVal == null ){
     alert("Enter your candidate name")
   }else{

    let data = localStorage.getItem('user');
    arr = JSON.parse(data);

    if(noomVal == arr.number && emmailVal == arr.email){
        alert(`welcome ${arr.candidate}`)
        window.location.href = '/show.html'
        console.log(arr.school)
    }else{
        alert("invalid candidate details")
    }
    
    
   }
}
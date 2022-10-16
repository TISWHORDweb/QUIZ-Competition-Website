////////////signup
let school = document.getElementById("school")
let cand = document.getElementById("cand")
let btnSign = document.getElementById("btnSign")
let linns = document.getElementById("linns")




linns.onclick = function(e){
  e.preventDefault()
  let schoolval = school.value
  //let candval = cand.value

 if(schoolval == "" || schoolval == null ){
   alert("Enter your school name")
 }else{
  let userData = {school: schoolval}

  localStorage.setItem('user', JSON.stringify(userData));
  let data = localStorage.getItem('user');
  console.log(data)
  arr = JSON.parse(data);
  console.log(arr.school)
  alert(`${arr.school} is registered successfully`)
  window.location.href = '/signUp2.html'
 }
}


btnSign.onclick = function(e){
    e.preventDefault()
    let schoolval = school.value
    //let candval = cand.value

   if(schoolval == "" || schoolval == null ){
     alert("Enter your school and candidate name")
   }else{
    let schools = {school: schoolval}

    localStorage.setItem('school', JSON.stringify(schools));
    let data = localStorage.getItem('school');
    console.log(data)
    arr = JSON.parse(data);
    console.log(arr.school)
    alert(`${arr.school} is registered successfully`)
    window.location.href = '/signUp2.html'
   }
}
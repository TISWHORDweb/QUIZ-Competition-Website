////////////signup
let school = document.getElementById("school")
let cand = document.getElementById("cand")
let btnSign = document.getElementById("btnSign")
let linns = document.getElementById("linns")
var school_name = $("#school_name")
var school_address = $("#school_address")
var school_email = $("#school_email")
var school_contact = $("#school_contact")
var inputs = $(".inputs")
//var creat_school_btn = $("#creat_school_btn")





linns.onclick = function(e){
  e.preventDefault()
  alert("Enter your school Details")
}


btnSign.onclick = function(e){
    e.preventDefault()
    let input = inputs.val()
    //let candval = cand.value

   if(input == "" || input == null ){
     alert("Enter your school and candidate name")
   }else{

    // let schools = {school: schoolval}

    // localStorage.setItem('school', JSON.stringify(schools));
    // let data = localStorage.getItem('school');
    // console.log(data)
    // arr = JSON.parse(data);
    // console.log(arr.school)
    
    function creatSchool(){
      $.ajax({
          type:"POST",
          url:"http://localhost:4000/api/schools/register",
          data:{
              "schoolName": school_name.val(),
              "schoolEmail": school_email.val(),
              "schoolAddress": school_address.val(),
              "schoolContact": school_contact.val(),
          },
          success:function(res){
              console.log(res)
              alert(`${school_name.val()} School Registered`)
              window.location.href = '/signUp2.html'
          },
          error:function(err){
              console.log(err)
              alert('School Not registered');
          }
      })
  }
  creatSchool()
   
   }
}






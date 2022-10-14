////////////signup
let btnSigns = document.getElementById("btnSigns")
let noom = document.getElementById("noom")


var names = $('#name')
var phone = $('#phone')
var email = $('#email')
//var image = $('#image')
var password = $('#password')
var inputs = $(".inputs")



// let data = localStorage.getItem('school');
// console.log(data)
// arr = JSON.parse(data);
// console.log(arr.school)

// let Selects = document.getElementById("Selects").innerHTML = arr.school

function getSchoolSelect(){
  $.ajax({
      type:"GET",
      url:"http://localhost:4000/api/schools/",
      success:function(res){
              res.forEach(d => {
                  $('#selects').append(`<option value="${d.schoolName}" >${d.schoolName}</option>`);
              });
              console.log($('#selects').val())
      },
      error:function(err){
          alert('No Internet Connection')
      }
  });
}



getSchoolSelect()



$(document).ready(function () {

  btnSigns.onclick = function(e){
    e.preventDefault()

    let input = inputs.val()
    //let candval = cand.value

   if(input == "" || input == null ){
     alert("Enter your school and candidate name")
   }else{

    
    let pick = ($("#selects").val());
    
    function creatCandidate(){
        $.ajax({
            type:"POST",
            url:"http://localhost:4000/api/candidate/auth/register",
            data:{
                "CandSchoolName": pick,
                "candName": names.val(),
                "candEmail": email.val(),
                "candPhone": phone.val(),
                "candPassword": password.val()
            },
            success:function(res){
                console.log(res)
                alert(' Candidate Created')
                window.location.href = '/login.html'
            },
            error:function(err){
                alert('Candidate already exist or check your internet connection');
            }
        })
    }
    creatCandidate()

  }
}


})





    //let schoolval = school.value
  //   let candval = cand.value
  //   let noomVal = noom.value
  //   let emmailVal = emmail.value

  //  if(candval == "" || candval == null || noom == "" || noom == null || emmail == "" || emmail == null){
  //    alert("fill in the following options")
  //  }else{
  //   let userData = {candidate: candval, number: noomVal, email: emmailVal}

  //   localStorage.setItem('user', JSON.stringify(userData));
  //   let data = localStorage.getItem('user');
  //   console.log(data)
  //   arr = JSON.parse(data);
  //   alert(`${arr.candidate} is registered successfully`)
  //   window.location.href = '/login.html'
  //  }

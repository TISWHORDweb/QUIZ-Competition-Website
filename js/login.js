////////////login
// let school = document.getElementById("school")
let btnSigns = document.getElementById("btnSigns")
var inputs = $(".inputs")
var email = $('#email')
var password = $('#password')

//let val = document.getElementById("val").innerHTML = arr.school


function loginUser(){
    $.ajax({
        type:"POST",
        url:"http://localhost:4000/api/candidate/auth/login",
        data:{
            "candEmail": email.val(),
            "candPassword": password.val()
        },
        success:function(res){
            console.log(res)
            console.log(res._id)
            if(res.error){
                alert('Wrong Email or Password')
            }else{
                alert('login successful')
                window.location.href='/show.html'
            }
        },
        error:function(err){
            console.log(err)
        }
    })
}



btnSigns.onclick = function(e){
    e.preventDefault()
    
    let input = inputs.val()

   if(input == "" || input == null ){
     alert("Enter your candidate name")
   }else{

    console.log(email.val())
    console.log(password.val())

    loginUser();

    // let data = localStorage.getItem('user');
    // arr = JSON.parse(data);

    // if(noomVal == arr.number && emmailVal == arr.email){
    //     alert(`welcome ${arr.candidate}`)
    //     window.location.href = '/show.html'
    //     console.log(arr.school)
    // }else{
    //     alert("invalid candidate details")
    // }
    
    
   }
}






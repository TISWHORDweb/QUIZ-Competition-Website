// let school = document.getElementById("school")
// let cand = document.getElementById("cand_name")
// let btn_sign = document.getElementById("btn_sign")

//  let schoolval = school.value
//  let candval = cand.value

//  btn_sign.onclick = function(e) {
//     e.preventDefault
//     console.log(candval)
//     console.log(schoolval)
// }


const countdown = () => {
    const countDate = new Date("October 1, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60
    const day = hour * 24


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);



    
    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;

    
    if(textDay == 0 && textHour == 0 && textMinute == 0 && textSecond == 0){
        alert("Time up for free registration you have to pay before registering")
    }

    // if(gap < 10000){
    //     launchpay();
    // }

};

setInterval(countdown, 1000)


let make = document.getElementById("make")
make.onclick = function(e){
    e.preventDefault()
    window.location.href = '/pay.html'
}

let sign = document.getElementById("sign")
sign.onclick = function(e){
    e.preventDefault()
    window.location.href = '/signUp.html'
}


let data = localStorage.getItem('user');
console.log(data)
arr = JSON.parse(data);
console.log(arr.candidate)

let datas = localStorage.getItem('school');
console.log(datas)
arrs = JSON.parse(datas);
console.log(arrs.school)


let namy = document.getElementById("namy").innerHTML = arr.candidate
let schooly = document.getElementById("schooly").innerHTML =arrs.school

 document.getElementById("start").onclick = function (e){
    e.preventDefault()
    window.location.href = "/quiz.html"
}



let datas = localStorage.getItem('score');
console.log(datas)
arrs = JSON.parse(datas);
console.log(arrs.score)

//let num = document.getElementById("num").innerHTML = arrs.score

let datass = localStorage.getItem('school');
console.log(datass)
arrss = JSON.parse(datass);
console.log(arrss.school)

let data = localStorage.getItem('user');
console.log(data)
arr = JSON.parse(data);

let namy = document.getElementById("namy").innerHTML = arr.candidate
//let schooly = document.getElementById("schooly").innerHTML =arr.school

let schools = arrss.school;
let candidates = arr.candidate;
let scores = arrs.score;

// console.log(schools)
// console.log(candidates)
// console.log(scores)



let resultArr = [];
let school_data = localStorage.getItem("school_data");
function creat_school_data (){
    if(school_data){
        resultArr = JSON.parse(localStorage.getItem("school_data"));
    }
    let new_school_data = {
        school: schools,
        candidate: candidates,
        score: scores,
    };
    resultArr.push(new_school_data);
    localStorage.setItem("school_data", JSON.stringify(resultArr));
    console.log(JSON.parse(localStorage.getItem("school_data")))
}

document.getElementById("check").onclick = (e) =>{
    e.preventDefault();
    creat_school_data();

    info = (JSON.parse(localStorage.getItem("school_data")))

    for(let i =0;i<info.length;i++){
        let d = info[i]
        let show = output(d)
        document.getElementById("output").innerHTML += show;
    }
}

function output(d){
    return `  <tr>
    <td>${d.school}</td>
    <td>${d.candidate}</td>
    <td>${d.score} %</td>
    </tr>`
}


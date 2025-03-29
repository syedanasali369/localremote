let btnlargedata = document.getElementById('btnlargedata')
btnlargedata.addEventListener("click",() => { 
let result = 0
for (let i= 0; i < 10000000000; i++){
    result += i;
}
document.querySelector('#output').innerHTML=result 
const wokerObj = new Worker("webworker.js")
wokerObj.postMessage("Start Worker")
wokerObj.onmessage = function (e) {
    document.querySelector("#output").innerHTML=result
}


})
let btnprintHi = document.querySelector('#btnprintHi')
btnprintHi.addEventListener('click',() =>{
    document.querySelector('#hi').innerHTML+= "Hi!"
})
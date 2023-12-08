
setTimeout(() => {
    console.log("Cirak 1 Sonra gelecek")
}, 0);

setTimeout(() => {
    myFunction2
    console.log("Cirak 1 Sonra gelecek")
}, 0);

console.log("Burasi ilk calisir");
console.log("Burasi ikinci calisir");
console.log("Burasi ucuncu calisir");
console.log("Burasi dorduncu calisir");
console.log("Burasi besinci calisir");
console.log("Burasi altinci calisir");
console.log("Burasi yedinci calisir");
console.log("Burasi en son calisir");

function myFunction1()
{
    for(let i = 0 ; i<1000; i++){}
    console.log("Cirak 2 Sonra gelecek");
}

function myFunction2()
{
    for(let i = 0 ; i<1000; i++){}
    console.log("Cirak 2 Sonra gelecek");
}


function getData() 
{
    setTimeout(() =>
    {
        data = {title:"JavaScript" , lesson:"Async"};
        console.log(data);
    },2000);
}

console.log(getData());
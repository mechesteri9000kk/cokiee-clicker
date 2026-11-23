let cookieCount = 0;

let cookievärde= 1;

let autoclickers = 0;

document.getElementById("cookie").addEventListener("click", function(event) {
    cookieCount = cookievärde + cookieCount;
     document.getElementById("Text").innerText = cookieCount;
       document.getElementById("fel1").innerText = "";
       document.getElementById("fel2").innerText = "";
  
});

console.log("Current cookie count:", cookieCount);


document.getElementById("upgrade1").addEventListener("click", function(event) {
if (cookieCount>=25) {
cookievärde++;
cookieCount = cookieCount-25;
document.getElementById("Text").innerText = cookieCount;
  document.getElementById("fel1").innerText = "köpt";
}else{
    document.getElementById("fel1").innerText = "skill issue";
}
})

document.getElementById("upgrade2").addEventListener("click", function(event) {
if (cookieCount>=30) {
    cookieCount = cookieCount-30;
    autoclickers++;

    document.getElementById("Text").innerText = cookieCount;
     document.getElementById("fel2").innerText = "köpt";
      


    
}
else {
   document.getElementById("fel2").innerText = "skill issue"; 
}
})
document.getElementById("fel2").innerText = "";
setInterval (function() {
   
    if (autoclickers > 0) {
        cookieCount = cookieCount + autoclickers;
        document.getElementById("Text").innerText = cookieCount;
    }
  

}, 1000);


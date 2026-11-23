let cookieCount = 0;

let cookievärde= 1;

let autoclickers = 0;

document.getElementById("cookie").addEventListener("click", function(event) {
    cookieCount = cookievärde + cookieCount;
     document.getElementById("text").innerText = cookieCount;
       document.getElementById("fel").innerText = "";
  
});

console.log("Current cookie count:", cookieCount);


document.getElementById("upgrade1").addEventListener("click", function(event) {
if (cookieCount>=25) {
cookievärde++;
cookieCount = cookieCount-25;
document.getElementById("text").innerText = cookieCount;
  document.getElementById("fel").innerText = "köpt";
}else{
    document.getElementById("fel").innerText = "skill issue";
}
})

document.getElementById("upgrade2").addEventListener("click", function(event) {
if (cookieCount>=30) {
    cookieCount = cookieCount-30;
    autoclickers++;

    document.getElementById("cookieCount").innerText = cookieCount;
    


    
}
else {
   document.getElementById("fel").innerText = "skill issue"; 
}
})

setInterval (function() {
    if (autoclickers > 0) {
        cookieCount = cookieCount + autoclickers;
        
    }
    
    

}, 1000);


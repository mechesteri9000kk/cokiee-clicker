let cookieCount = 0;

function updateCookieCount() {
    document.getElementById("text").innerText = cookieCount;
}

document.getElementById("cookie").addEventListener("click", function(event) {
    cookieCount++;
    updateCookieCount();
});

console.log("Current cookie count:", cookieCount);

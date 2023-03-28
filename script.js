// finding and changing
document.getElementById("textbanner").innerHTML =
    "Thank you for visiting T-Movies, the best movie trailer site to find your favorite entertainment."

// add and delete
function changeButtonDesc() {
    let btnElement = document.getElementById("btnnn");
    btnElement.innerHTML = (btnElement.innerHTML == "Login") ? "Log out" : "Login";
}

function myFunction() {
    alert("Page is loaded");
}
// add event
function ok(){
    alert("Click OK");
}
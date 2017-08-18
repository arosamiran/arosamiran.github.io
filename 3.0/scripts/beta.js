function thanks(){
    var follow = document.getElementById('followBtn');
    follow.classList += " hide";
    var thanksMsg = document.getElementById("thanks");
    thanksMsg.style.color = "white";
    thanksMsg.style.opacity = 0.4;
    thanksMsg.classList = "show text";
}
window.onload = init();

function init() {
    var sw, sh;
    sw = screen.width + "px";
    sh  = screen.height + "px";
    // console.log("screen width:" + sw);
    // console.log("screen height:" + sh);

    // set main wrapper height
    var main = document.getElementById('wrapper');
    main.style.height = sh;    
}
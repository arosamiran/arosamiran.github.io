
window.onload = createRequest;
var xhttp = new XMLHttpRequest();

function createRequest(){
    // var xhttp = new XMLHttpRequest();
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    console.log("Request created");
    // dateToday();
    getPostDate();
}

function getPostDate(){
    // var xhttp = new XMLHttpRequest();
    postDate();
    xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        document.getElementById("date").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "posts/" + fullDate + ".php", true);
    xhttp.send();
    console.log("Request sent");    
}

function getPreview(){
    createRequest();
}

function postDate(){
    var todayHandler = document.getElementById("today");
    // console.log(dateToday);
    month = new Date().getMonth();
    var date = new Date().getDate();
    var year = new Date().getFullYear();
    fullDate = month.toString() + date.toString() + year.toString()  + ".txt";
    monthConverter(month);
    var dateToday = new Date().getDate();
    var year = new Date().getFullYear();
    todayHandler.innerHTML = month + " " + dateToday + ", " + year;
    return fullDate;
}

function monthConverter(){
    switch(month){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default:
            month = "null";
            break;
    }    
    return month;
}

// post object

var post = {
    postDate : document.getElementById("date").nodeValue,
    author : "Angelo Rosamiran"
};

console.log(post.postDate);
window.onload = dateToday;
function dateToday(){
    var todayHandler = document.getElementById("today");
    // console.log(dateToday);
    month = new Date().getMonth();    
    monthConverter(month);
    var dateToday = new Date().getDate();
    var year = new Date().getFullYear();
    todayHandler.innerHTML = month + " " + dateToday + ", " + year;
    // console.log(month);        
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
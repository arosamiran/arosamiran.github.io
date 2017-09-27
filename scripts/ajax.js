function change() {
  var xmlhttp;
  
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
    console.log("Request created!");
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    console.log("Request created!");  
  }

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "sample/text.txt", true);
  xmlhttp.send();
}
function highlight() {
    //Write your code here
	var boldElements = document.querySelectorAll("strong");
    for (var i = 0; i < boldElements.length; i++) {
    boldElements[i].style.color = "green";
	}
}


function return_normal() {
    //Write your code here
	var boldElements = document.querySelectorAll("strong");
    for (var i = 0; i < boldElements.length; i++) {
    boldElements[i].style.color = "black";
	}
}

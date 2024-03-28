var buttonImg1 = document.getElementById('button-img1');
var buttonImg2 = document.getElementById('button-img2');
var buttonImg3 = document.getElementById('button-img3');
var buttonImg4 = document.getElementById('button-img4');

let toggle1 = true;
let toggle2 = true;
let toggle3 = true;
let toggle4 = true;

var elements = document.querySelectorAll('[data-toggle="collapse"]');
elements.forEach(element => element.addEventListener('click', collapse));

function collapse() {
    var target = this.getAttribute('data-target');
    var element = document.getElementById(target);
    element.style.display = element.style.display == "block" ? "none" : "block";

    switch(target) {
        case "collapse1":
            toggle1 = !toggle1;
            if (toggle1) {
                buttonImg1.src = "icon-plus.svg";
            } else {
                buttonImg1.src = "icon-minus.svg";
            }
            break;

        case "collapse2":
            toggle2 = !toggle2;
            if (toggle2) {
                buttonImg2.src = "icon-plus.svg";
            } else {
                buttonImg2.src = "icon-minus.svg";
            }
            break;

        case "collapse3":
            toggle3 = !toggle3;
            if (toggle3) {
                buttonImg3.src = "icon-plus.svg";
            } else {
                buttonImg3.src = "icon-minus.svg";
            }
            break;

        case "collapse4":
            toggle4 = !toggle4;
            if (toggle4) {
                buttonImg4.src = "icon-plus.svg";
            } else {
                buttonImg4.src = "icon-minus.svg";
            }
            break;  
    }
}


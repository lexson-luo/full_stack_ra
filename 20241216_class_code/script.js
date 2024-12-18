let selectId = document.querySelector("#morning");

selectId.innerHTML = "Goodbye";

let selectAllHeader = document.querySelectorAll("h1");

selectAllHeader.innerHTML = "bravo";

let selectOneClass = document.querySelectorAll(".apple")[1];

selectOneClass.innerHTML = "coconut";

let mouseEnterDemo = document.querySelector("#mouseenter");
let mouseLeaveDemo = document.querySelector("#mouseleave")




mouseEnterDemo.addEventListener("mouseenter", function() {
    mouseEnterDemo.style.color="red";
})

mouseLeaveDemo.addEventListener("mouseleave", function() {
    mouseLeaveDemo.style.color="red";
})

let textInput = document.querySelector("#username")

let submitBtn = document.querySelector('#submit_btn')

submitBtn.addEventListener("click", function () {
    let textValue = textInput.value;
    console.log("The text value is", textValue);
})

// var radioBtns = document.querySelector()

let textInput1 = document.querySelector("#swap_box1")
let textInput2 = document.querySelector("#swap_box2")

let swapBtn = document.querySelector("#swapBtn")

swapBtn.addEventListener("click", function(){
    let textValue1 = textInput1.value;
    console.log(textValue1);
    let textValue2 = textInput2.value;
    console.log(textValue2);
    textInput1.value = textValue2;
    textInput2.value = textValue1;
})



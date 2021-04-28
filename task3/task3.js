// 3) Tagging: https://kikill95.github.io/Tagging/ - vanilla js

const container = document.getElementById('container');

const first_element_text = document.getElementById("first_element_text");
const second_element_text = document.getElementById("second_element_text");
const third_element_text = document.getElementById("third_element_text");

const first_element_button = document.getElementById("first_element_button");
const second_element_button = document.getElementById("second_element_button");
const third_element_button = document.getElementById("third_element_button");

const containerX = container.getBoundingClientRect().left;
const containerY = container.getBoundingClientRect().top;

first_element_button.style.visibility = 'hidden';
second_element_button.style.visibility = 'hidden';
third_element_button.style.visibility = 'hidden';


first_element_text.onmousedown = function(event) {

    first_element_button.style.visibility = 'visible';
    second_element_button.style.visibility = 'hidden';
    third_element_button.style.visibility = 'hidden';

    // let shiftX = event.clientX - first_element_text.getBoundingClientRect().left;
    // let shiftY = event.clientY - first_element_text.getBoundingClientRect().top;

    // first_element_text.style.position = 'absolute';
    // first_element_text.style.zIndex = 1000;
    // document.body.append(first_element_text);
    // first_element_button.style.position = 'absolute';
    // first_element_button.style.zIndex = 1000;
    // document.body.append(first_element_button);

    // moveAt(event.pageX, event.pageY);

    // document.addEventListener('mouseup', onMouseUp);

    // function moveAt(pageX, pageY) {

    //     pageX = coordinatX(pageX);
    //     pageY = coordinatY(pageY);

    //     first_element_text.style.left = pageX - shiftX + 'px';
    //     first_element_text.style.top = pageY - shiftY + 'px';
    //     first_element_button.style.left = pageX - shiftX + 156 + 'px';
    //     first_element_button.style.top = pageY - shiftY + 'px';
    // }

    // function onMouseMove(event) {
    //     moveAt(event.pageX, event.pageY);
    // }

    // document.addEventListener('mousemove', onMouseMove);

    // function onMouseUp() {
    //     document.removeEventListener('mouseup', onMouseUp);
    //     document.removeEventListener('mousemove', onMouseMove);
    // }

};

second_element_text.onmousedown = function(event) {

    first_element_button.style.visibility = 'hidden';
    second_element_button.style.visibility = 'visible';
    third_element_button.style.visibility = 'hidden';

    // let shiftX = event.clientX - second_element_text.getBoundingClientRect().left;
    // let shiftY = event.clientY - second_element_text.getBoundingClientRect().top;

    // second_element_text.style.position = 'absolute';
    // second_element_text.style.zIndex = 1000;
    // document.body.append(second_element_text);
    // second_element_button.style.position = 'absolute';
    // second_element_button.style.zIndex = 1000;
    // document.body.append(second_element_button);

    // moveAt(event.pageX, event.pageY);

    // document.addEventListener('mouseup', onMouseUp);

    // function moveAt(pageX, pageY) {
    //     pageX = coordinatX(pageX);
    //     pageY = coordinatY(pageY);
    //     second_element_text.style.left = pageX - shiftX + 'px';
    //     second_element_text.style.top = pageY - shiftY + 'px';
    //     second_element_button.style.left = pageX - shiftX + 108 + 'px';
    //     second_element_button.style.top = pageY - shiftY + 'px';
    // }

    // function onMouseMove(event) {
    //     moveAt(event.pageX, event.pageY);
    // }

    // document.addEventListener('mousemove', onMouseMove);

    // function onMouseUp() {
    //     document.removeEventListener('mouseup', onMouseUp);
    //     document.removeEventListener('mousemove', onMouseMove);
    // }

};

third_element_text.onmousedown = function(event) {

    first_element_button.style.visibility = 'hidden';
    second_element_button.style.visibility = 'hidden';
    third_element_button.style.visibility = 'visible';

    // let shiftX = event.clientX - third_element_text.getBoundingClientRect().left;
    // let shiftY = event.clientY - third_element_text.getBoundingClientRect().top;

    // third_element_text.style.position = 'absolute';
    // third_element_text.style.zIndex = 1000;
    // document.body.append(third_element_text);
    // third_element_button.style.position = 'absolute';
    // third_element_button.style.zIndex = 1000;
    // document.body.append(third_element_button);

    // moveAt(event.pageX, event.pageY);

    // document.addEventListener('mouseup', onMouseUp);

    // function moveAt(pageX, pageY) {
    //     pageX = coordinatX(pageX);
    //     pageY = coordinatY(pageY);
    //     third_element_text.style.left = pageX - shiftX + 'px';
    //     third_element_text.style.top = pageY - shiftY + 'px';
    //     third_element_button.style.left = pageX - shiftX + 65 + 'px';
    //     third_element_button.style.top = pageY - shiftY + 'px';
    // }

    // function onMouseMove(event) {
    //     moveAt(event.pageX, event.pageY);
    // }

    // document.addEventListener('mousemove', onMouseMove);

    // function onMouseUp() {
    //     document.removeEventListener('mouseup', onMouseUp);
    //     document.removeEventListener('mousemove', onMouseMove);
    // }

};

function coordinatX(pageX) {
    if (pageX > containerX + 512) {
        pageX = containerX + 512;
    }
    if (pageX < containerX) {
        pageX = containerX;
    }
    return pageX;
}

function coordinatY(pageY) {
    if (pageY > containerY + 512) {
        pageY = containerY + 512;
    }
    if (pageY < containerY) {
        pageY = containerY;
    }
    return pageY;
}

first_element_button.onclick = function() {
    first_element_text.remove();
    first_element_button.remove();
};

second_element_button.onclick = function() {
    second_element_text.remove();
    second_element_button.remove();
};

third_element_button.onclick = function() {
    third_element_text.remove();
    third_element_button.remove();
};
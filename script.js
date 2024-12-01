const n = 2;
const targetIndex = (n % 10) + 1;

function toggleColor(element, buffer1, buffer2) {

    if (element.classList.contains(buffer1)) {

        element.classList.remove(buffer1);
        element.classList.add(buffer2);
    } else {

        element.classList.remove(buffer2);
        element.classList.add(buffer1);
    }
}

document.body.querySelectorAll("body *").forEach((element, index) => {
    element.id = `element-${index + 1}`;
});

document.body.addEventListener("click", (event) => {
    if (event.target.nodeType === 1) { 
        const firstElement = document.getElementById(`element-${targetIndex}`);
        const secondElement = document.querySelector(`#element-${targetIndex + 1}`);

        if (event.target === firstElement) {
            toggleColor(firstElement, "firstColors", "secondColors");
            toggleColor(secondElement, "secondColors", "firstColors");
        } else if (event.target === secondElement) {
            toggleColor(secondElement, "secondColors", "firstColors");
            toggleColor(firstElement, "firstColors", "secondColors");
        }
    }
});
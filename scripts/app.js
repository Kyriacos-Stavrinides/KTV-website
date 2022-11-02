window.onload = (event) => {
    let deviceWidth = window.screen.width;
    if (deviceWidth < 700) {
        elementRemover("card__image");
    } else if (deviceWidth < 900) {
        classRemover("card", "shadow");
        
    } else if (deviceWidth < 1440) {
        // console.log(`Device width is ${deviceWidth}`);
    } else {
        // console.log(`Device widht is ${deviceWidth}`);
    }
};



function classRemover(element, className) {
    let object = Array.from(document.getElementsByClassName(element));
    for (const item of object) {
        item.classList.remove(className);
    }
}

function elementRemover(toDelete) {
    let object = Array.from(document.getElementsByClassName(toDelete));
    for (const item of object) {
        item.remove();
    }
}
'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('mexico')

    var className = document.body.className;
    if(className == "toronto") {
        this.textContent = "Mexico";
    }
    else {
        this.textContent = "Toronto";
    }
    console.log('current class name: ' + className);
});
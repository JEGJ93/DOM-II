// Your code goes here
//(1)
const overHome = document.querySelector('.home');


overHome.addEventListener('mouseover', (event) => {
    overHome.style.backgroundColor = 'yellow';
});

//(2)
const scrollNav = document.querySelector('.main-navigation');

window.addEventListener('scroll', (event) => {
    scrollNav.style.color = 'blue';
});

//(3)
const leaveHome = document.querySelector('.home');

    leaveHome.addEventListener("mouseleave", (event) => {
        leaveHome.style.color = "purple";
        overHome.style.backgroundColor = 'green';
    });

//(4)
const dbclickFooter = document.querySelector('.footer');

    dbclickFooter.addEventListener('dblclick', () => {
        dbclickFooter.style.backgroundColor = 'orange';
    });

//(5)
const clickBus = document.querySelector('.intro img');

    clickBus.addEventListener('click', () => {
    clickBus.style.transform = "scale(1.2)"; 
    event.stopPropagation()
    });

//(6)
const resizeLetsGo = document.querySelector(".content-section");

    window.addEventListener('resize', () => {
    resizeLetsGo.style.transform = 'scale(0.4)';  
    });
    
//(7)
const enterPick = document.querySelector('.content-pick');

    enterPick.addEventListener('mouseenter', () => {
    enterPick.style.transform = "scale(1.2)";
    enterPick.style.transition = "all 0.3s";
    });

//(8)
window.addEventListener('keydown', (event) => {
    alert(`Hello, how are you?${event.keyCode}`);
    });

//(9)
const upBody = document.querySelector('body');

    upBody.addEventListener('mouseup', () => {
    upBody.style.transform = "scale(0.8)";
    upBody.style.transition = "all 0.3s";
    });



//(propagation)

    upBody.addEventListener('click', () => {
    upBody.style.border = '5px dotted grey';
})

const navi = document.querySelector('.main-navigation');

//preventDefault()
navi.addEventListener('click', (event) => {
    event.preventDefault();
})

//(10)
const moveDestination = document.querySelector('.content-destination');


    moveDestination.addEventListener('mousemove', (event) => {
    moveDestination.style.backgroundColor = 'brown';
    });



/////////////////////////////////navbar scroller

const links = document.querySelectorAll('a');


links.forEach(function (link) {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        //scrolling only if the target loc exists.
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

})


/**********************************************slider*******************************************************/

const prev = document.querySelector('#lefticon');
const next = document.querySelector('#righticon');
const cardbox = document.querySelector('.productboxflex');
var offset = 0;


//chcking screenwidth
const screenwidth= window.innerWidth;


let cardWidth = 400; // Adjust based on card width and gap
updatedots()

if (screenwidth > 700){

next.addEventListener('click', () => {
    if (offset > -800) {
       
        offset -= cardWidth;
        cardbox.style.transform = `translateX(${offset}px)`;
        updatedots();

    }
});

prev.addEventListener('click', () => {
    if (offset < 0) {
        offset += cardWidth;
        cardbox.style.transform = `translateX(${offset}px)`;
        updatedots();

    }
}
);

}

else if(screenwidth<700 && screenwidth>500){
    next.addEventListener('click', () => {
    if (offset > -2000) {
       
        offset -= cardWidth;
        cardbox.style.transform = `translateX(${offset}px)`;
        updatedots();
}
});
prev.addEventListener('click', () => {

if (offset < 0) {
    offset += cardWidth;
    cardbox.style.transform = `translateX(${offset}px)`;
    updatedots();

}
});

}
else{

    cardWidth=500;

    next.addEventListener('click', () => {
        if (offset > -2400) {
           
            offset -= cardWidth;
            cardbox.style.transform = `translateX(${offset}px)`;
            updatedots();
    }
    });
    prev.addEventListener('click', () => {
    
    if (offset < 0) {
        offset += cardWidth;
        cardbox.style.transform = `translateX(${offset}px)`;
        updatedots();
    
    }
    });


}

//slider dots update function


function updatedots(){
    
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");
const dot5 = document.querySelector("#dot5");


   
    // Remove active class from all dots
    dot1.style.color="White";
    dot2.style.color="White";
    dot3.style.color="White";
    dot4.style.color="white";
    dot5.style.color="white";
  

    // Add active class based on offset
    if (offset === 0) {
       dot1.style.color="black";
       
    } else if (offset === -cardWidth) {
        dot2.style.color="black";
    
    } else if (offset === -2 * cardWidth) {
        dot3.style.color="black";
       
    
    } else if (offset === -3 * cardWidth) {
        dot4.style.color="black";
        
    }
    else if (offset === -4 * cardWidth) {
        dot5.style.color="black";
       
    }
}




/***********************************hamburger menu***********************************/


const menu = document.querySelector('.hamburger-menu');
const hamburgeri = document.querySelector('#iconham');
const closei = document.querySelector('#iconclose');

// console.log(menu);
// console.log(hamburgeri);

hamburgeri.addEventListener('click', function () {
    menu.style.transform = 'translateX(-300px)';
    hamburgeri.style.visibility='hidden';
})
closei.addEventListener('click', () =>{
    menu.style.transform = 'translateX(0px)';
hamburgeri.style.visibility='visible';
})

function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');



    arrows.forEach(arrow =>{
        arrow.addEventListener('click',() =>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;


            // Check for validation
            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent,nextForm);
            }else{
                parent.style.animation ="shake 0.5s ease";
            }

            parent.addEventListener('animationend', ()=>{
                parent.style.animation ="";
            })
        });
    });
}


function validateUser(user){
    if(user.value.length < 6){
        error('rgb(189,87,87'); //Red color
    }else{
        error('rgb(37, 192, 102)'); //Green color
        return true;
    }
}

// Email validation

function validateEmail(email){
    const validation = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validation.test(email.value)){
        error('rgb(37, 192, 102)')
        return true;
    }else{
        error('rgb(189,87,87');
    }

}

// for next tab

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}
// wrong then background color change
function error(color){
    document.body.style.backgroundColor = color;
}
animatedForm();
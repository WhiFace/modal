'use strict';

// declaring constants for dom manipulation
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Create functions to open and close modal
function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//using a loop to loop through all of the classes with the show-modal class. treating it as an array.Then add event listiner to listen for click events
for(let i = 0; i < btnOpenModal.length; i++) btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//keyboard event: for a modal using the escape button is one of the way to close a modal. thus listen to the entire document for a key event and close modal if it doesn't contain the hidden class.

document.addEventListener('keydown', function(e){

    if(e.key === 'Escape' && !modal.classList.contains('hidden') ){
        
            closeModal();
      
    }
   
})

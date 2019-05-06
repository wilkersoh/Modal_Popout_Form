const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelector('.modal.active');
  closeModal(modals)  
})

function openModal(modal){
  if(modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}


function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


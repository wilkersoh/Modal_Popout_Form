const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const condition = document.querySelector('#revCondition');
const addNew = document.querySelector('#addNew');
const addType = document.querySelector('#addNewType');

const conditionObj = {
    All: 'All',
    Half: 'Half',
    None: 'None'
}

const addNewObj = {
    Shop: 'Shop',
    Company: 'Company',
    Restaurant: 'Restaurant'
}

const addTypeObj = {
    Senior: 'Senior',
    Junior: 'Junior',
    Freshman: 'Freshman'
}

for(let index in conditionObj){
    // (text, value)
    condition.options[condition.options.length] = new Option(conditionObj[index], index);
}

for(let index in addNewObj){
    addNew.options[addNew.options.length] = new Option(addNewObj[index], index);
}

for(let index in addTypeObj){
    addType.options[addType.options.length] = new Option(addTypeObj[index], index);
}


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







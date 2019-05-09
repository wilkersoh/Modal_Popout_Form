const delagationDOM = document.querySelector('.rules');

const addRemoveText = (e) => {
    const childRule = e.target.parentElement.parentElement;
    const parentRule = e.target.parentElement.parentElement.parentElement;

    parentRule.removeChild(childRule);
    replaceHTML(parentRule);
}

const replaceHTML = (parent) => {
    const html = `
        <div class="rule-div">
            <div class="addRule">
                <input name="addRule" placeholder="insert parameter..." autocomplete="off">
                <span id="removeText" class="removeText">Remove rule</span>
            </div>

            <div id="insertRule" class="insertRule">
                <input name="addRule" placeholder="insert parameter..." autocomplete="off">
                <span id="addedRule" class="addedRule">add rule</span>

                <div class="icon">
                    <i class="fas fa-minus-circle" style="cursor: pointer"></i>
                </div>
            </div>

        </div>
    `;
    parent.insertAdjacentHTML('beforeend', html);
}

const addMoreRule = (parent) => {

    const newChild = `
        <div class="rev-rule">
            <div class="rule">
                <div class="ruleNum"></div>
                <select id="addNew" name="revType">
                    <option>Js Developer</option>
                    <option>Ruby Developer</option>
                    <option>Php Developer</option>
                </select>
                <select id="addNewType" name="addNewType">
                    <option>Senior</option>
                    <option>Junior</option>
                    <option>Entry-Level</option>
                </select>

                <div class="insert-rule">
                    <div class="rule-div">
                        <div class="addRule">
                            <input name="addRule" placeholder="insert parameter..." autocomplete="off">
                            <span id="addedRule" class="addedRule">add rule</span>
                        </div>  
                
                        <div class="icon">
                            <i class="fas fa-minus-circle"></i>
                            <i class="fas fa-plus-circle active"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
    parent.insertAdjacentHTML('beforeend', newChild);

    const ruleNum = document.querySelectorAll('.ruleNum');
    for(i = 0; i < ruleNum.length; i++){
        ruleNum[i].innerHTML = `Rule ${i + 1}`;
    }
}




delagationDOM.addEventListener('click', (e) => {
    if(e.target.classList.contains('addedRule')){
        addRemoveText(e);
    }

    if(e.target.classList.contains('fa-plus-circle')){
        addMoreRule(delagationDOM);
        // optionSelection();
    }
    
}, true)

// Modal open And close
const overlay = document.getElementById('overlay');
const modalBtn = document.querySelector('[data-modal-target]');
const modalClose = document.querySelectorAll('[data-close-button]');

modalBtn.addEventListener('click', (e) => {
    if(e.target.matches('.btn-modal')){
        const modal = document.getElementById('modal');
        openModal(modal);
    }
})

modalClose.forEach( closeElmt => {
    closeElmt.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        closeModal(modal)
    })
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

// Options Displays
/*
const optionSelection = () => {
    const condition = document.querySelector('#revCondition');
    const conditionObj = {
        All: 'All',
        Half: 'Half',
        None: 'None'
    }
    

    for(i of Object.keys(conditionObj)){
        condition.options[condition.options.length] = new Option(conditionObj[i], i)
    }
}
*/

// const openModalButtons = document.querySelectorAll('[data-modal-target]');







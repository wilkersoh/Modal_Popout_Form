const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

let arr = [];

const readAllAgain = () => {
    const text = document.querySelectorAll('#addedRule');
    arr.push(text);
}

// Change Old Add New
const addRuleText = document.querySelectorAll('#addedRule');

const fn = (e) => {
    const parent = e.target.parentNode.parentNode.parentNode;
    const child = e.target.parentNode.parentNode;

    const div = document.createElement('div');
    div.classList.add('rule-div')
    
    const html = `
        <div class="addRule">
            <input name="addRule" placeholder="insert parameter..." autocomplete="off">
            <span id="addedRule" style="color: red;">Remove rule</span>
        </div>
    `;
    const changeRule = `
    <div id="insertRule" class="insertRule">
        <input name="addRule" placeholder="insert parameter..." autocomplete="off">
        <span id="addedRule">add rule</span>
        <div class="icon">
            <i class="fas fa-minus-circle"></i>
        </div>
    </div>
    ` 
    parent.removeChild(child);
    div.innerHTML = html;             
    parent.insertAdjacentElement('beforeend', div);
    parent.insertAdjacentHTML('beforeend', changeRule);
}

addRuleText.forEach(addText => {
    addText.addEventListener('click', fn);
    readAllAgain();
})


// btnsClicked

const addBtns = document.querySelectorAll('.fa-plus-circle');

const btnClick = (e) => {
    const ruleParent = document.querySelector('.rules');
    const newElmentRule = `
    <div class="rev-rule">
        <div class="rule">
            <div class="ruleNum"></div>
            <label for="revCondition">
                <span>If</span>
                <select id="revCondition" class="revCondition" name="revCondition">
                </select> of the below conditions are met
            </label>

            <div class="insert-rule">
                <div class="rule-div">
                    <div class="addRule">
                        <input name="addRule" placeholder="insert parameter..." autocomplete="off">
                        <span id="addedRule">add rule</span>
                    </div>
        
                    <div class="icon">
                        <i class="fas fa-minus-circle"></i>
                        <!-- add one more rule  -->
                        <i class="fas fa-plus-circle active"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `;
    ruleParent.insertAdjacentHTML('beforeend', newElmentRule)

    const numTitle = document.querySelectorAll('.ruleNum');
    for(i= 0; i < numTitle.length; i++ ){
        numTitle.innerHTML = `Rule ${i + 1}`
    }
}

addBtns.forEach(btn => {
    btn.addEventListener('click', btnClick);
    // numTitle();
})

// const clickRule = (elms) => {  
//     let arr = [];
//     elms.forEach( dom => {
//         const element = new RenderDom(dom); 
//         element.init();
//     })
//     readElement()
//     console.log(arr);
// }

// changeRules.forEach(rule => {
//     rule.addEventListener('click', () => {
//         const elemntDOM = document.querySelectorAll('.rules');
//         clickRule(elemntDOM);
//     })
// })

// added one more rule
const addBtn = document.querySelectorAll('.fa-plus-circle');
// console.log(addBtn)
/*
addBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const ruleNum = document.querySelectorAll('.ruleNum');
        renderNewRule(ruleNum)
    })
})

function renderNewRule(nums){
    nums.forEach((num, i) => {
        num.innerHTML = `Rule ${i + 1}`;
    })
    const html = `
        <div class="rules">
            <div class="rev-rule">
                <div class="rule">
                    <div class="ruleNum"></div>
                    <select id="addNew" name="revType">
                        
                    </select>
                    <select id="addNewType" name="addNewType">
                        
                    </select>

                    <div class="insert-rule">
                        <div class="rule-div">
                            <div class="addRule">
                                <input name="addRule" placeholder="insert parameter..." autocomplete="off">
                                <span id="addedRule">add rule</span>
                            </div>
                    
                            <div class="icon">
                                <i class="fas fa-minus-circle"></i>
                                <!-- add one more rule  -->
                                <i class="fas fa-plus-circle active"></i>
                            </div>
                        </div>
                    </div>
                    
                    <!-- add rule -->
                    <div id = insertRule class="insertRule">
                        <!-- <input type="text" name="insertNewRule" class="insert add-rule" placeholder="insert parameter..." autocomplete="off">
                        <span>add ssrule</span> -->
                    </div>
                </div>
            </div>
        </div>
    `;

    const beforeNum = document.querySelector('.num');
    beforeNum.insertAdjacentHTML('beforebegin', html);;

    nums.forEach((num, i) => {
        num.innerHTML = `Rule ${i + 1}`;
    })
}
*/

// Options Displays
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







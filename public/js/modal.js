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

    // Diplsay Rule num
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

const search = document.getElementById('search');
const mathcList = document.getElementById('match-list');

const searchState = async (searchValue) => {
    // Data from Wikipedia | 国家生产总量 2016 | Root是 Public folder！
    const res = await fetch('js/stateMY.json');
    const data = await res.json();
    // if match
    let match = data.filter(doc => {
        // search pattern - 'g- global' 'i- 忽视大小写 match' | 用 new RegExp 不必斜杠  /\w+/ 
        const regex = new RegExp(`^${searchValue}`, 'gi');
        return doc.state.match(regex) 
    })

    // 防止他会显示全部资料 if 0 的话
    if(searchValue.length === 0){
        match = [];
        mathcList.innerHTML = '';
    }
    showResBar(match)
}

const showResBar = (match) => {
    if( match.length > 0 ){
        const html = match.map(doc => {
            return `
                <div class="searchOutPut">
                  <p>${doc.year} -  Revenue 
                    <span class="outPutSearch-small">(${doc.state})</span>
                    : 
                    <span style="color: aqua">${doc.revenue}</span> million</p> 
                </div>
            `
        }).join('')

        mathcList.innerHTML = html;

    }
}

// Searching bar...
search.addEventListener('input', () => searchState(search.value));
// Data Show in the Table
const stateName = document.querySelector('.showData');
const showDataInTable = async () => {
    const res = await fetch('js/stateMy.json');
    const data = await res.json();

    let dataDOM = data.map((doc, i) => 
        `
            <p>${doc.state}</p>
            <p>${doc.revenue}</p>
            <p>${doc.year}</p>
        `
    ).join('')

    stateName.insertAdjacentHTML('beforeend', dataDOM);
}

showDataInTable();

// dropDown handling..
const drops = document.querySelectorAll('.dropdown');

class Dropdown {
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger')
        this.content = container.querySelector('.content')
    }
    init(){
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        })
    }
}

drops.forEach(drop => {
    const instance = new Dropdown(drop);
    instance.init();
})

// errors form reminder
/*
class reminderError {
    constructor(){
        this.reminder = document.createElement('div')
    }
    static init(message){
        this.reminder.classList.add(reminder);
        document.querySelector('body').appendChild(this.reminder);

        this.reminder.textContent = message;
        this.reminder.classList.add('active');
        setTimeout(() => {
            this.reminder.classList.remove('active');
        }, 4000)
    }
}

*/















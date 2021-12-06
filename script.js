let $ = document
let inputTodo = $.querySelector('.form-control');
let formSelect = $.querySelector('form')
let createDivModal = $.createElement('div')
let ulSelect = $.querySelector('ul')
inputTodo.setAttribute('value', '');
formSelect.addEventListener('submit', function (event) {
    event.preventDefault()
})
inputTodo.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (inputTodo.value === '') {
            EmptyInput()
        } else {
            addAndRemoveNewLi()
        }
        inputTodo.value = ''
    }
})

function EmptyInput() {
    createDivModal.innerHTML = 'Please Enter something then press Enter'
    createDivModal.style.color = 'lightcoral'
    formSelect.appendChild(createDivModal)
}

function addAndRemoveNewLi() {
    let createLi = $.createElement('li')
    let createSpan = $.createElement('span')
    let createI = $.createElement('i')
    createLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    createSpan.innerHTML = inputTodo.value.trim()
    createI.classList.add('fa', 'fa-trash-o', 'delete')
    createLi.append(createSpan, createI)
    ulSelect.appendChild(createLi)
    createI.addEventListener('click', function (event) {
        event.target.parentElement.remove()
    })
    createDivModal.remove()
}
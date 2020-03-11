const appList = document.getElementById('app-list')
const appInput = document.getElementById('app-input')
const appButton = document.getElementById('app-button')

// Mock
var todos = JSON.parse(localStorage.getItem('todo_list')) || []

function renderTodo(){

    appList.innerHTML = ''

    for (todo of todos) {
        let listItem = document.createElement("li")
        listItem.innerText = todo

        let pos = todos.indexOf(todo)

        let linkElement = document.createElement('a')
        linkElement.innerText = ' remover'
        linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')')

        listItem.appendChild(linkElement)
        appList.appendChild(listItem)
    }
}

renderTodo()

function addTodo(){
    let appInputText = appInput.value

    if (appInputText == '') {
        alert('O campo não pode ser vazio')
    } else {
        todos.push(appInputText)
        appInput.value = ''
        renderTodo()
    }
    saveToStorage()
}

appButton.onclick = addTodo

function removeTodo(pos){
    todos.splice(pos, 1)
    renderTodo()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('todo_list', JSON.stringify(todos))
}
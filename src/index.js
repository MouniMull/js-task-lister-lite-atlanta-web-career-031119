document.addEventListener("DOMContentLoaded", () => {

document.querySelector("#create-task-form").addEventListener("submit", handleClick)


});

function addToList(task) {
  const ul = document.querySelector('#list')
  const li = document.createElement('li')
  li.className = 'todo'
  li.textContent = task.description

  ul.appendChild(li)
  console.log(task.description)
}

function handleClick(e){
  e.preventDefault()
  const task ={
    description: e.target.new_task.value
  }



  addToList(task)

  e.target.reset()
}

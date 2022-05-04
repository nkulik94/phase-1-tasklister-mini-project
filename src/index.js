document.addEventListener("DOMContentLoaded", () => {
  const urgentStuff = document.createElement('div')
    urgentStuff.id = 'urgentStuff'
    const lessUrgentStuff = document.createElement('div')
    lessUrgentStuff.id = 'lessUrgentStuff'
    const notUrgentStuff = document.createElement('div')
    notUrgentStuff.id = 'notUrgentStuff'
    const tasks = document.getElementById('tasks')
    tasks.appendChild(urgentStuff)
    tasks.appendChild(lessUrgentStuff)
    tasks.appendChild(notUrgentStuff)
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = e.target.newtask.value
    if (newTask !== '') {
      createTask(newTask)
    }
  })
});
function createTask(toDo) {
  function constructTask(color, rightDiv) {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.textContent = 'x'
    btn.style.textAlign = 'center'
    li.textContent = `${toDo} `
    li.appendChild(btn)
    li.style.color = color
    rightDiv.appendChild(li)
    document.querySelector('form').reset()
    btn.addEventListener('click', e => e.target.parentNode.remove())
  }
  const dropdown = document.querySelector('select')
  if (dropdown.value === 'highUrgency') {
    constructTask('red', urgentStuff)
  } else if (dropdown.value === 'mediumUrgency') {
    constructTask('yellow', lessUrgentStuff)
  } else if (dropdown.value === 'lowUrgency') {
    constructTask('green', notUrgentStuff)
  }
}
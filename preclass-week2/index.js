const valueContainer = document.getElementById("valueContainer");
const form = document.getElementById("submitForm");

let tasks = [];
function loadTasks() {
  let taskElements = '';
  for(task of tasks) {
    taskElements += `
    <div>
      <p>${task.name}</p>
      <span>${task.isDone}</span>
    </div>
    `
  }
  valueContainer.innerHTML = taskElements;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInputValue = document.getElementById("task").value;
  console.log(taskInputValue)
  const task = {
    name: taskInputValue,
    isDone: false
  };

  tasks.push(task);
  loadTasks();
})
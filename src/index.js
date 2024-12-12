document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTaskDescription = document.getElementById('new-task-description').value;
    const priority = document.getElementById('task-priority').value;
    if (newTaskDescription !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = newTaskDescription;
      newTask.classList.add(`${priority}-priority`);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(newTask);
      });

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      form.reset();
    }
  });
});

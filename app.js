let editIndex = -1;

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  if (editIndex === -1) {
    const li = createTaskElement(task);
    document.getElementById('taskList').appendChild(li);
  } else {
    const list = document.getElementById('taskList').children;
    list[editIndex].querySelector('.task-text').textContent = task;
    editIndex = -1;
  }

  input.value = '';
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = task;

  const btnGroup = document.createElement('div');

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm btn-warning me-2';
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    document.getElementById('taskInput').value = task;
    editIndex = Array.from(li.parentNode.children).indexOf(li);
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-sm btn-danger';
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  return li;
}

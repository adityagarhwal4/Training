import {v4 as uuidv4} from "uuid"
type task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

const tasks : task[] = [];

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if(input?.value == "" || input?.value == null){
    return
  }
  else{
    const newTask = {
      id: uuidv4(),
      title: input.value,
      completed: false,
      createdAt: new Date()
    }

    tasks.push(newTask)

    addListItem(newTask);
    input.value = "";
  }
})

function addListItem(task: task){
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    console.log(tasks);
  })
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

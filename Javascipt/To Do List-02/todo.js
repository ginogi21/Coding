// Select the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');
const addClick = document.getElementById('addClick')

//Class names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE_THROUGH = 'lineThrough';

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem('TODO');

// check if data is not empty

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  // if data isn't empty
  LIST = [];
  id = 0;
}

// load items to the user's interface
function loadList(array) {
  array.forEach(item => {
    addToDo(item.name, item.id, item.trash);
  });
}

// clear the local storage
clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
})

// Show todays date
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year:'numeric'
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-Us", options)

// add to function
function addToDo(toDo, id, done, trash) {

  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const text = `<li class="item">
                  <i class="far ${DONE} co" job="complete" id="${id}" ></i>
                  <p class="text  ${LINE}"> ${toDo}</p>
                  <i class="fas fa-trash-alt de" job="delete" id="${id}"></i>
                  </li>`;
  const position = "beforeend"
  list.insertAdjacentHTML(position, text);
};

// add an item to the list user the enter key
document.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });

      localStorage.setItem('TODO', JSON.stringify(LIST));
      id++;
    }
    input.value = "";

  }
});

// add an item  when click addplus-buttton 
addClick.addEventListener('click', function (event) {
  if (event) {
    const toDo = input.value;

    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });

      localStorage.setItem('TODO', JSON.stringify(LIST));
      id++;
    }
    input.value = "";

  }
});

// complete to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

// target the items created dynamically
list.addEventListener('click', function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  console.log(elementJob)

  if (elementJob == 'complete') {
    completeToDo(element);
  } else if (elementJob == 'delete') {
    removeToDo(element);

    localStorage.setItem("TODO", JSON.stringify(LIST));
  }
});
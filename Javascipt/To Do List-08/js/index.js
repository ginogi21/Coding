const newTask = document.querySelector('#newtask')
const pushBtn = document.querySelector('#push');
const inputTxt = document.querySelector('input');
const tasks = document.querySelector('#tasks');

pushBtn.addEventListener('click',(e)=>{
  if(inputTxt.value.length === 0){
    alert('Please Enter a Task')
  }else{
    tasks.style.opacity = 1;
    newTask.style.transform =`translateY(0)`;
    tasks.innerHTML += `
    <div class="task">
    <span id="taskName">${inputTxt.value}</span>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    
    /* Task 삭제 */
    let current_tasks = document.querySelectorAll('.delete');
    current_tasks.forEach((element)=>{
      element.addEventListener('click',()=>{
        element.parentNode.remove()
        /*task가 없을 때 id tasks의 opacity를 0으로 하는 방법 */
        if(tasks.children.length === 0){ 
          tasks.style.opacity = 0;
          newTask.style.transform =`translateY(50px)`;
        }
      })
    })
    
    /* Task line-through */
    let current_taskName = document.querySelectorAll('#taskName');
    current_taskName.forEach((element => {
      element.addEventListener('click',()=>{
        element.classList.toggle('completed')
      })
    }))
  }

  /* Input Box 초기화 */
  inputTxt.value = "";
})
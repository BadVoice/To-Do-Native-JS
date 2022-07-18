
function myFunction() {
    const elemText=document.querySelector('.header__input');

    if (!elemText.value.length || elemText.value.trim()==='') {
      return;
    }
    else{
      let getValue=elemText.value.trim();
      getValue=getValue[0].toUpperCase()+getValue.slice(1);
      let getTodoBody=document.querySelector('.todo__body');
      let html = ` 
    <div class="todo__tasks">
    <p>${getValue}</p>
    </div>`;
    getTodoBody.insertAdjacentHTML("afterend", html);
    elemText.value = '';
    }
    
  }
 
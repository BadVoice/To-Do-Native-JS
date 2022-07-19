const taskAddition = () => {
    const todoBody = document.querySelector('.todo__body'),
        todoTask = document.querySelector('.body__task'),
        headerInput = document.querySelector('.header__input'),
        headerBtn = document.querySelector('.header__btn');

    let getValue

    const additionTask = () => {
        let task = document.createElement('div')
        task.classList.add('body__task')

        task.innerHTML = `
          <p>${getValue}</p>
      `

        todoBody.append(task)
    }

    headerBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getValue = headerInput.value;
        getValue.trim()
        if (getValue.trim() !== getValue.length) {
            additionTask()
        } else {
            return false
        }

    })


}
taskAddition()
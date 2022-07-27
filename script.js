const taskAddition = () => {
    const todoBody = document.querySelector('.todo__addition-task'),
        todoTask = document.querySelector('.body__task'),
        headerInput = document.querySelector('.header__input'),
        headerBtn = document.querySelector('.header__btn'),
        clearTasks = document.getElementById('clear'),
        changePlaceTask = document.querySelector('.todo__remove-task')

    headerBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const inputValue = headerInput.value;
        if (!inputValue.length || inputValue.trim() === '') {
            return
        } else {
            headerInput.value = '';
        }
        setUserTasks(inputValue)
        renderTasks()
    })

    const renderTasks = () => {
        additionRenderBodyTask(
            todoBody,
            clearTasks,
            getUserTasks(),
            changePlaceTask
        )
    }
    renderTasks()

    clearTasks.addEventListener('click', () => {
        removeUserTasks()
        while (todoBody.firstChild) {
            todoBody.firstChild.remove()
        }
    })


}
taskAddition()
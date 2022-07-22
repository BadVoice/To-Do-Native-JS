const taskAddition = () => {
    const todoBody = document.querySelector('.todo__body'),
        todoTask = document.querySelector('.body__task'),
        headerInput = document.querySelector('.header__input'),
        headerBtn = document.querySelector('.header__btn'),
        clearTasks = document.getElementById('clear')


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
            getUserTasks()
        )
    }

    renderTasks()
}
taskAddition()
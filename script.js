(() => {
    let toDoListArray = [];
    const form = document.querySelector('.form');
    const input = document.querySelector('.form_input');
    const ul = document.querySelector('.todolist'); // Corrected class name

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;
        addItemToDom(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = '';
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return;
        removeItemFromDom(id);
        removeItemFromArray(id);
    });

    function addItemToDom(itemId, toDoItem) {
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ id: itemId, item: toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromDom(id) {
        const li = document.querySelector(`[data-id="${id}"]`);
        if (li) {
            ul.removeChild(li);
        }
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(item => item.id !== id); // Corrected key
        console.log(toDoListArray);
    }
})();

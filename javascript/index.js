//input, boton Todo los elementos que tenemos que manipular
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

// Crear una función para pushear todos los elementos a la lista

addBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const text = input.value;

    if (text !== '') {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        // li.classList.add('esta-es-una-clase');

        li.appendChild(p);
        li.appendChild(addDeleteBtn()); // hoisting
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }

});


function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';
        }
    });

    return deleteBtn;
}
import { rendGraph } from './graphics.js';

document.querySelector('.container').addEventListener('click', edit);

const table1 = document.querySelector('.table-1');
const table2 = document.querySelector('.table-2');
const table3 = document.querySelector('.table-3');

function edit(e) {
    if (e.target.classList.contains('table__td')) {
        editTableItem(e.target);
    }
    if (e.target.classList.contains('table__td-delete')) {
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains('button-add')) {
        addTableRow(e.target);
    }
    if (e.target.classList.contains('button-calculate')) {
        secondValueCalculate();
    }
}

function editTableItem(targetItem) {
    const input = document.createElement('input');
    input.value = targetItem.textContent;
    targetItem.textContent = '';
    targetItem.appendChild(input);
    input.focus();
    input.addEventListener('blur', function () {
        targetItem.textContent = this.value;
    })
}

function addTableRow(targetItem) {
    const tr = document.createElement('tr');
    tr.setAttribute('class', 'table__tr');
    tr.innerHTML = `
        <td class="table__td">95</td>
        <td class="table__td">35</td>
        <td class="table__td-delete">Delete</td>
        `;
    if (targetItem.id == 'butaddtable1') {
        table1.appendChild(tr);
    } else if (targetItem.id == 'butaddtable2') {
        table2.appendChild(tr);
    }
}


function secondValueCalculate() {
    const arrRowTable1 = document.querySelector('.table-1').querySelectorAll('.table__tr');
    const arrRowTable2 = document.querySelector('.table-2').querySelectorAll('.table__tr');
    const arrRowTable3 = document.querySelector('.table-3').querySelectorAll('.table__tr');

    const arrTdTable1 = document.querySelector('.table-1').getElementsByClassName('table__td');
    const arrTdTable2 = document.querySelector('.table-2').getElementsByClassName('table__td');
    const arrTdTable3 = document.querySelector('.table-3').getElementsByClassName('table__td');

    arrRowTable3.forEach((el) => el.remove())

    arrRowTable1.length <= arrRowTable2.length ? addChildsTable3(arrRowTable1) : addChildsTable3(arrRowTable2);

    for (let i = 0; i < arrTdTable3.length; i++) {
        arrTdTable3[i].textContent = (Number(arrTdTable1[i].textContent) + Number(arrTdTable2[i].textContent)) / 2;
    }

    rendGraph(arrTdTable1, arrTdTable2, arrTdTable3);
}

function addChildsTable3(arrTable) {
    for (let i = 0; i < arrTable.length; i++) {
        const tr = document.createElement('tr');
        tr.setAttribute('class', 'table__tr');
        tr.innerHTML = `
        <td class="table__td"></td>
        <td class="table__td"></td>
        `;
        table3.appendChild(tr);
    }
}





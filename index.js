let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('new-color').value;  
    document.getElementById('new-first-name').value = '';
    document.getElementById('new-last-name').value = '';
    document.getElementById('new-color').value = '';
});


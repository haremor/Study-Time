const setNumber = function () {
    let number = getNumber(100, 1);
    console.log(number);
    let tbl = document.body.lastElementChild.previousElementSibling.firstElementChild;
    let rowsCount = tbl.childNodes.length;
    if (rowsCount) {
        let row = tbl.childNodes[tbl.childNodes.length - 1];
        if (row.childNodes.length < 10) {
            for (let i = 0; i < 100; i++){
                row.innerHTML += `<td>${getNumber(100,1)}</td>`;
            }
        } else {
            tbl.innerHTML += `<tr><td>${number}</td></tr>`;
        }
    } else {
        tbl.innerHTML = `<tr><td>${number}</td></tr>`;
    }
    console.log(tbl.childNodes);
}
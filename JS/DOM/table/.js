let tbl = document.body.firstElementChild.firstElementChild;
console.log(tbl);

if (tbl.hasChildNodes()) {
    console.log(tbl.firstChild.nodeName);
}

let cnt = 3;
while (cnt--) {
    let tr = document.createElement("tr");
    tbl.appendChild(tr);
    console.log(tbl.getAttribute("style"));
    let n = 5;
    while (n--) {
        if (cnt === 2) {
            let th = document.createElement("th");
            tr.appendChild(th);
            th.innerText = "num" + n;
        } else {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = n;
        }
    }
}
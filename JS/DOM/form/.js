let form = document.forms.shit;

log(form.elements) // Только для форм. Массив всех элементов формы

// function getInfo() {
//     for (let i = 0; i < form.elements.length; i++) {
//         if (i !== form.elements.length - 1) {
//             log(form.elements[i].value)
//         }
//         if (form.elements[i].type){
//             console.log(form.elements[i].type);
//         } else {
//             console.log(form.elements[i].value)
//         }
//     }
// }

// const getFormBody = function (el) {
//     log(el);
//     let formBody = {};
//     for (let i = 0; i < form.elements.length; i++) {
//         let el = form.elements[i];
//         if (el.name) {
//             formBody[el.name] = el.value;
//         }
//     }
//     log(formBody);
// }

let link = form.nextElementSibling;
link.onclick = function (event) {
    event.preventDefault(); // отменить действие по умолчанию
    this.style.color = getRGB();
}


form.onsubmit = function (event) {
    event.preventDefault();
    let formBody = {};
    for (let i = 0; i < form.elements.length; i++) {
        let el = form.elements[i];
        if (el.name) {
            formBody[el.name] = el.value || "VOID";
        }
    }
    log(formBody);

    if (!document.getElementById("info-space")) {
        let info = document.createElement("div");
        info.innerText = `${formBody.form} : ${formBody.sel}`;
        info.className = "line";
        info.id = "info-space";
        document.body.insertBefore(info, form);
    } else {
        document.getElementById("info-space").innerText = `${formBody.form} : ${formBody.sel}`;
    }
}

const inputNew = function (el) {
    el.onclick = "";
    let add = document.createElement("input");
    add = form.appendChild(add);
    add.type = "text";
    add.placeholder = "Enter shit to add";
    add.onchange = function () {
        let s = document.getElementById("fav");
        s[s.options.length] = new Option(add.value, add.value);
    }
}
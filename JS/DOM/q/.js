let form = document.forms["get-card"];

log(form);

form.onchange = function () {
    let formBody = {};
    for (let i = 0; i < form.elements.length; i++) {
        let el = form.elements[i];
        if (el.name) {
            formBody[el.name] = el.value || "VOID";
        }
    }

    log(formBody);
    let card = document.getElementById("text");
    card.innerText = formBody.name;
    let icon = document.getElementById("icon");
    icon.className = formBody["select-image"];
}
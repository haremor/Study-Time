const output = document.querySelector("div");

document.querySelector("#myFile").onchange = getFile;
function getFile(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        output.textContent = e.target.result;
    };
    reader.readAsText(file);
}

document.querySelector("#myFiles").onchange = getFiles;
function getFiles(e) {
    let files = e.target.files;
    for (let file of files) {
        let reader = new FileReader();
        reader.onload = function (e) {
            output.textContent += e.target.result;
        };
        reader.readAsText(file, "windows-1251");
    }
}

document.querySelector("#myImage").onchange = getImage;
function getImage(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        document.querySelector("img").src = e.target.result;
        console.log(e.target.result);
    };
    reader.readAsDataURL(file);
}

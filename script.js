const elements = {};

function fileAdded (e) {
    console.log(e)

    console.log(e.target.files[0].name)
    document.querySelector("#upload span").innerHTML = e.target.files[0].name;
};

function loadEvent() {  

    const rootE = document.getElementById("root");

    rootE.insertAdjacentHTML("beforeend", `
        <div id="upload">
            <input type="file" id="input" / >
            <span>Drop your files here</span>
        </div>
    `);

    elements.uploadE = document.getElementById("upload");
    elements.inputE = document.querySelector("#input");




    elements.inputE.addEventListener("change", fileAdded);

}

window.addEventListener("load", loadEvent);
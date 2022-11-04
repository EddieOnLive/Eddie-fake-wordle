palabra = document.querySelector(".input").value;

const espacios = () => {
    const frag = document.createDocumentFragment();
    for (let i = 1; i <= 30; i++) {
        let div = document.createElement("DIV");
        div.classList.add("cajas");
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.border = '1px solid #000';
        frag.appendChild(div);
    }
    document.querySelector(".cajitas").appendChild(frag);
}

espacios();

let cuadros = document.querySelectorAll(".cajas");

document.querySelector('.botones').addEventListener('mouseover', ()=>{
    let botones = document.querySelectorAll('.bq');
    for (let i = 0; i < 26; i++) {
        botones[i].addEventListener('mousedown', ()=>{
            cuadros[0].textContent=botones[i].innerHTML;
        })
    }
});


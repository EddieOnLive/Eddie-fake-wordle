palabra = document.querySelector(".input").value;
let contLetra = 0;
let varLet = '';


const funLetra = (boton) => {
        if(contLetra<5){
            cuadros[contLetra].textContent=boton.innerHTML;
            contLetra++;
            varLet = varLet + boton.innerHTML;
        }
}

    

const espacios = () => {
    const frag = document.createDocumentFragment();
    for (let i = 1; i <= 30; i++) {
        let div = document.createElement("DIV");
        div.classList.add("cajas");
        frag.appendChild(div);
    }
    document.querySelector(".cajitas").appendChild(frag);
}

espacios();

let cuadros = document.querySelectorAll(".cajas");

document.querySelector('.bq').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bq'));});
document.querySelector('.bw').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bw'));});
document.querySelector('.be').addEventListener('click', ()=>{
    funLetra(document.querySelector('.be'));});
document.querySelector('.br').addEventListener('click', ()=>{
    funLetra(document.querySelector('.br'));});
document.querySelector('.bt').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bt'));});
document.querySelector('.by').addEventListener('click', ()=>{
    funLetra(document.querySelector('.by'));});
document.querySelector('.bu').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bu'));});
document.querySelector('.bi').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bi'));});
document.querySelector('.bo').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bo'));});
document.querySelector('.bp').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bp'));});
document.querySelector('.ba').addEventListener('click', ()=>{
    funLetra(document.querySelector('.ba'));});
document.querySelector('.bs').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bs'));});
document.querySelector('.bd').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bd'));});
document.querySelector('.bf').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bf'));});
document.querySelector('.bg').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bg'));});
document.querySelector('.bh').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bh'));});
document.querySelector('.bj').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bj'));});
document.querySelector('.bk').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bk'));});
document.querySelector('.bl').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bl'));});
document.querySelector('.bz').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bz'));});
document.querySelector('.bx').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bx'));});
document.querySelector('.bc').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bc'));});
document.querySelector('.bv').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bv'));});
document.querySelector('.bb').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bb'));});
document.querySelector('.bn').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bn'));});
document.querySelector('.bm').addEventListener('click', ()=>{
    funLetra(document.querySelector('.bm'));});

document.querySelector('.back').addEventListener('click',()=>{
    cuadros[contLetra-1].textContent='';
    contLetra--;
    if (contLetra > 0) {
        varLet = varLet.substring(0,contLetra);
    }
    if (contLetra == 0 ){
        varLet = '';
    }
});

document.querySelector('.send').addEventListener('click',()=>{
    if (varLet == palabra) {
        window.location.href = "/acierto";

        console.log('GOOOOOOOOOOOL');
    }
    else {
        
        console.log('COMO VAS A ERRAR ESO CULIADOOOO????????');
    }
});
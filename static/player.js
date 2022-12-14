palabra = document.querySelector(".input").value;
let contLetra = 0;
let varLet = '';

let easter = [0,0,0];

//? Funcion para cargar las letras con el teclado virtual
const funLetra = (boton) => {
        if(contLetra<5){
            cuadros[contLetra].textContent=boton.innerHTML;
            contLetra++;
            varLet = varLet + boton.innerHTML;
        }
    }

const funhint = () => {
    if(contLetra<5){
        cuadros[contLetra].textContent=palabra[contLetra];
        varLet = varLet + palabra[contLetra];
        contLetra++;
        console.log(varLet);
    }
}

//? Funcion para enviar palabra
const envioFuncion = () => {
    if (contLetra == 5) {                                                   // * Verifica que se hayan cargado 5 letras de forma obligatoria ;)
        if (varLet == palabra) {                                            // ? En caso de acierto redirige a la pantalla acierto
            window.location.href = "/acierto";
            console.log('GOOOOOOOOOOOL');                                   // ! Console.log para ver que entre en el if
        }

        else {                                                              // ? En caso de Fallo:
                                                                            // TODO : Cambia de color las letras del teclado
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if (palabra[i] != varLet[j]){
                        cambioColorNo(varLet[j]);
                    }
                }
            }
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if(palabra[i] == varLet[j]){
                        cambioColorSi(varLet[j]);
                    }
                }
            }

            for (let index = 0; index < 5; index++) {                       // ! Se vacían las cajas para cargar letras nuevas
                cuadros[contLetra-1].textContent='';
                contLetra--;
                if (contLetra > 0) {
                    varLet = varLet.substring(0,contLetra);
                }
                if (contLetra == 0 ){
                    varLet = '';
                }
            }

    
            console.log('COMO VAS A ERRAR ESO CULIADOOOO????????');         // ! Console.log para ver que entre en el else
        }
    }
}

//? Funcion para borrar
const borrarFuncion = () => {
    cuadros[contLetra-1].textContent='';
    contLetra--;
    if (contLetra > 0) {
        varLet = varLet.substring(0,contLetra);
    }
    if (contLetra == 0 ){
        varLet = '';
    }
}

//? Funcion para generar espacios para rellenar
const espacios = () => {
    const frag = document.createDocumentFragment();
    for (let i = 1; i <= 5; i++) {
        let div = document.createElement("DIV");
        div.classList.add("cajas");
        frag.appendChild(div);
    }
    document.querySelector(".cajitas").appendChild(frag);
}

//? Funcion para cambiar el color del teclado
const cambioColorNo = (letra) =>{                                           // ? La letra no pertenece a la palabra
    console.log(letra);
    switch (letra) {                                                          // ? Perdón
        case 'Q':
            document.getElementById("botQ").classList.remove("bDe");
            document.getElementById("botQ").classList.add("bNo");
            break;
        case 'W':
            document.getElementById("botW").classList.remove("bDe");
            document.getElementById("botW").classList.add("bNo");
            break;
        case 'E':
            document.getElementById("botE").classList.remove("bDe");
            document.getElementById("botE").classList.add("bNo");
            break;
        case 'R':
            document.getElementById("botR").classList.remove("bDe");
            document.getElementById("botR").classList.add("bNo");
            break;
        case 'T':
            document.getElementById("botT").classList.remove("bDe");
            document.getElementById("botT").classList.add("bNo");
            break;
        case 'Y':
            document.getElementById("botY").classList.remove("bDe");
            document.getElementById("botY").classList.add("bNo");
            break;
        case 'U':
            document.getElementById("botU").classList.remove("bDe");
            document.getElementById("botU").classList.add("bNo");
            break;
        case 'I':
            document.getElementById("botI").classList.remove("bDe");
            document.getElementById("botI").classList.add("bNo");
            break;
        case 'O':
            document.getElementById("botO").classList.remove("bDe");
            document.getElementById("botO").classList.add("bNo");
            break;
        case 'P':
            document.getElementById("botP").classList.remove("bDe");
            document.getElementById("botP").classList.add("bNo");
            break;
        case 'A':
            document.getElementById("botA").classList.remove("bDe");
            document.getElementById("botA").classList.add("bNo");
            break;
        case 'S':
            document.getElementById("botS").classList.remove("bDe");
            document.getElementById("botS").classList.add("bNo");
            break;
        case 'D':
            document.getElementById("botD").classList.remove("bDe");
            document.getElementById("botD").classList.add("bNo");
            break;
        case 'F':
            document.getElementById("botF").classList.remove("bDe");
            document.getElementById("botF").classList.add("bNo");
            break;
        case 'G':
            document.getElementById("botG").classList.remove("bDe");
            document.getElementById("botG").classList.add("bNo");
            break;
        case 'H':
            document.getElementById("botH").classList.remove("bDe");
            document.getElementById("botH").classList.add("bNo");
            break;
        case 'J':
            document.getElementById("botJ").classList.remove("bDe");
            document.getElementById("botJ").classList.add("bNo");
            break;
        case 'K':
            document.getElementById("botK").classList.remove("bDe");
            document.getElementById("botK").classList.add("bNo");
            break;
        case 'L':
            document.getElementById("botL").classList.remove("bDe");
            document.getElementById("botL").classList.add("bNo");
            break;
        case 'Z':
            document.getElementById("botZ").classList.remove("bDe");
            document.getElementById("botZ").classList.add("bNo");
            break;
        case 'X':
            document.getElementById("botX").classList.remove("bDe");
            document.getElementById("botX").classList.add("bNo");
            break;
        case 'C':
            document.getElementById("botC").classList.remove("bDe");
            document.getElementById("botC").classList.add("bNo");
            break;
        case 'V':
            document.getElementById("botV").classList.remove("bDe");
            document.getElementById("botV").classList.add("bNo");
            break;
        case 'B':
            document.getElementById("botB").classList.remove("bDe");
            document.getElementById("botB").classList.add("bNo");
            break;
        case 'N':
            document.getElementById("botN").classList.remove("bDe");
            document.getElementById("botN").classList.add("bNo");
            break;
        case 'M':
            document.getElementById("botM").classList.remove("bDe");
            document.getElementById("botM").classList.add("bNo");
            break;
        default:                                                            // ! Si entra acá, reza...
            console.log("Solo dios sabe como entró en default");
            break;
    }
}

//? Funcion para cambiar el color del teclado
const cambioColorSi = (letra) =>{                                           // ? La letra está en la palabra
    switch (letra) {                                                          // ? Perdón, de nuevo
        case 'Q':
            document.getElementById("botQ").classList.remove("bDe");
            document.getElementById("botQ").classList.add("bSi");
            break;
        case 'W':
            document.getElementById("botW").classList.remove("bDe");
            document.getElementById("botW").classList.add("bSi");
            break;
        case 'E':
            document.getElementById("botE").classList.remove("bDe");
            document.getElementById("botE").classList.add("bSi");
            break;
        case 'R':
            document.getElementById("botR").classList.remove("bDe");
            document.getElementById("botR").classList.add("bSi");
            break;
        case 'T':
            document.getElementById("botT").classList.remove("bDe");
            document.getElementById("botT").classList.add("bSi");
            break;
        case 'Y':
            document.getElementById("botY").classList.remove("bDe");
            document.getElementById("botY").classList.add("bSi");
            break;
        case 'U':
            document.getElementById("botU").classList.remove("bDe");
            document.getElementById("botU").classList.add("bSi");
            break;
        case 'I':
            document.getElementById("botI").classList.remove("bDe");
            document.getElementById("botI").classList.add("bSi");
            break;
        case 'O':
            document.getElementById("botO").classList.remove("bDe");
            document.getElementById("botO").classList.add("bSi");
            break;
        case 'P':
            document.getElementById("botP").classList.remove("bDe");
            document.getElementById("botP").classList.add("bSi");
            break;
        case 'A':
            document.getElementById("botA").classList.remove("bDe");
            document.getElementById("botA").classList.add("bSi");
            break;
        case 'S':
            document.getElementById("botS").classList.remove("bDe");
            document.getElementById("botS").classList.add("bSi");
            break;
        case 'D':
            document.getElementById("botD").classList.remove("bDe");
            document.getElementById("botD").classList.add("bSi");
            break;
        case 'F':
            document.getElementById("botF").classList.remove("bDe");
            document.getElementById("botF").classList.add("bSi");
            break;
        case 'G':
            document.getElementById("botG").classList.remove("bDe");
            document.getElementById("botG").classList.add("bSi");
            break;
        case 'H':
            document.getElementById("botH").classList.remove("bDe");
            document.getElementById("botH").classList.add("bSi");
            break;
        case 'J':
            document.getElementById("botJ").classList.remove("bDe");
            document.getElementById("botJ").classList.add("bSi");
            break;
        case 'K':
            document.getElementById("botK").classList.remove("bDe");
            document.getElementById("botK").classList.add("bSi");
            break;
        case 'L':
            document.getElementById("botL").classList.remove("bDe");
            document.getElementById("botL").classList.add("bSi");
            break;
        case 'Z':
            document.getElementById("botZ").classList.remove("bDe");
            document.getElementById("botZ").classList.add("bSi");
            break;
        case 'X':
            document.getElementById("botX").classList.remove("bDe");
            document.getElementById("botX").classList.add("bSi");
            break;
        case 'C':
            document.getElementById("botC").classList.remove("bDe");
            document.getElementById("botC").classList.add("bSi");
            break;
        case 'V':
            document.getElementById("botV").classList.remove("bDe");
            document.getElementById("botV").classList.add("bSi");
            break;
        case 'B':
            document.getElementById("botB").classList.remove("bDe");
            document.getElementById("botB").classList.add("bSi");
            break;
        case 'N':
            document.getElementById("botN").classList.remove("bDe");
            document.getElementById("botN").classList.add("bSi");
            break;
        case 'M':
            document.getElementById("botM").classList.remove("bDe");
            document.getElementById("botM").classList.add("bSi");
            break;
        default:                                                            // ! Si entra acá, reza...
            console.log("Solo dios sabe como entró en default 2, la secuela");
            break;
    }
}


espacios();

let cuadros = document.querySelectorAll(".cajas");


// TODO: Acá las letras se cargan por teclado virtual
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

//? Botón Hint/Ayuda
document.querySelector('.Bhint').addEventListener('click', ()=>{
    funhint();});

// TODO: Acá las letras se cargan por teclado físico
    addEventListener('keydown',(event)=>{
        letra = event.key;
        letra = letra.toUpperCase();
        if (letra == 'ALT' || letra == 'CONTROL' || letra == 'BACKSPACE' || letra == 'ENTER') {
            console.log('secreto encontrado(?');
            console.log('Vida antes que muerte');
            easter[1] = 2;
        }
        else if (letra == 'PAGEDOWN' || letra == 'PAGEUP' || letra == 'TAB'){
            console.log('Fuerza antes que debilidad');
            easter[2] = 3;
        }
        else if (letra == 'HOME' || letra == 'END' || letra == 'ALTGRAPH'){
            console.log('Viaje antes que destino');
            easter[3] = 1;
            if (easter[1] == 2 && easter[2] == 3 && easter[3] == 1) {
                console.log('');
                console.log('-Padre Tormenta:"ESAS PALABRAS SON ACEPTADAS, HIJO DE HONOR"')
            }
        }
        else if ( letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
            if(contLetra<5){
                cuadros[contLetra].textContent = letra;
                contLetra++;
                varLet = varLet + letra;
                console.log(varLet);
            }
        }
    });
    
//? Borrar palabra
document.querySelector('.back').addEventListener('click',()=>{  borrarFuncion();    });
addEventListener('keyup', (event)=>{
    if (event.which===08) {
        borrarFuncion();
    }
});


//? Enviar palabra
document.querySelector('.send').addEventListener('click',()=>{  envioFuncion(); });
addEventListener('keyup', (event)=>{
    if (event.which===13) {
        envioFuncion();
    }
});
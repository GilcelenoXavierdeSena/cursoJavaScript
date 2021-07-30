function botao(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar";

}

function redirecionar(){
    window.open("https://www.vunesp.com.br/");
    //window.location.href="https://www.vunesp.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemover").innerHTML="Obrigado por passar o mouse";
    elemento.innerHTML="Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemover").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("PAGINA CARREGADA");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
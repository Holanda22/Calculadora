peso = 0;
altura = 0;
var IMC = 0;
function calcular(){
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;

    IMC = peso/(altura**2)

    document.getElementById('IMC').innerHTML = IMC.toFixed(2);

    cortable = document.getElementById('tabela');
    if(IMC <= 18.5){
       cortable.style = "background-color: green;"
    }
    else if (IMC <= 24.9){
        cortable.style = "background-color: rgb(0, 202, 0);"
    }
    else if (IMC <= 29.9){
        cortable.style = "background-color: orange;"
    }
    else{
        cortable.style = "background-color: rgb(241, 48, 48);"
    }

}
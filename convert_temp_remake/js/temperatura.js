//Ignorar Tudo aqui 
var selecionado;
var convert;
var inputElement;
var valorResultado;
var numero;



function Selecionar() {
    selecionado = document.getElementById('AddTempValues').value;
    console.log(selecionado);
    //puxa o valor do select da temperatura
}

function Temperatura() {
    inputELement = document.getElementById('addTemp').value;
    document.getElementById('receber_temp').value = inputElement;
    console.log(inputELement);

    return inputElement;

    //puxa o valor do placeholder

}


function Converter() {
    convert = document.getElementById('Escolha').value;
    document.getElementById('receber_convert').value = convert;
    console.log(convert);

    //puxa o valor da temperatura que o usuário deseja converter
}


function RealizarCalculo() {
    valorResultado = document.getElementById('Resultado');
    if (selecionado == "C" && convert == "Fahrenheit") {
        calculo = parseFloat((document.getElementById('addTemp').value * 9 / 5) + 32);
        valorResultado.value = calculo;
        console.log(calculo);
        Math.round(calculo);
        
        //Celsius para Fahrenheit

        if (calculo < -479.67) {
            valorResultado.value = null;
            alert("Não é possível converter." +
                " Razão: Temperatura em fahrenheit é menor que -479,67")
            //serve para avisar ao usuário quando seu valor é invalido

        }

    }
    else {
        if (selecionado == "C" && convert == "Kelvin") {
            numero = parseFloat(document.getElementById('addTemp').value)
            calculo = parseFloat(numero + 273.15);
            valorResultado.value = calculo;
            Math.round(calculo);
            console.log(calculo);
            //Celsius para Kelvin
            if (calculo < 0) {
                valorResultado.value = null;
                alert("Não é possível converter." +
                    " Razão: Temperatura em kelvin é menor que 0")
                //avisa quando o valor for inválido
            }

        }
        else {
            if (selecionado == "F" && convert == "Celsius") {
                numero = parseFloat(document.getElementById('addTemp').value)
                calculo = parseFloat((numero - 32) * 5 / 9);
                valorResultado.value = calculo;
                Math.round(calculo);
                console.log(calculo);
                //fahrenheit para Celsius
                if (calculo < -273.15) {
                    valorResultado.value = null;
                    alert("Não é possível converter." +
                        " Razão: Temperatura em celsius é menor que -273.15")
                    //avisa quando o valor for inválido 

                }
            }
            else {
                if (selecionado == "F" && convert == "Kelvin") {
                    numero = parseFloat(document.getElementById('addTemp').value)
                    calculo = parseFloat((numero - 32) * 5 / 9 + 273.15);
                    valorResultado.value = calculo;
                    Math.round(calculo);
                    console.log(calculo);
                    //Fahrenheit pra Kelvin
                    if (calculo < 0) {
                        valorResultado.value = null;
                        alert("Não é possível converter." +
                            " Razão: Temperatura em kelvin é menor que 0")
                        //avisa quando o valor for invalido
                    }
                }


                else {
                    if (selecionado == "K" && convert == "Celsius") {
                        numero = parseFloat(document.getElementById('addTemp').value)
                        calculo = parseFloat(numero - 273.15);
                        valorResultado.value = calculo;
                        console.log(calculo);
                        Math.round(calculo);
                        //Kelvin para Celsius
                        if (calculo < -273.15) {
                            valorResultado.value = null;
                            alert("Não é possível converter." +
                                " Razão: Temperatura em celsius é menor que -273.15")
                            //avisa quando o valor for inválido 

                        }
                    }

                    else {
                        if (selecionado == "K" && convert == "Fahrenheit") {
                            numero = parseFloat(document.getElementById('addTemp').value)
                            calculo = parseFloat(1.8 * (numero - 273.15) + 32);
                            Math.round(calculo);

                            valorResultado.value = calculo;
                            console.log(calculo);

                            //kelvin para fahrenheit
                            if (calculo < -479.67) {
                                valorResultado.value = null;
                                alert("Não é possível converter." +
                                    " Razão: Temperatura em fahrenheit é menor que -479,67")
                                //serve para avisar quando o valor é invalido
                            }

                        }
                    }
                }
            }
        }
    }
    
}
/*
//realiza o loading
var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
   
}, 4000);


/* salvar pra depois
<div id="loading" style="display: block">
    <img src="http://media.giphy.com/media/FwviSlrsfa4aA/giphy.gif" style="width:150px;height:150px;" />
</div>
*/




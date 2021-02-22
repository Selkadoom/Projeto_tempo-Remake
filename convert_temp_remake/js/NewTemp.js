class tempController {
  constructor(IdMaster, IdTempValue, IdTemp, IdChoose, IdButton, IdResult) {
    this._Master = document.getElementById(IdMaster); //todo o projeto
    this._TempValue = document.getElementById(IdTempValue); //escala 1
    this._Temp = document.getElementById(IdTemp); //Valor de escala 1
    this._Choice = document.getElementById(IdChoose); //Escala 2
    this._Button = document.getElementById(IdButton); //botao de converter
    this._Result - document.getElementById(IdResult); //Resultado
    this.OnClick();
  }

  OnClick() {
    this._Button.addEventListener("click", (event) => {
      event.preventDefault;
      this.Calculo();
    });
  }

  Calculo() {
    let value = this._TempValue.value;

    console.log(value);

    let inputValue = parseFloat(this._Temp.value);
    console.log(inputValue);

    let ChoiceValue = this._Choice.value;
    console.log(ChoiceValue);

   
    let result = this._Result;
    switch (value) {
     
      case "C":
        let calculo
        if (ChoiceValue == "Fahrenheit") {
          calculo = inputValue + 273.15;

          result = calculo;
          console.log(result);

          if (calculo  < -479.67) {
              result = null
              alert("Nao deu liga")
              
          }
        }
       
        else if (ChoiceValue == Kelvin){
            
        }

        break;

      default:
        alert("Erro");
      // break;
    }
  }
}

/*
  GetValues(){
  
 let value = this._TempValue.value
console.log(value)
    
let inputValue = this._Temp.value;
console.log(inputValue);

let ChoiceValue = this._Choice.value;
console.log(ChoiceValue);
  }
 */

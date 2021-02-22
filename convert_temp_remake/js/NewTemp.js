class tempController {
  constructor(IdMaster, IdTempValue, IdTemp, IdChoose, IdButton) {
      this._Master = document.getElementById(IdMaster)
    this._TempValue = document.getElementById(IdTempValue);
    this._Temp = document.getElementById(IdTemp);
    this._Choice = document.getElementById(IdChoose);
    this._Button = document.getElementById(IdButton);
   this.OnClick();
  }
get Master(){
    return this.Master;
}
  get TempValue() {
    return this._TempValue;
  }

  get Temp() {
    return this._Temp;
  }
  get Choice() {
    return this._Choice;
  }
  get Button() {
    return this._Button;
  }

  
 
  OnClick() {
     Button.addEventListener("click", (event) => {
        event.preventDefault
      
    console.log("Caskidpo");
    });
  }
  
  
}

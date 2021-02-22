class tempController {
constructor(IdTempValue, IdTemp, IdChoose, IdButton){
    this.TempValue = document.getElementById(IdTempValue);
    this.Temp = document.getElementById(IdTemp);
    this.Choice = document.getElementById(IdChoose);
    this.Button = document.getElementById(IdButton);
    this.OnClick();

 


}

OnClick(){

    this.Button.addEventListener("submit", (event)=> {

        event.preventDefault();
        console.log("Caskidpo");
        
    }
    );
    
}

}
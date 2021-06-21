const http = new reqHTTP
document.getElementById('button1').addEventListener('click', checkButton)
document.getElementById('button2').addEventListener('click', checkButton)

//check which button was clicked 
function checkButton (){
     //check if button one or two was clicked and send value 
    if(this.id === 'button1'){
        getUserData(this.value)
    } else if (this.id === 'button2'){
        getUserData(this.value)
    } 
}

// Get user data 
function getUserData(gender){
  http.get(`https://randomuser.me/api/?results=9&gender=${gender}`)
}

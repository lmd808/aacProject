// NEW reqHTTP
const http = new reqHTTP

//GRAB BUTTONS FROM UI- not assigning to variables
document.getElementById('button1').addEventListener('click', checkButton)
document.getElementById('button2').addEventListener('click', checkButton)

//CHECK WHICH BUTTON WAS CLICKED => SEND VALUE 
function checkButton (){
    if(this.id === 'button1'){
        getUserData(this.value)
    } else if (this.id === 'button2'){
        getUserData(this.value)
    } 
}

// GET USER DATA
function getUserData(gender){
  http.get(`https://randomuser.me/api/?results=9&gender=${gender}`)
    .then(data => {
      let output = ""
        data.results.map((user, index) => {
          //APPEND MAPPED INDEX TO OUTPUT
          output +=  `
            <div class="card m-3" style="width: 18rem;" id=${index + 1}>
              <img src=${user.picture.large} class="card-img-top rounded" alt="picture of ${user.name.first} ${user.name.last}">
              <div class="card-body align-items-center">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p class="card-text">${user.email}</p>
                <a href="#" class="btn btn-primary">Send ${user.name.first} a message...</a>
              </div>
            </div>`})
        // APPEND OUTPUT TO RESULTS DIV    
        document.getElementById('results').innerHTML = output;
    })
    .catch(err => {
      // IF ERROR: OUTPUT AND APPEND ERROR MESSAGE (WORKS)
      let output = `<div class="alert alert-danger" role="alert">${err}</div>`
      document.getElementById('results').innerHTML = output;
    })
}

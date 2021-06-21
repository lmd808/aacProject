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
    .then(data => {
      let output = ""
                data.results.map((user) => {
                    output +=  `
                        <div class="card m-2" style="width: 18rem;">
                        <img src=${user.picture.large} class="card-img-top rounded" alt="picture of ${user.name.first} ${user.name.last}">
                        <div class="card-body align-items-center">
                            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                            <p class="card-text">${user.email}</p>
                            <a href="#" class="btn btn-primary">Send ${user.name.first} a message...</a>
                        </div>
                        </div>`
                })
                document.querySelector('#results').innerHTML = output;
    })
    .catch(err => {
      let output = `<div class="alert alert-danger" role="alert">
      ${err}
     </div>`
      document.querySelector('#results').innerHTML = output;
    })
}


class reqHTTP {
    //Make and HTTP GET request 
    get(url) {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
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
            .catch(err => console.log(err))
    }
}
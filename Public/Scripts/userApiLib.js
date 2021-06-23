// BEGINNING OF HTTP REQ LIBRARY 
class reqHTTP {
    //Make and HTTP GET request 
    async get(url) {
      const response = await fetch(url)
      const resData = await response.json() 
      return resData      
    }
}
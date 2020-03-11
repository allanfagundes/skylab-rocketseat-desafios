// SEM AXIOS
var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        
        xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/7")
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject("Erro na requisição")
                }
            }
        }

    })
}

myPromise()
    .then(function(response){
        // console.log(response)
    })
    .catch(function(error){
        // console.log(error)
    })
    
// COM AXIOS
axios.get("https://pokeapi.co/api/v2/pokemon/zxzx")
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.warn(error)
    })


// var unirest = require("unirest");

// var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/seasons/");

// req.headers({
//     "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
//     "x-rapidapi-key": "SIGN-UP-FOR-KEY"
// });

// // COM AXIOS
// axios.get(req)
//     .then(function(response){
//         console.log(response.data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
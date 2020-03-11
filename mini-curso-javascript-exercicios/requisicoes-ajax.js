const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon")
xhr.send(null)

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let response = JSON.parse(xhr.response)
        let results = response.results
        
        const listContainer = document.getElementById('all-pokedex')
        const list = document.createElement("ul")
        listContainer.appendChild(list)
        
        for (result of results) {
            
            let listItem = document.createElement("li")
            listItem.innerText = result.name
            list.appendChild(listItem)
        }
    }
}

const xhrSprites = new XMLHttpRequest();

xhrSprites.open("GET", "https://pokeapi.co/api/v2/pokemon/7")
xhrSprites.send(null)

xhrSprites.onreadystatechange = function () {
    if (xhrSprites.readyState === 4) {
        let response = JSON.parse(xhrSprites.response)
        let sprite = response.sprites.front_shiny
        
        console.log(sprite);

        const listContainer = document.getElementById('all-pokedex')
        const img = document.createElement("img")
        img.setAttribute('src', sprite)
        listContainer.appendChild(img)
    }
}
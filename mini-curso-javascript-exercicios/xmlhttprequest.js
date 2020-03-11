// 1º exercício - Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade >= 18)
                resolve()
            else
                reject()
        }, 2000);
    })
}


checaIdade(17)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });


// 2º exercício - Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
    
//<input type="text" name="user">
//<button onclick="">Adicionar</button>

// Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
    
//<ul>
    //<li>repo1</li>
    //<li>repo2</li>
    //<li>repo3</li>
    //<li>repo4</li>
    //<li>repo5</li>
//</ul>

// 3º exercício - A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:
    
//<p>Carregando...</p>

//Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
    
//Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.

// TODO: Arrumar a tabela porque a imagem tem que ser colocada na td ao lado
function searchPokemon(user) {
    
    let pokemonRow = document.getElementById('pokemon-row')
    let pokemonButton = document.getElementById('search-pokemon-button')
    let pokemonRowTr = document.createElement('tr')
    let pokemonRowTd = document.createElement('td')
    let pokemonImage = document.createElement('img')
    
    axios.get('https://pokeapi.co/api/v2/pokemon/' + user)
        .then(function(response){

            pokemonButton.innerText = 'Carregando'

            pokemonRowTd.innerText = response.data.name
            pokemonRowTr.appendChild(pokemonRowTd)
            
            pokemonImage.src = response.data.sprites.front_default
            pokemonRowTd.appendChild(pokemonImage)
            pokemonRowTr.appendChild(pokemonRowTd)
            
            pokemonRow.appendChild(pokemonRowTr)
            
            for (const stats of response.data.stats) {
                let pokemonRowTd = document.createElement('td')
                
                pokemonRowTd.innerText = stats.stat.name + '-' + stats.base_stat 
                pokemonRowTr.appendChild(pokemonRowTd)
            }

            pokemonButton.innerText = 'Pesquisar'
        })
        .catch(function(error){
            console.log(error);

            alert('Pokemon nao exite')
        })
}
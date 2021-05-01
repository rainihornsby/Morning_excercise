// link for the pokemon API

// onclick function to search foe the info
// be able to input user search into the API
// populate the data

// fetch the data

// prevent default info from the poulating

// document.ready function
$(()=>{

    $('form').on("submit", (event)=>{
        event.preventDefault()
        // set a variable for the user input
        const userInput = $('input[type="text"]').val()
        

        console.log(userInput)
        // calling async function I made
        async function getPokeData(){
            // this is what hold the response, API goes into the fetch function
            // async await to grab data
                                    // using backtick so I can use template literal
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            // change the data to json data
            const data = await response.json();
            console.log(data);
            $('#pokeName').html(data.forms[0].name);
            $('#pokeType').html(data.types[0].type.name);
            $('#pokeNum').html(data.id);
            
            
        }
        getPokeData()
        
    })
    
})
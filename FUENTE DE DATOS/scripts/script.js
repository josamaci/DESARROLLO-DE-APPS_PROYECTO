let cargarDatos = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(data => {
            for (const pokemon of data.results) {
                let name = pokemon.name
                let url = pokemon.url
                let plantilla = `<tr><th>${name}</th><td>${url}</td></tr>`
                document.querySelector('table').innerHTML += plantilla
            }
        })
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});
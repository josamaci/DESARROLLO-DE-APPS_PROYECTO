var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "HP",
            "ATAQUE",
            "DEFENSA",
            "ATAQUE ESPECIAL",
            "DEFENSA ESPECIAL",
            "VELOCIDAD"
        ],
        datasets: [{
            data: [0, 0, 0, 0, 0, 0],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderWidth: 4,
            pointBackgroundColor: "transparent",
        }, ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    },
});

let cargarDatos = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(data => {
            for (const pokemon of data.results) {
                let name = pokemon.name
                let plantilla = `<option value="${name}">${name.toUpperCase()}</option>`
                document.querySelector('.select').innerHTML += plantilla

            }
            document.querySelector('select').addEventListener('change', e => {
                document.querySelector('.label-desc').innerHTML = e.target.value.toUpperCase()
                fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                    .then(response => response.json())
                    .then(data => {
                        for (const pokemon of data.results) {
                            let name = pokemon.name
                            let url = pokemon.url
                            if (e.target.value.toLowerCase() == name) {
                                fetch(url)
                                    .then(response => response.json())
                                    .then(data => {
                                        document.querySelector(".align-self-center").innerHTML = `<center><img src="${data.sprites.front_default}" alt="${name.toUpperCase()}"></center>`
                                        let stats = data.stats
                                        let hp = stats[0].base_stat
                                        let attack = stats[1].base_stat
                                        let defense = stats[2].base_stat
                                        let special_attack = stats[3].base_stat
                                        let special_defense = stats[4].base_stat
                                        let speed = stats[5].base_stat
                                        let total = hp + attack + defense + special_attack + special_defense + speed
                                        document.querySelector(".card-body").innerHTML = `<canvas class="my-4 w-100" id="myChart" height="380"></canvas>`
                                        var ctx = document.getElementById("myChart");
                                        var myChart = new Chart(ctx, {
                                            type: "bar",
                                            data: {
                                                labels: [
                                                    "HP",
                                                    "ATAQUE",
                                                    "DEFENSA",
                                                    "ATAQUE ESPECIAL",
                                                    "DEFENSA ESPECIAL",
                                                    "VELOCIDAD"
                                                ],
                                                datasets: [{
                                                    data: [hp, attack, defense, special_attack, special_defense, speed],
                                                    lineTension: 0,
                                                    backgroundColor: "#BF0202",
                                                    borderColor: "#A30303",
                                                    borderWidth: 4,
                                                    pointBackgroundColor: "#A30303",
                                                }, ],
                                            },
                                            options: {
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            beginAtZero: true,
                                                        },
                                                    }, ],
                                                },
                                                legend: {
                                                    display: false,
                                                },
                                            },
                                        });
                                        document.querySelector(".puntos").innerHTML = `<h4>ESTADÍSTICAS BASE TOTALES DE ${name.toUpperCase()}:</h4>
                                        <p>${total}</p>`
                                    })
                            }
                        }
                    })
            })
        })
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});
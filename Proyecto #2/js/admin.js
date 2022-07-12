// Graph
var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: "#D20000",
            borderColor: "#D10707",
            borderWidth: 4,
            pointBackgroundColor: "#D10707",
        }, ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    },
});
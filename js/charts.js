function chart1(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [37, 38, 16, 5],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(255, 205, 255)'
                    ],
                    hoverOffset: 4
                }]
    
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: strings[lang].chart[canvasId].question
                    }
                }
            },
        }
    )
}

function chart2(canvasId, lang) {
    const ctx = document.getElementById(canvasId);

    new Chart(
        document.getElementById(canvasId).getContext('2d'), 
        {
            type: 'bar',
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [
                        75,
                        29,
                        52,
                        51,
                        2,
                        4,
                        4,
                        16,
                        3,
                        5
                    ],
                    backgroundColor: [
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                        'rgb(153, 102, 255)',
                    ]
                }]
            },
            options: {
                indexAxis: 'y',
                elements: {
                    bar: {
                        borderWidth: 1,
                    }
                },
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: strings[lang].chart[canvasId].question
                    }
                }
            },
        }
    );
}
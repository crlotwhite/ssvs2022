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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}

function chart2(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'), 
        {
            type: 'bar',
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    label: strings[lang].chart[canvasId].label,
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    );
}

function chart3(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [35, 36, 9, 6, 5, 5],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(255, 205, 255)',
                        'rgb(157,241,169)',
                        'rgb(250,119,45)',
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}

function chart4(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: 'bar',
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    label: strings[lang].chart[canvasId].label,
                    data: [
                        87,
                        36,
                        18,
                        2,
                        10,
                        17,
                        1,
                    ],
                    backgroundColor: [
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    );
}

function chart5(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [5, 22, 18, 24, 27],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(255, 205, 255)',
                        'rgb(157,241,169)',
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}

function chart6(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [13, 32, 12, 31, 8],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(255, 205, 255)',
                        'rgb(157,241,169)',
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}

function chart7(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [89, 7],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}

function chart8(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [1, 4, 1, 1],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(157,241,169)',
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}

function chart9(canvasId, lang) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: strings[lang].chart[canvasId].labels,
                datasets: [{
                    data: [2, 3, 1, 1],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(157,241,169)',
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
                        text: strings[lang].chart[canvasId].question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    )
}
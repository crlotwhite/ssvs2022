const pieColors = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(255, 205, 255)',
    'rgb(157,241,169)',
];

function barColors(num) {
    let colors = [];
    for (let i=0;i<num;i++) {
        colors.push('rgb(153, 102, 255)');
    }
    return colors;
}

function pieChart(canvasId, chartStrings, data) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: "pie",
            data: {
                labels: chartStrings.labels,
                datasets: [{
                    data: data,
                    backgroundColor: pieColors,
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
                        text: chartStrings.question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    );
}

function barChart(canvasId, chartStrings, data) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: 'bar',
            data: {
                labels: chartStrings.labels,
                datasets: [{
                    label: chartStrings.label,
                    data: data,
                    backgroundColor: barColors(data.length)
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
                        text: chartStrings.question,
                        font: {
                            size: 18,
                        }
                    }
                }
            },
        }
    );
}


function chart1(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [37, 38, 16, 5]);
}

function chart2(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], [75, 29, 52, 51, 2, 4, 4, 16, 3, 5]);
}

function chart3(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [35, 36, 9, 6, 5, 5]);
}

function chart4(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], [87, 36, 18, 2, 10, 17, 1]);
}

function chart5(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [5, 22, 18, 24, 27]);
}

function chart6(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [13, 32, 12, 31, 8]);
}

function chart7(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [89, 7]);
}

function chart8(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [2, 3, 1, 1]);
}

function chart9(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [1, 4, 1, 1]);
}


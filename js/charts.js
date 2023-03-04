const pieColors = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(255, 205, 255)',
    'rgb(157,241,169)',
    'rgb(153, 102, 255)',
    'rgb(173,127,134)',
    'rgb(25,91,73)',
    'rgb(211,103,64)',
    'rgb(218,18,225)',
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

function barChart(canvasId, chartStrings, label, data) {
    new Chart(
        document.getElementById(canvasId).getContext('2d'),
        {
            type: 'bar',
            data: {
                labels: chartStrings.labels,
                datasets: [{
                    label: label,
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
    barChart(canvasId, strings[lang].chart[canvasId], strings[lang].chart.common.label, [75, 29, 52, 51, 2, 4, 4, 16, 3, 5]);
}

function chart3(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [35, 36, 9, 6, 5, 5]);
}

function chart4(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], strings[lang].chart.common.label, [87, 36, 18, 2, 10, 17, 1]);
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

function chart10(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [24, 37, 13, 8, 7]);
}

function chart11(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [1, 2, 7, 11, 48, 20]);
}

function chart12(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [17, 25, 37, 10]);
}

function chart13(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], strings[lang].chart.common.label, [42, 12, 36, 47, 2, 2, 5, 16, 1, 2, 2]);
}

function chart14(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [76, 4, 2, 8]);
}

function chart15(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [43, 17, 3, 1, 13, 2, 5, 6]);
}

function chart16(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], strings[lang].chart.common.label, [22, 41, 31, 10, 23, 12, 5, 1, 12]);
}

function chart17(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [21, 22, 10, 5, 7, 2, 6, 2, 10, 4]);
}

function chart18(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [12, 7, 24, 5, 1, 29, 7]);
}

function chart19(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [65, 3, 11, 9, 8]);
}

function chart20(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [52, 44]);
}

function chart21(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [31, 30, 12, 10, 7, 6]);
}

function chart22(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [23, 15, 16, 11, 9, 8, 14]);
}

function chart23(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [35, 61]);
}

function chart24(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [2, 42, 40, 12]);
}

function chart25(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [18, 28, 35, 13, 2]);
}

function chart26(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [57, 34]);
}

function chart27(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [23, 15, 15, 17, 4]);
}

function chart28(canvasId, lang) {
    pieChart(canvasId, strings[lang].chart[canvasId], [84, 12]);
}

function chart29(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], strings[lang].chart.common.label, [8, 12, 25, 3, 12, 13, 4, 5, 9]);
}

function chart30(canvasId, lang) {
    barChart(canvasId, strings[lang].chart[canvasId], strings[lang].chart.common.label, [5, 7, 8, 8, 59]);
}


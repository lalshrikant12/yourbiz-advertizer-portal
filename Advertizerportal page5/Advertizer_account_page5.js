
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'CPR', 'Impression', 'Clicks'],
        ['ID-1001', 4000, 3000, 2600],
          ['ID-1001', 5600, 4560, 2500],
          ['ID-1001', 2000, 1120, 300],
          ['ID-1001', 3030, 1940, 1200],
          ['ID-1001', 2030, 1340, 200],
          ['ID-1001', 4530, 2940, 100]
    ]);

    var options = {
        chart: {
            // title: 'Company Performance',
            // subtitle: 'Income, Impression, clicks',
        },
        bars: 'vertical',
        vAxis: { format: 'decimal' },
        height: 260,
        width: 800,
        colors: ['#233A6C', '#CC3174', '#2B9348']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');

    btns.onclick = function(e) {

        if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}

var discount = 10;
document.getElementById("Discount").innerHTML = "Discount% ("+discount.toString()+"%)";

var time_prd = "7 days";
document.getElementById("time-prd").innerHTML = "Last week("+time_prd+")";


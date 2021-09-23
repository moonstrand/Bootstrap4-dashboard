// Chart.js
window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Firefox",
            "Safari",
            "Chrome",
            "Edge",
            "IE"
        ]
    },
    options: {
        responsive: true
    }
};


// bar
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var colors = Chart.helpers.color;
var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: '會員',
        backgroundColor: colors(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: '非會員',
        backgroundColor: colors(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};

window.onload = function () {
    // pie
    document.querySelectorAll('.chart-item').forEach(function (item) {
        config.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        var ctx = item.getContext("2d");
        window.myPie = new Chart(ctx, config);
    })


    // bar
    var barCtx = document.getElementById("barCanvas").getContext("2d");
    window.myBar = new Chart(barCtx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '會員比例'
            }
        }
    });

};

$(document).ready(function () {
    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //Modal
    $('#manageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title)
    })

    $('#showModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title)
    })

    $('#editModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var name = button.data('name');
        var work = button.data('work');
        var price = button.data('price');
        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#username').attr('value',name);
        modal.find('#workname').attr('placeholder',work);
        modal.find('#price').attr('placeholder',price)
    })

    $('#statusModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var name = button.data('name');
        var work = button.data('work');
        var mail = button.data('mail');
        var status = button.data('status');
        var price = button.data('price');
        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#username').attr('value',name);
        modal.find('#workname').attr('value',work);
        modal.find('#mail').attr('value',mail);
        modal.find('#status').attr('value',status);
        modal.find('#price').attr('value',price)
    })

    $('#priceModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var name = button.data('name');
        var work = button.data('work')
        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#username').attr('value',name)
        modal.find('#workname').attr('value',work)
    })

    $('#offModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title)
    })

    $('#deleteModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title)
    })
});
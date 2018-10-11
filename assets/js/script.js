$(document).ready(function () {
  //Progress Bar functionality
  var progressColors = ['#096275', '#a71e34', '#CED672', '#8fd0d8', '#86CED3'];
  var progressBarData = [{
      'name': 'PETROL VEHICLE',
      'value': 15783,
    },
    {
      'name': 'DIESEL VEHICLE',
      'value': 15881,
    },
    {
      'name': 'ELECTRIC VEHICLE',
      'value': 15903,
    },
    {
      'name': 'ELECTRIC VEHICLE (BATTERY LEASED) 7',
      'value': 12066,
    }
  ];

  for (var i = 0; i < progressBarData.length; i++) {
    var progressbar = document.createElement('div');
    $(progressbar).attr('id', 'progressbar' + i);
    $(progressbar).attr('class', 'progressbars');
    $('#progressbar-container').append(progressbar);
    $('#progressbar' + i).LineProgressbar({
      percentage: progressBarData[i].value,
      fillBackgroundColor: progressColors[i],
      height: '50px'
    });
    $('#progressbar' + i + ' .progressName').text(progressBarData[i].name);
  }

});


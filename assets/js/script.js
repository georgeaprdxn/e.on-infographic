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
      'name': 'ELECTRIC VEHICLE (BATTERY LEASED)',
      'value': 12066,
    }
  ];

  for (var i = 0; i < progressBarData.length; i++) {
    var progressbar = document.createElement('div');
    $(progressbar).attr('id', 'progressbar' + i);
    $(progressbar).attr('class', 'progressbars');
    $('#progressbar-container').append(progressbar);
    // $('#progressbar' + i).LineProgressbar({
    //   percentage: progressBarData[i].value,
    //   fillBackgroundColor: progressColors[i],
    //   height: '55px'
    // });
    $('#progressbar' + i + ' .progressName').text(progressBarData[i].name);
  }
  $('#progressbar3 .progressName').append('<sup>7</sup>');

  
  // Air Poultion Bar graph
  // var svgWidth = 100;
  // var svgHeight = 250;

  // var svg = d3.select('#air-poultion-graph')
  //     .attr("width", svgWidth+'%')
  //     .attr("height", svgHeight)
  //     .attr("class", "bar-chart");

  var polutionDataSet = [{
      'name':'&pound;157m',
      'value':157,
      'year': '2017'
    },
    {
      'name':'&pound;5.5bn',
      'value': 5500,
      'year':'2025'
    },
    {
      'name':'&pound;18.6bn',
      'value': 18600,
      'year':'2035'
    }];

  var barPadding = 10;
  var scaleFactor = 20;
  // var barWidth = (svgWidth / polutionDataSet.length);

  // var bar = svg.selectAll("g")
  //                 .data(polutionDataSet)
  //                 .enter()
  //                 .append("g")
  //                 .attr("width", barWidth - barPadding+'%')
  //                 .attr('height',svgHeight-100)
  //                 .attr("x",0 )
  //                 .attr("transform", function (d, i) {
  //                    var translate = [barWidth * i + 155*i];
  //                    return "translate("+ translate +")";
  //                 });

  //   bar.append("rect")
  //     .attr("height", 0)
  //     .attr("width", barWidth - barPadding+'%')
  //     .attr("y", svgHeight)
  //     .transition()
  //     .attr("height", function(d) { return d.value/100; })
  //     .attr("y", function(d) { return svgHeight - d.value/100; })
  //     .duration(2000)
  //     .ease();

  //     bar.append("text")
  //        .attr('class', 'value-text')
  //       .attr("y", function(d) { return svgHeight - d.value/100; })
  //       .attr("dy", "-.75em")
  //       .attr("dx", "3.8em")
  //       .html(function(d) { return d.name; });

  //     bar.append('text')
  //        .attr('class', 'year-text') 
  //       .attr('y', svgHeight-20)
  //       .attr("dx", "2.0em")
  //       .attr("dy", "2.0em")
  //       .html(function(d) { return d.year; });
        // .append('tspan')
        //   .text(function(d, i) { if(i == 2)return '3'; })
        //   .style('font-size', '10px')
        //   .attr('dx', '0em')
        //   .attr('dy', '-.8em')

  var labels = ["Titanic", "Titanic", "Star Wars: The Force Awakens", "Jurassic World", "Marvel's: The Avengers", "Furious 7", "Avengers: Age of Ultron", "Harry Potter and the Deathly Hallows Part 2", "Frozen", "Iron Man 3"];
  var values = [2787965087, 2186772302, 2068223624, 1670400637, 1518812988, 1516045911, 1405403694, 1341511219, 1276480335, 1214811252];
  // var outputValues = abbreviateNumber(values);

  $('.column-chart').simpleChart({
      title: {
          text: 'All Time Box Office - Top 10 Worldwide Grosses',
          align: 'center'
      },
      type: 'column',
      layout: {
          width: '100%',
          height: '250px'
      },
      item: {
          label: labels,
          value: values,
          // outputValue: outputValues,
          color: ['#00aeef'],
          prefix: '$',
          suffix: '',
          render: {
              margin: 0.2,
              size: 'relative'
          }
      }
  });
});

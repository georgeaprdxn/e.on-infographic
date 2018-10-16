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
    $('#progressbar' + i).LineProgressbar({
      percentage: progressBarData[i].value,
      fillBackgroundColor: progressColors[i],
      height: '55px'
    });
    $('#progressbar' + i + ' .progressName').text(progressBarData[i].name);
  }
  $('#progressbar3 .progressName').append('<sup>7</sup>');
  

  // To set piggy bank on position
  $(window).on('load resize',function(){
    a=$('.government').offset();
    b=$('.government ul').offset();
    if(window.innerWidth <= 995){
      c=b.top-a.top
      $('.hand-money-bank-image').css('top',c+34);
    }else {
      $('.hand-money-bank-image').css('cssText','top','unset')
    }
  });

  // animation on scroll
  $(window).on('load scroll',function () {
    
    var lightning_banner = $('.banner').offset().top;
    var topOfWindow = $(window).scrollTop();

    if (lightning_banner < (topOfWindow+200)) {
      $('.lightning').addClass("anim-lightning");
    }
    
    // Car animation
    var tempo_right= $('.tempo-to-right').offset().top;
    if (tempo_right < (topOfWindow+700)) {
      $('.car-to-left').addClass("car-left");
      $('.car-to-right').addClass("car-right");
      $('.tempo-to-right').addClass("tempo-right");
    }

  // Hand animation
   var hand_drop= $('.hand-image').offset().top   
    if (hand_drop < (topOfWindow+600)) {
      $('.hand-image').addClass("hand-drop");
    }

  // trainle animation
    var offering_stats_wrapper= $('.offering-stats-wrapper').offset().top;
    if (offering_stats_wrapper < (topOfWindow+700)) {
      $('.offering-stats-wrapper').addClass("offering-stats-triangle");
    }

  // Death animation
    var sky_top= $('.sky').offset().top;
    if (sky_top < (topOfWindow+700)) {
      $('.half-round').addClass("anime-half-round");
      $('.round').addClass("anime-roud");
      $('.sky').addClass("sky-anime");
      $('.sky-text').addClass("anime-sky-text");
    }

  // Graph animation 
    var bar_top= $('.bar').offset().top;
    if (bar_top < (topOfWindow+780)) {
      $('.bar').addClass("anime-bar");
    }

  // on the road graph animation
    var on_road_top= $('.on-the-road-graph').offset().top;
    if (on_road_top < (topOfWindow+800)) {
      $('.on-the-road-graph').addClass("anime-on-the-road-graph");
    }

  });

});

$(document).ready(function () {
  var show_flag = false;
  var counterAnimateFlag = false,desireCounter,desirePercent;
  //Progress Bar functionality
  var progressColors = ['#096275', '#a71e34', '#CED672', '#8fd0d8', '#86CED3'];
  var progressImages = [{
    'car': 'dark_blue_car.png',
    'wheels': 'dark_blue_wheel.png'
  }, {
    'car': 'red_car.png',
    'wheels': 'red_wheel.png'
  }, {
    'car': 'green_car.png',
    'wheels': 'gree_blue_wheel.png'
  }, {
    'car': 'blue_car.png',
    'wheels': 'gree_blue_wheel.png'
  }];

  var progressBarData = [{
      'name': 'PETROL VEHICLE',
      'value': 15783,
      'image': ''
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
      var progressbarItem = document.createElement('div');
      var progressbars = document.createElement('div');
      var progressName = document.createElement('div');
      var progressBlade = document.createElement('div');
      $(progressbarItem).attr('id', 'progressbar' + i);
      $(progressbarItem).attr('class', 'progressbars');
      $('#progressbar-container').append(progressbarItem);
      $(progressName).text(progressBarData[i].name);
      $(progressbars).attr('class', 'progressbar');
      $(progressName).attr('class', 'progressName');
      $(progressBlade).attr('class', 'progressBlade');
      $(progressbars).append(progressName);
      $(progressbars).append(progressBlade);
      $(progressBlade).height(55);
      $('#progressbar'+i).append(progressbars);
    }

  function animeBar() {
    for (var i = 0; i < progressBarData.length; i++) {
      $('#progressbar'+i).remove();
      var progressbar = document.createElement('div');
      $(progressbar).attr('id', 'progressbar' + i);
      $(progressbar).attr('class', 'progressbars');
      $('#progressbar-container').append(progressbar);
      $('#progressbar' + i).LineProgressbar({
        percentage: progressBarData[i].value,
        fillBackgroundColor: progressColors[i],
        height: 55
      });
      $('#progressbar' + i + ' .progressName').text(progressBarData[i].name);
    }
    $('#progressbar3 .progressName').append('<sup>7</sup>');
  }

  // To set piggy bank on position
  var government_top, government_ul_top, subtracted_val, offering_title_height, counter;
  $(window).on('load resize orientationchange', function () {
    government_top = $('.government').offset();
    government_ul_top = $('.government ul').offset();
    if (window.innerWidth <= 995) {
      subtracted_val = government_ul_top.top - government_top.top
      $('.hand-money-bank-image').css('top', subtracted_val + 34);
    } else {
      $('.hand-money-bank-image').css('cssText', 'top', 'unset')
    }

    // Align offering section triangle
    offering_title_height = document.getElementsByClassName('electric-vehicles')[0].getElementsByTagName('h4')[0].offsetHeight;
    $('.government ul li h4').each(function () {
        $(this).css('min-height', offering_title_height);
    });

    var _onTheGraph = document.querySelector('.on-the-road-graph');
    var _offsetHeight = _onTheGraph && _onTheGraph.offsetHeight;

    if (window.innerWidth <= 992) {

      if (_offsetHeight) {
        var _onTheRoadContainer = document.querySelector('.on-the-road');
        _onTheRoadContainer.style.height = _offsetHeight + 'px';
      }
      
      $('#on-the-road-image').attr('src', $('#on-the-road-image').attr('data-mobile-src'));
    } else {
      if (_offsetHeight) {
        var _onTheRoadContainer = document.querySelector('.on-the-road');
        _onTheRoadContainer.style.height = 'auto';
      }
      $('#on-the-road-image').attr('src', $('#on-the-road-image').attr('data-desktop-src'));
    }
    // fetch url
    var fetch_url_val=$('#progressbar-container').attr('data-url-fetch');
    if (window.innerWidth < 768) {
      $('.save-cost-car-image').addClass('hide');
      var progressContainerWidth = $('#progressbar-container').width();
      $('#progressbar-container').height(progressContainerWidth);
      $('.proggress').height(65);

      if (!$('.progressbar .image img').length) {
        $('.progressbar .image').each(function (index, el) {
          var image = new Image();
          image.src = 'assets/images/' + progressImages[index].car;
          el.innerHTML += '<img class="car" src='+fetch_url_val+'assets/images/' + progressImages[index].car + '>';
          el.innerHTML += '<img class="wheels" src='+fetch_url_val+'assets/images/' + progressImages[index].wheels + '>';
        });
      }

    } else if ($(window).width() >= 768) {
      $('.save-cost-car-image').removeClass('hide');
      $('.progressbar .image img').remove();
    }

  });

  // animation on scroll
  $(window).on('load scroll', function () {

    var lightning_banner = $('.banner').offset().top;
    var topOfWindow = $(window).scrollTop();

    $('.lightning').addClass("anim-lightning");

    // Car animation
    var tempo_right = $('.tempo-to-right').offset().top;
    if (tempo_right < (topOfWindow + 700)) {
      $('.car-to-left').addClass("car-left");
      $('.car-to-right').addClass("car-right");
      $('.tempo-to-right').addClass("tempo-right");
    }

    // Hand animation
    var hand_drop = $('.hand-image').offset().top
    if (hand_drop < (topOfWindow + 600)) {
      $('.hand-image').addClass("hand-drop");
    }

    // trainle animation
    var offering_stats_wrapper = $('.offering-stats-wrapper').offset().top;
    if (offering_stats_wrapper < (topOfWindow + 700)) {
      $('.offering-stats-wrapper').addClass("offering-stats-triangle");
    }

    // Death animation
    var sky_top = $('.sky').offset().top;
    if (sky_top < (topOfWindow + 700)) {
      $('.half-round').addClass("anime-half-round");
      $('.round').addClass("anime-roud");
      $('.sky').addClass("sky-anime");
      $('.sky-text').addClass("anime-sky-text");
    }

    // Graph animation
    var bar_top = $('.bar').offset().top;
    if (bar_top < (topOfWindow + 780)) {
      $('.bar').addClass("anime-bar");
    }

    // on the road graph animation
    var on_road_top = $('.on-the-road-graph').offset().top;
    if (on_road_top < (topOfWindow+400)) {
      $('.on-the-road-graph').addClass("anime-on-the-road-graph");
    }

    var consumer_top = $('.desire-stats').offset().top;
    if (consumer_top < (topOfWindow + 400)) {
      $('.desire-stats').addClass("anime-consumer-desire");
      if (!counterAnimateFlag) {
        counterAnimateFlag = true;
        desireCounter=0;
        $('.desire-percent').each(function () {
          desireCounter++;
          if (desireCounter===1) {
            desirePercent=69;
          }else{
            desirePercent=86;
          }
          $(this).prop('Counter', 0).animate({
            Counter: desirePercent
          }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now) + '%');
            }
          });
        });
      }
    }

    var bar_save_top = $('#progressbar-container').offset().top;
    if (bar_save_top < (topOfWindow + 400) && !show_flag) {
      show_flag = true;
      animeBar();
    }    
  });

});

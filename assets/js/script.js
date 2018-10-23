$(document).ready(function () {
  var show_flag = false;
  var counterAnimateFlag = false,desireCounter,desirePercent;
  //Progress Bar functionality
  var progressColors = ['#096275', '#a71e34', '#CED672', '#8fd0d8', '#86CED3'];
  var fetch_url_val=$('#progressbar-container').attr('data-url-fetch');
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

  function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

  function animeBar() {
    for (var i = 0; i < progressBarData.length; i++) {
      $('#progressbar'+i).remove();
      var progressbar = document.createElement('div');
      $(progressbar).attr('id', 'progressbar' + i);
      $(progressbar).attr('class', 'progressbars');
      $('#progressbar-container').append(progressbar);
      $('#progressbar' + i).LineProgressbar({
        progressImages: window.innerWidth >= 768 ? '': progressImages,
        ind: i,
        fetch_url_val:fetch_url_val,
        percentage: progressBarData[i].value,
        fillBackgroundColor: progressColors[i],
        height: window.innerWidth >= 768 ? 55 : window.innerWidth <= 360 ? 58 : 65
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
      $('.hand-money-bank-image').css('cssText', 'top', 'unset');
    }

    // Align offering section triangle
    offering_title_height = document.getElementsByClassName('electric-vehicles')[0].getElementsByTagName('h4')[0].offsetHeight;
    $('.government ul li h4').each(function () {
        $(this).css('min-height', offering_title_height);
    });

    var _onTheGraph = document.querySelector('.on-the-road-graph');
    var _onTheRoadContainer = document.querySelector('.on-the-road');
    var _offsetHeight,
    _ontheRoadHeight;
    var graphImg = $('.on-the-road-graph img');
    if (window.innerWidth <= 1300) {
      setTimeout(function() {
        _offsetHeight = _onTheGraph && _onTheGraph.offsetHeight;
        _ontheRoadHeight = _onTheRoadContainer.offsetHeight;
        if (_offsetHeight && _offsetHeight > _ontheRoadHeight) {
          $('.on-the-road').height(_offsetHeight);
        } else {
          graphImg.height(_ontheRoadHeight);
        }
      }, 500);
    } else {
      graphImg.height('auto');
    }

    if (window.innerWidth <= 992) {

      $('#on-the-road-image').attr('src', $('#on-the-road-image').attr('data-mobile-src'));
    } else {
      if (_offsetHeight) {
        var _onTheRoadContainer = document.querySelector('.on-the-road');
        _onTheRoadContainer.style.height = 'auto';
      }
      $('#on-the-road-image').attr('src', $('#on-the-road-image').attr('data-desktop-src'));
    }
    // fetch url
    if (window.innerWidth < 768) {
      animeBar();
      $('.save-cost-car-image').addClass('hide');
        var progressContainerWidth = $('#progressbar-container').width();
        $('#progressbar-container').height(progressContainerWidth);

    } else if (window.innerWidth >= 768) {
      $('#progressbar-container').height('auto');
      $('.save-cost-car-image').removeClass('hide');
      $('.progressbar .image').remove();
    }

  });

  // animation on scroll
  $(window).on('load scroll', function () {

    var lightning_banner = $('.banner').offset().top;
    var topOfWindow = $(window).scrollTop();

    if (isElementInViewport($('.lightning-middle'))) {
      $('.lightning').addClass("anim-lightning");
    }

    // Car animation
    var tempo_right = $('.tempo-to-right').offset().top;
    if (isElementInViewport($('.lightning-middle'))) {
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
    var triangleImgDimensions = $('.offering-stats-wrapper img');
    var _image = new Image();
    _image.src = triangleImgDimensions.attr('src');
      var ht = 1592 ||_image.naturalHeight;
      var wt = 1353 || _image.naturalWidth;
      $('.offering-stats-wrapper').each(function() {
        var _containerWidth = Math.round($(this).width());
        var _containerHeight = Math.round(_containerWidth / (ht/wt));
        $(this).height(_containerHeight);
      });
    var animateTriangle = true;
    if (offering_stats_wrapper < (topOfWindow + 700) && animateTriangle) {
      animateTriangle = false;
      $('.offering-stats-wrapper').each(function(index,el) {
        setTimeout(function() {
          $(el).addClass('offering-stats-triangle');
        }, 500*index);
      })
      $('.offering-stats .figure').each(function (index, el) {
        setTimeout(function () {
          $(el).addClass('show-figure');
        }, 500 * index);
      })
    }

    // Death animation
    if (isElementInViewport($('.ill-health .common-text-style'))) {
      $('.half-round').addClass("anime-half-round");
      $('.round').addClass("anime-roud");
      $('.sky').addClass("sky-anime");
      $('.sky-text').addClass("anime-sky-text");
    }

    // Graph animation
    if (isElementInViewport($('.polution-stats .common-text-style'))) {
      $('.bar').addClass("anime-bar");
    }

    // on the road graph animation
    if (isElementInViewport($('.charging-point-info'))) {
      $('.on-the-road-graph').addClass("anime-on-the-road-graph");
    }

    // consumer desire animation
    if (isElementInViewport($('.consumer-info'))) {
      $('.desire-stats').addClass("anime-consumer-desire");
      if (!counterAnimateFlag) {
        counterAnimateFlag = true;
        desireCounter=0;
        $('.desire-percent').each(function () {
          desireCounter++;
          if (desireCounter===1) {
            desirePercent=69;
            desiretime=2000;
          }else{
            desirePercent=86;
            desiretime=2500;
          }
          $(this).prop('Counter', 0).animate({
            Counter: desirePercent
          }, {
            duration: desiretime,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now) + '%');
            }
          });
        });
      }
    }

    var bar_save_top = $('#progressbar-container').offset().top;
    if (bar_save_top < (topOfWindow + 700) && !show_flag) {
      show_flag = true;
      animeBar();
    }    
  });

});

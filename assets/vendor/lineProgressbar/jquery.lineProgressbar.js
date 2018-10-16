/**
 * jQuery Line Progressbar
 * Author: KingRayhan<rayhan095@gmail.com>
 * Author URL: http://rayhan.info
 * Version: 1.0.0
 */

(function ($) {
  'use strict';


  $.fn.LineProgressbar = function (options) {

    options = $.extend({
      percentage: null,
      ShowProgressCount: true,
      duration: 1500,

      // Styling Options
      fillBackgroundColor: '#3498db',
      backgroundColor: '#e2e9ed',
      radius: '0px',
      height: '10px',
      width: '100%'
    }, options);

    $.options = options;
    return this.each(function (index, el) {
      // Markup
      $(el).html('<div class="progressbar"><div class=progressName></div><div class="progressBlade"><div class="proggress"><div class="percentCount"></div></div><figure class="image"></figure></div></div>');

      var progressFill = $(el).find('.proggress');
      var progressBar = $(el).find('.progressbar');

      progressFill.css({
        backgroundColor: options.fillBackgroundColor,
        height: options.height,
        borderRadius: options.radius
      });
      progressBar.css({
        width: options.width,
        backgroundColor: options.backgroundColor,
        borderRadius: options.radius
      });

      var commonFactor = ($(window).width() < 868) ? 10 : 0;

      // Progressing
      progressFill.animate({
        width: ((options.percentage / 16000 * 100) - commonFactor) + "%"
      }, {
        step: function (x) {
          if (options.ShowProgressCount) {
            $(el).find(".percentCount").text('£' +
              parseInt(((x/100)*16000).toFixed(0)).toLocaleString());
          }
        },
        duration: options.duration
      });
      ////////////////////////////////////////////////////////////////////
    });
  }
  $.fn.progressTo = function (next) {

    var options = $.options;

    return this.each(function (index, el) {

      var progressFill = $(el).find('.proggress');
      var progressBar = $(el).find('.progressbar');

      progressFill.animate({
        width: next + "%"
      }, {
        step: function (x) {
          if (options.ShowProgressCount) {
            $(el).find(".percentCount").text(Math.round(x) + "%");
          }
        },
        duration: options.duration
      });
      ////////////////////////////////////////////////////////////////////
    });
  }

})(jQuery);

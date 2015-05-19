var chart = new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3],
  series: [[
      {meta: 'description', value: 1 },
      {meta: 'description', value: 5},
      {meta: 'description', value: 3}
    ],
    [
      {meta: 'other description', value: 2},
      {meta: 'other description', value: 4},
      {meta: 'other description', value: 2}
    ]
  ]
}, {
  low: 0,
  high: 10, // optional: add for custom interval
  axisX: {
    offset: 25,
    labelOffset: {
      y: 10
    }
  },
  axisY: {
    offset: 35,
    labelOffset: {
      x: -10,
      y: 3
    }
  },
  plugins: [
    Chartist.plugins.tooltip()
  ]
});
var $tooltip = $('<div class="tooltip tooltip-hidden"></div>').appendTo($('.ct-chart'));
 
$(document).on('mouseenter', '.ct-point', function() {
  var seriesName = $(this).closest('.ct-series').attr('ct:series-name'),
      value = $(this).attr('ct:value');
  
  $tooltip.text(seriesName + ': ' + value);
  $tooltip.removeClass('tooltip-hidden');
});

$(document).on('mouseleave', '.ct-point', function() {
  $tooltip.addClass('tooltip-hidden');
});

$(document).on('mousemove', '.ct-point', function(event) {
  console.log(event);
  $tooltip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $tooltip.width() / 2,
    top: (event.offsetY || event.originalEvent.layerY) - $tooltip.height() - 20
  });
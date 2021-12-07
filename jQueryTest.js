$(document).ready(() => {

  // drawBarChart(data, options, element);

//   The data parameter will be the data the chart should work from Start with just an Array of numbers
// e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element that the chart will get rendered into.

  let array = [400, 200, 200, 100, 300]

  var max = array.reduce(function(a, b) {
    return Math.max(a, b);
    }, 0);

    var container = $(document.createElement('div')).css({
      'display': 'flex', 'flex-direction': 'row-reverse', 'max-width': '100%', 'min-width': '50%', width: '50%', height: '500px', border: '1px solid black', 'justify-content':'center', 'align-items': 'flex-end'
    })

    var title = $(document.createElement('h1')).css({
      'display': 'in-line flex', padding: 'auto', 'justify-content': 'center', 'align-items': 'center', width: '500px', 'text-align': 'center'
    })

    //can change this to be the directed container 
    $('<h1>Bar Graph</h1>').appendTo($(title)).appendTo('body')
    $(container).appendTo('body')
    

    for (let x = 0; x < array.length; x++) {
      $('<p>'+array[x]+'</p>').appendTo($($(document.createElement('div')).css({
        'display':'flex', width: '10%', border: '1px solid black', 'justify-content': 'center', 'align-item': 'center', margin: '.5%', float: 'left','background-color': '#FAEBD7', opacity: '0', 'align-content': 'space-around'
  
      }).animate({
        height: `${array[x]/max*90}%`,
        opacity: '1',
      })).prependTo(container));
    }  
})
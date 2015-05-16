function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

jQuery(function($) {
  $('#calcbox').keyup(function() {
    // sanitize user input
    var lcase = $(this).val()
      .toLowerCase()
      .replace(/[^A-Za-z]/g, "");

    // calculate word value
    var myval = 0;
    for (var i=0; i<lcase.length; i++) {
      myval = (myval === 0 ? 1 : myval) * (lcase.charCodeAt(i) - 96);
    }
    var valpct = Math.round((myval/1000000) * 100);

    // display results
    $('#prbar').toggleClass('progress-bar-success', !!(valpct<=100))
      .toggleClass('progress-bar-danger', !!(valpct>100))
      .css('width', Math.min(valpct, 100)+'%')
      .attr('aria-valuenow', valpct);

    $('#prbar-val').html(valpct)
    $('#current-result').html(numberWithCommas(myval));
  });
});
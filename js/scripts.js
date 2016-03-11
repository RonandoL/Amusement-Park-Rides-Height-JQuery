$(function() {
  var height = parseInt(prompt('How tall are you in inches?'));

  if (isNaN(height)) {
    // alert("please just enter a number");
    height = parseInt(prompt('Please just enter a number.How tall are you in inches?'));
  } else if (height <= 60) {
    $('.short').before('<h5>Your height is ' + height + ' inches!</h5>');
    $('.tall-enough').show();
  } else {
    $('.tall').before('<h5>Your height is ' + height + ' inches!</h5>');    
    $('.not-tall-enough').show();

  }

});

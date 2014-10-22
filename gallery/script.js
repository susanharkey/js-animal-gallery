

$('.filter-button').on('click', function () {
  $('.' + this.id).toggle();
  $(this).toggleClass('active');
  alertify.log("Toggled"+" "+this.id);

  // if($(this).hasClass('active')) {
  //   console.log('has class!');
  //   $(this).removeClass('active');
  // } else {
  //   console.log('does not has class!');
  //   $(this).addClass('active');
  // }

});


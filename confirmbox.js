(function( $ ) {
  $.fn.confirmBox = function(ele, callback) {

    $(this).live('confirm', function(event) {
      var message = $(event.target).data('confirm'),
          method = $(event.target).data('method'),
          href = $(event.target).attr('href')
      $(event.target).trigger('confirm:complete', false);
      
      callback(message, method, href);
      $(ele).attr('href', href).attr('data-method', method == undefined ? 'get' : method);
      
      return false;
    }

  };
})( jQuery );
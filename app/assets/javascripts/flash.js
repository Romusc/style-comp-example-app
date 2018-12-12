$(function() { window.setTimeout(function() { $('.alert').fadeOut(1000) }, 3000); });

function flash(text, type) {
  if (!type) type = 'success'

  var flash_div = $('#action-bar').prepend('\
      <div class="alert alert-' + type + ' alert-dismissible" role="alert">\
        <button type="button" class="close m-t-xs" data-dismiss="alert" aria-label="Close"><i class="fa fa-times"></i></button>\
        <h3>' + text + '</h3>\
      </div>\
  ')[0]

  window.setTimeout(function() { $('.alert').fadeOut(1000) }, 3000)
};

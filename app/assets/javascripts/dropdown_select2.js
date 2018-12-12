function initSelect2() {
  $(".select2").select2();
  $( "#dropdown" ).select2({
    theme: "bootstrap"
  });
};

$(document).ready(function() {
  initSelect2();
});

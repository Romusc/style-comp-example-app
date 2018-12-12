
function getBrowser() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  // If Internet Explorer, return version number
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return "ie";
  else if (/Edge\/\d./i.test(navigator.userAgent)) return "edge"
  else if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !navigator.userAgent.match("CriOS")) return "safari";
  else return "other";
};

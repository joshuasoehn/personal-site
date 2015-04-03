$(document).ready(function() {
  $('a[href^="http://"]').not('a[href*=gusdecool]').attr('target','_blank');
  $('a[href^="https://"]').not('a[href*=gusdecool]').attr('target','_blank');
});

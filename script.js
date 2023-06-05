/**
 * Submit form and show the text
 */

$("form#imageUpload").on("submit", function (event) {
  event.preventDefault();
  $("div#spinner").show();
});

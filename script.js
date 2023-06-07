$("span#text-response").hide();

/**
 * Submit form and show the text
 */

const API_URL = "http://localhost:3001/api/imgProcess";

$("form#imageUpload").on("submit", function (event) {
  event.preventDefault();
  $("div#spinner").show();
  $("span#text-response").hide();

  let imageFile = document.getElementById("uploadImage");
  let fileReader = imageFile.files[0];
  let data = new FormData();

  data.append("image", fileReader);

  $.ajax({
    url: API_URL,
    data: data,
    processData: false,
    contentType: false,
    method: "POST",
  })
    .done(function (resp) {
      console.log(resp);
      $("div#spinner").hide();
      $("span#text-response").show();
      $("span#text-response").html(resp.processResp);
    })
    .fail(function (error) {
      console.error(error);
      $("div#spinner").hide();
      $("span#text-response").show();
      $("span#text-response").html("An Error Occur, please check");
    });
});

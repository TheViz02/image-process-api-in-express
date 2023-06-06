$("span#text-response").hide();

/**
 * Submit form and show the text
 */

const API_URL = "http://localhost:3001/api/imgProcess";
/* $("form#imageUpload").on("submit", function (event) {

  event.preventDefault();

  $("div#spinner").show();
  // const form = document.getElementById("imageUpload");
  let imageFile = document.getElementById("uploadImage");
  let fileReader = imageFile.files[0];
  let data = new FormData();

  data.append("image", fileReader);
  console.log(data);

  $.ajax({
    url: API_URL,
    data: data,
    dataType: "multipart/form-data",
    method: "POST",
  }).done(function (resp) {
    console.log(resp);
  });
}); */

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
      console.error("Error uploading image:", error);
    });
});

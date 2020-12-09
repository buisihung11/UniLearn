// var request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/users");

// request.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
//   }
// };

// request.onload = function (res) {
//   console.log(res);
// };

// request.send();
var apikey = "3f7ec9eb-90cf-4250-96f1-d7d842f96b58";

function getData() {
  $.get("https://jsonplaceholder.typicode.com/users", function (res, status) {
    console.log(res);
    console.log(status);

    var listUser = $("ul#listUser");
    for (var index = 0; index < res.length; index++) {
      var user = res[index];
      var userLi = $("<li>");
      userLi.text(user.name);
      listUser.append(userLi);
    }
  });
}

function getDog() {
  $.get("https://dog.ceo/api/breeds/image/random", function (res, status) {
    console.log(res);
    var img = $("<img>");
    img.attr("src", res.message);
    $("#dogContainer").append(img);
  });
}
function getCat() {
  $.get(
    "https://api.thecatapi.com/v1/images/search" +
      "?breed-id=" +
      "beng" +
      "&api_key=" +
      apikey,
    function (res, status) {
      console.log(res);
      for (let index = 0; index < res.length; index++) {
        const cat = res[index];

        var img = $("<img>");
        img.attr("src", cat.url);
        $("#catContainer").append(img);
      }
    }
  );
}

$("#btnGetCat").click(function () {
  getCat();
});
$("#btnGetDog").click(function () {
  getDog();
});

$("#btnGetData").click(function () {
  getData();
});

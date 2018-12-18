// $(document).ready(function () {
//   $('*').click(function () {
//     var idd = $(this).attr('id');
//     var classdiv = $(this).attr('class');
//     alert('ID is: ' + idd + '\n Class: ' + classdiv);
//     //request and then send back
//   });
// });

$(document).ready(function () {
  $("button").click(function () {
    var bla = $("#doc").val();
    alert(bla)

    axios({
      method: 'post',
      url: 'https://mighty-meadow-61203.herokuapp.com/send',
      data: {
        firstName: $("#doc").val(),
        lastName: $("#notes").val()
      }
    }).then(function (res) {
      var obj = JSON.stringify(res)
      alert(obj)
    })

  });
});
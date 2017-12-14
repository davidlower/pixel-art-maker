$(document).ready(function() {


   function makeGrid() {

      var height = $("#input_height").val();
      var width = $("#input_width").val();

      for (var i = 0; i < height; i++) {
         $("#pixel_canvas").append("<tr></tr>");
      }

      $("tr").each(function() {
         for (var j = 0; j < width; j++) {
            $(this).append("<td class='inActive'></td>");
         }
      });

      $("td").on("click", function() {
         var color = $("#colorPicker").val();
         $(this).css("background-color", color);
      });
   }


   $("#sizePicker").on("submit", function(evt) {
      $("#pixel_canvas").empty();
      makeGrid();
      evt.preventDefault();
   });


});
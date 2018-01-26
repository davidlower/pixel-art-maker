$(document).ready(function() {

   $("td").click(function() {
      let color = $("#colorPicker").val();
      $(this).css("background-color", color);
   });

   function makeGrid() {

      let height = $("#input_height").val();
      let width = $("#input_width").val();

      for (var i = 0; i < height; i++) {
         $("#pixel_canvas").append("<tr></tr>");
      }

      $("tr").each(function() {
         for (var j = 0; j < width; j++) {
            $(this).append("<td></td>");
         }
      });

      $("td").click(function() {
         let color = $("#colorPicker").val();
         let defaultColor = $(this).css("background-color, #041a26");
         if
         $(this).css("background-color", color);
      });

   }

   $("#sizePicker").on("submit", function(evt) {
      $("#pixel_canvas").empty();
      makeGrid();
      evt.preventDefault();
   });

   $("td").click(function() {
      let color = $("#colorPicker").val();
      $(this).css("background-color", color);
   });

});
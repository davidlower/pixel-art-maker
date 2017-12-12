$(document).ready(function() {


   function makeGrid() {

      var height = $("#input_height").val();
      var width = $("#input_width").val();

      for (var i = 0; i < height; i++) {
         $("#pixel_canvas").append("<tr><tr>");
      }

      for (var j = 0; i < width; i++) {
         $("tr").each(function() {
            $(this).append("<td> </td>");
         });
      }
   }


   $("#sizePicker").on("submit", function(evt) {
      makeGrid();
      evt.preventDefault();
   });


});
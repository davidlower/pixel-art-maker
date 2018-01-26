$(document).ready(function() {

   // CODE FOR MAKING CUSTOM GRID
   function makeGrid() {

      let height = $("#input_height").val();
      let width = $("#input_width").val();

      for (var i = 0; i < height; i++) {
         $("#pixel_canvas").append("<tr></tr>");
      }

      $("tr").each(function() {
         for (var j = 0; j < width; j++) {
            $(this).append("<td class='.off'></td>");
         }
      });

      $("td").click(function() {
         let color = $("#colorPicker").val();
         let defaultColor = "#041a26";
         if ($(this).hasClass(".off")) {
            $(this).addClass(".on");
            $(this).toggleClass(".off");
            $(this).css("background-color", color);
         } else {
            $(this).removeClass(".on");
            $(this).toggleClass(".off");
            $(this).css("background-color", defaultColor);
         }
      });

   }

   // CALLING THE MAKEGRID FUNCTION TO MAKE A CUSTOM GRID
   $("#sizePicker").on("submit", function(evt) {
      $("#pixel_canvas").empty();
      makeGrid();
      evt.preventDefault();
   });


   // CODE FOR THE DEFAULT STARTING TABLE WITH CLICK ON/OFF COLOR
   $("td").click(function() {
      let color = $("#colorPicker").val();
      let defaultColor = "#041a26";
      if ($(this).hasClass(".off")) {
         $(this).addClass(".on");
         $(this).toggleClass(".off");
         $(this).css("background-color", defaultColor);
      } else {
         $(this).removeClass(".on");
         $(this).toggleClass(".off");
         $(this).css("background-color", color);
      }
   });

});
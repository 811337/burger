$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
  
    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
  
    // Send POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload updated list
        location.reload();
      }
    );
  });
  
  
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
  
    var newDevourState = {
      devoured: newDevour
    };
  
    // Send PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour status to", newDevour);
        // Reload updated list
        location.reload();
      }
    );
  });
  
});
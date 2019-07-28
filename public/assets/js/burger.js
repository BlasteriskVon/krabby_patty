$(function() {
    $(".devourMe").on("click", function(event) {
        var id = $(this).data("id");
        //find burger with this id and change its devoured Boolean to false then reload

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {devoured: 1}
        }).then(function() {
            console.log("burger devoured!");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger!");
            location.reload();
        });
    });
})
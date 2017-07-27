$(document).ready(function () {

    $("form").submit(function () {
        var first_name = $("#firstName").val();
        var last_name = $("#lastName").val();
        var emailID = $("#email").val();
        var contact = $("#contact").val();


        $("#user-details").append("<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + emailID + "</td><td>" + contact + "</td></tr>");

        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#contact").val("");

        return false;


    });

});

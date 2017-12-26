$(document).ready(function () {

    $("#1").hide();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();

    $("#update-survey").click(function () {

        var checked = $("#selection-form input:checked").length > 0;

        if (!checked) {
            $("#select-error").html("Please check at least one category.");
            $("#select-error").show();
            return false;
        }
        else {
            $("#select-error").hide();

            //Show and hide corresponding categories
            $("#selection-form input").each(function () {

                if ($(this).is(':checked')) {
                    console.log($(this).val());
                    $("#" + $(this).val()).show(200);
                }
                else {
                    $("#" + $(this).val()).hide(200);
                    //Get rid of all notes sections html for this cateogry if there is any
                    $("#" + $(this).val()).find('div.notes-section').html("");
                    $("#" + $(this).val()).find('div.notes-section').removeClass('has-error');
                }

            });
        }

    });

});
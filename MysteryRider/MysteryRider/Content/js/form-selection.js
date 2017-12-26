$(document).ready(function () {

    // $("#form-selection").hide();
    $("#form-select-error").hide();
    $("#select-error").hide();
    $("#mystery-rider-form").hide();
    $("#survey-dropdown").hide();
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

    $("#get-started").click(function () {
        var checked = $("#form-selection-form input:checked").length > 0;
        if (!checked) {
            // alert("Please check at least one category.");
            $("#form-select-error").html("Please check at least one category.");
            $("#form-select-error").show()
            return false;
        }
        else {
            var selectedIds = [];

            $("#form-selection-form input:checked").each(function () {
                selectedIds.push($(this).val());
            });

            $("#form-selection").hide();

            selectedIds.forEach(function (id) {
                $("#" + id).show(200);
            });

            $("#mystery-rider-form").show(200);
            $("#form-selection").html("");
            $("#survey-dropdown").show();

            //Add check marks to drop down menu
            $("#selection-form input").each(function () {
                $(this).prop("checked", false);
                if (selectedIds.indexOf($(this).val()) !== -1) {
                    $(this).prop("checked", true);
                }
            });

            return true;
        }
    });

});


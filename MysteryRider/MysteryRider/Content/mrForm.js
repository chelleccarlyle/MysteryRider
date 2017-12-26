var gatherData = function () {

    this.textbox1 = $("#textBox1").val();
    this.textbox2 = $("#textBox2").val();
}

$(document).ready(
    function () {

        var formData = gatherData();

        $("#btnSave").on("click", function () {

            $.ajax({
                datatype: "JSON",
             
                url: "/Utility/create",
                async: false,
                success: function (results) {

                },
                error: function (errormsg) {

                }




            });



        });

    });
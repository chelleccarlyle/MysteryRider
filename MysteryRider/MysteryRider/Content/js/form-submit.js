var getFormInputs = function() {

    // //Input
    // this.a1_01_input = $("[id='1.01-input']").val();
    // this.q1_02_input = $("[id='1.02-input']").val();
    // //Select
    // this.q1_03_input = $("[id='1.03-input']").find(":selected").text();
    // //Checkbox
    // var checked = [];
    // $("input[name='2.01']:checked").each(function() {
    //     checked.push($(this).val());
    // });
    // this.q2_02e_input = checked;
    // //Radio
    // this.q2_03a_input = $("input[name='2.03 a']:checked").val();


    var checked;
    var value = "";
    
    value = $("[id = '1.01-input']").val();
    this.q1_01_input = (value == null) ? "" : value;
    
    value = $("[id = '1.02-input']").val();
    this.q1_02_input = (value == null) ? "" : value;
    
    this.q1_03_input = $("[id = '1.03-input']").find(":selected").text();
    
    value = $("[id = '1.04-input']").val();
    this.q1_04_input = (value == null) ? "" : value;
    
    value = $("[id = '1.05-input']").val();
    this.q1_05_input = (value == null) ? "" : value;
    
    value = $("[id = '1.06-input']").val();
    this.q1_06_input = (value == null) ? "" : value;
    
    value = $("[id = '1.07-input']").val();
    this.q1_07_input = (value == null) ? "" : value;
    
    value = $("[id = '1.08-input']").val();
    this.q1_08_input = (value == null) ? "" : value;
    
    value = $("[id = '1.09-input']").val();
    this.q1_09_input = (value == null) ? "" : value;
    
    this.q1_1_input = $("[id = '1.1-input']").find(":selected").text();
    
    value = $("[id = '1.11-input']").val();
    this.q1_11_input = (value == null) ? "" : value;
    
    value = $("[id = '1.12-input']").val();
    this.q1_12_input = (value == null) ? "" : value;
    
    value = $("[id = '1.13-input']").val();
    this.q1_13_input = (value == null) ? "" : value;
    
    this.q1_14_input = $("[id = '1.14-input']").find(":selected").text();
    
    value = $("[id = '1.15-input']").val();
    this.q1_15_input = (value == null) ? "" : value;
    
    this.q1_16_input = $("[id = '1.16-input']").find(":selected").text();
    
    value = $("[id = '1.17-input']").val();
    this.q1_17_input = (value == null) ? "" : value;
    
    value = $("[id = '1.18-input']").val();
    this.q1_18_input = (value == null) ? "" : value;
    
    checked = [];
    $("input[name = '1.19']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q1_19_input = checked;
    
    checked = [];
    $("input[name = '2.01']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_01_input = checked;
    
    checked = [];
    $("input[name = '2.02 a']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02a_input = checked;
    
    checked = [];
    $("input[name = '2.02 b']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02b_input = checked;
    
    checked = [];
    $("input[name = '2.02 c']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02c_input = checked;
    
    checked = [];
    $("input[name = '2.02 d']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02d_input = checked;
    
    checked = [];
    $("input[name = '2.02 e']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02e_input = checked;
    
    checked = [];
    $("input[name = '2.02 f']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02f_input = checked;
    
    checked = [];
    $("input[name = '2.02 g']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02g_input = checked;
    
    checked = [];
    $("input[name = '2.02 h']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q2_02h_input = checked;
    
    value = $("input[name = '2.03 a']:checked").val();
    this.q2_03a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.03 b']:checked").val();
    this.q2_03b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.03 c']:checked").val();
    this.q2_03c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.03 d']:checked").val();
    this.q2_03d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.04']:checked").val();
    this.q2_04_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.05 a']:checked").val();
    this.q2_05a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.05 b']:checked").val();
    this.q2_05b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.05 c']:checked").val();
    this.q2_05c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.06 a']:checked").val();
    this.q2_06a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.06 b']:checked").val();
    this.q2_06b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.06 c']:checked").val();
    this.q2_06c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.06 d']:checked").val();
    this.q2_06d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.06 e']:checked").val();
    this.q2_06e_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.06 f']:checked").val();
    this.q2_06f_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.7 a']:checked").val();
    this.q2_7a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.7 b']:checked").val();
    this.q2_7b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.7 c']:checked").val();
    this.q2_7c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.7 d']:checked").val();
    this.q2_7d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.7 e']:checked").val();
    this.q2_7e_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.8 a']:checked").val();
    this.q2_8a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.8 b']:checked").val();
    this.q2_8b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.8 c']:checked").val();
    this.q2_8c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.8 d']:checked").val();
    this.q2_8d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.8 e']:checked").val();
    this.q2_8e_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.9 a']:checked").val();
    this.q2_9a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.9 b']:checked").val();
    this.q2_9b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.9 c']:checked").val();
    this.q2_9c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.9 d']:checked").val();
    this.q2_9d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.9 e']:checked").val();
    this.q2_9e_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.9 f']:checked").val();
    this.q2_9f_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.10 a']:checked").val();
    this.q2_10a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.10 b']:checked").val();
    this.q2_10b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.10 c']:checked").val();
    this.q2_10c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.10 d']:checked").val();
    this.q2_10d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.11 a']:checked").val();
    this.q2_11a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.11 b']:checked").val();
    this.q2_11b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.11 c']:checked").val();
    this.q2_11c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.11 d']:checked").val();
    this.q2_11d_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.11 e']:checked").val();
    this.q2_11e_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.12 a']:checked").val();
    this.q2_12a_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.12 b']:checked").val();
    this.q2_12b_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.12 c ']:checked").val();
    this.q2_12c_input = (value == null) ? "" : value;
    
    value = $("input[name = '2.13']:checked").val();
    this.q2_13_input = (value == null) ? "" : value;
    
    value = $("[id = '3.01-input']").val();
    this.q3_01_input = (value == null) ? "" : value;
    
    value = $("[id = '3.02-input']").val();
    this.q3_02_input = (value == null) ? "" : value;
    
    checked = [];
    $("input[name = '3.03']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q3_03_input = checked;
    
    value = $("input[name = '3.04']:checked").val();
    this.q3_04_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5 a']:checked").val();
    this.q3_5a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5 b']:checked").val();
    this.q3_5b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5 d']:checked").val();
    this.q3_5d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5 e']:checked").val();
    this.q3_5e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5 f']:checked").val();
    this.q3_5f_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5 g ']:checked").val();
    this.q3_5g_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.5c']:checked").val();
    this.q3_5c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.6 a']:checked").val();
    this.q3_6a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.6 a']:checked").val();
    this.q3_6a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.6 b']:checked").val();
    this.q3_6b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.6 c']:checked").val();
    this.q3_6c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.6 d']:checked").val();
    this.q3_6d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.6 e']:checked").val();
    this.q3_6e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.7  b']:checked").val();
    this.q3_7b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.7  c']:checked").val();
    this.q3_7c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.7 a']:checked").val();
    this.q3_7a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.08']:checked").val();
    this.q3_08_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.09']:checked").val();
    this.q3_09_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.10 a']:checked").val();
    this.q3_10a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.10 b']:checked").val();
    this.q3_10b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.10 c']:checked").val();
    this.q3_10c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.10 d']:checked").val();
    this.q3_10d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.10 e']:checked").val();
    this.q3_10e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.10 f']:checked").val();
    this.q3_10f_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.11 a']:checked").val();
    this.q3_11a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.11 b']:checked").val();
    this.q3_11b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.11 c']:checked").val();
    this.q3_11c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.11 d']:checked").val();
    this.q3_11d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.11 e']:checked").val();
    this.q3_11e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.12 a']:checked").val();
    this.q3_12a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.12 b']:checked").val();
    this.q3_12b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.12 c']:checked").val();
    this.q3_12c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.12 d']:checked").val();
    this.q3_12d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.12 e']:checked").val();
    this.q3_12e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.13 a']:checked").val();
    this.q3_13a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.13 b']:checked").val();
    this.q3_13b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.13 c']:checked").val();
    this.q3_13c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.13 d']:checked").val();
    this.q3_13d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.13 e']:checked").val();
    this.q3_13e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.13 f']:checked").val();
    this.q3_13f_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.14 a']:checked").val();
    this.q3_14a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.14 b']:checked").val();
    this.q3_14b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.14 c']:checked").val();
    this.q3_14c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.14 d']:checked").val();
    this.q3_14d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.15 a']:checked").val();
    this.q3_15a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.15 b']:checked").val();
    this.q3_15b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.15 c']:checked").val();
    this.q3_15c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.15 d']:checked").val();
    this.q3_15d_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.15 e']:checked").val();
    this.q3_15e_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.16 a']:checked").val();
    this.q3_16a_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.16 b']:checked").val();
    this.q3_16b_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.16 c ']:checked").val();
    this.q3_16c_input = (value == null) ? "" : value;
    
    value = $("input[name = '3.17']:checked").val();
    this.q3_17_input = (value == null) ? "" : value;
    
    value = $("[id = '3.18-input']").val();
    this.q3_18_input = (value == null) ? "" : value;
    
    value = $("[id = '3.19-input']").val();
    this.q3_19_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.1 a']:checked").val();
    this.q4_1a_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.1 b']:checked").val();
    this.q4_1b_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.1 c']:checked").val();
    this.q4_1c_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.1 d']:checked").val();
    this.q4_1d_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.1 e']:checked").val();
    this.q4_1e_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.2 a']:checked").val();
    this.q4_2a_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.2 b ']:checked").val();
    this.q4_2b_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.2 c']:checked").val();
    this.q4_2c_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.2 d']:checked").val();
    this.q4_2d_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.2 e ']:checked").val();
    this.q4_2e_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.3 a']:checked").val();
    this.q4_3a_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.3 b ']:checked").val();
    this.q4_3b_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.3 c']:checked").val();
    this.q4_3c_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.3 d']:checked").val();
    this.q4_3d_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.3 e ']:checked").val();
    this.q4_3e_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.4 a']:checked").val();
    this.q4_4a_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.4 b ']:checked").val();
    this.q4_4b_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.4 c']:checked").val();
    this.q4_4c_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.4 d']:checked").val();
    this.q4_4d_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.4 e ']:checked").val();
    this.q4_4e_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.5 a']:checked").val();
    this.q4_5a_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.5 b ']:checked").val();
    this.q4_5b_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.5 c']:checked").val();
    this.q4_5c_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.5 d']:checked").val();
    this.q4_5d_input = (value == null) ? "" : value;
    
    value = $("input[name = '4.5 e ']:checked").val();
    this.q4_5e_input = (value == null) ? "" : value;
    
    value = $("input[name = '5.01']:checked").val();
    this.q5_01_input = (value == null) ? "" : value;
    
    value = $("input[name = '5.02']:checked").val();
    this.q5_02_input = (value == null) ? "" : value;
    
    value = $("input[name = '5.03']:checked").val();
    this.q5_03_input = (value == null) ? "" : value;
    
    value = $("[id = '6.01-input']").val();
    this.q6_01_input = (value == null) ? "" : value;
    
    this.q7_01_input = $("[id = '7.01-input']").find(":selected").text();
    
    this.q7_02_input = $("[id = '7.02-input']").find(":selected").text();
    
    value = $("[id = '7.03-input']").val();
    this.q7_03_input = (value == null) ? "" : value;
    
    value = $("[id = '7.04-input']").val();
    this.q7_04_input = (value == null) ? "" : value;
    
    value = $("[id = '7.05-input']").val();
    this.q7_05_input = (value == null) ? "" : value;
    
    value = $("input[name = '7.06']:checked").val();
    this.q7_06_input = (value == null) ? "" : value;
    
    value = $("input[name = '7.07']:checked").val();
    this.q7_07_input = (value == null) ? "" : value;
    
    value = $("[id = '7.08-input']").val();
    this.q7_08_input = (value == null) ? "" : value;
    
    value = $("[id = '7.09-input']").val();
    this.q7_09_input = (value == null) ? "" : value;
    
    value = $("[id = '7.1-input']").val();
    this.q7_1_input = (value == null) ? "" : value;
    
    value = $("[id = '7.11-input']").val();
    this.q7_11_input = (value == null) ? "" : value;
    
    value = $("input[name = '7.12']:checked").val();
    this.q7_12_input = (value == null) ? "" : value;
    
    value = $("[id = '7.13-input']").val();
    this.q7_13_input = (value == null) ? "" : value;
    
    value = $("[id = '7.14-input']").val();
    this.q7_14_input = (value == null) ? "" : value;
    
    value = $("[id = '7.15-input']").val();
    this.q7_15_input = (value == null) ? "" : value;
    
    value = $("input[name = '7.16']:checked").val();
    this.q7_16_input = (value == null) ? "" : value;
    
    value = $("input[name = '7.18']:checked").val();
    this.q7_18_input = (value == null) ? "" : value;
    
    checked = [];
    $("input[name = '7.19']:checked").each(function() {
       checked.push($(this).val());
    });
    this.q7_19_input = checked;
    
    value = $("input[name = '7.2']:checked").val();
    this.q7_2_input = (value == null) ? "" : value;    


    //Refer to object being created for storing notes values
    var self = this;

    //Store notes values
    //Get all the divs with class notes-section
    $(".notes-section").has('textarea').each(function() {

        var property = $(this).attr("id").replace(".", "_").replace(" ", "");
        var value = $(this).children("textarea").first().val(); //Get text value

        self[property] = value;
    });
    $(".notes-section").not(":has(textarea)").each(function() {

        var property = $(this).attr("id").replace(".", "_").replace(" ", "");

        self[property] = "";
    });

    //Add checked categories property: Store the values corresponding to each checked category
    this.selected = [];

    $("#mystery-rider-form").find("div.category").filter(function () {
        return $(this).is(":visible");
    }).each(function () {
        self.selected.push($(this).attr("id"));
    });

    return this;

}


$(document).ready(function () {

    $("#save-and-submit").on("click", function(e) {

        //Check validation for required textareas
        var isValid = true;

        var emptyTextareas = $('textarea[required]').filter(function () {
            return $(this).val() == "";
        });

        var filledTextareas = $('textarea[required]').filter(function () {
            return $(this).val() != "";
        });

        //Take out textarea error paragraphs if they have one
        filledTextareas.each(function () {
            var div = $(this).parent().closest('div');
            div.find('.textarea-error').remove();
            div.removeClass("has-error");
        });



        //There are required textareas not filled out
        if (emptyTextareas.length > 0) {

            isValid = false;

            emptyTextareas.each(function () {

                var div = $(this).parent().closest('div');

                $(this).addClass("is-invalid");
                div.addClass("has-error");

                if (div.find('.textarea-error').length == 0) {
                    div.append('<p style="color:red; margin-top:5px;" class="textarea-error">Please fill out the required text.</p>');
                }
            });

            //Add validation error text below the submit button
            if ($("#mystery-rider-form").find('#form-error').length == 0) {
                $("#mystery-rider-form").append('<p style="color:red; margin-top:5px;" id="form-error">Please fill out the required inputs above.</p>');
            }

        }
        else {
            //Take out validation text error below submit button
            $("#mystery-rider-form").find('#form-error').remove();
        }

        if (isValid) {

            console.log("Form is valid");
            e.preventDefault();

            var inputData = new getFormInputs();
            inputData = JSON.stringify(inputData);
            console.log(inputData);

            $.ajax({

                async: "true",
                url: $("#mystery-rider-form").attr("action"),
                datatype: "JSON",
                type: "POST",
                data: { action: "saveData", data: inputData },
                success: function (url) {
                    // here is the script you are firing when request is completed
                    console.log("Successfully added");
                    window.location = url;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Here is the error message");
                }

            }).done(function (data) {
                console.log("Finished ajax");
            });

        }
        else {
            console.log("Form is not valid");
        }

    });
 
});
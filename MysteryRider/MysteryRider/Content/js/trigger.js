

//Handles trigger for each checkbox of the form
$(document).ready(function () {

    //Hide all notes sections
    //$(".notes-section").hide();
    
    $("[id='2.01:No aid used']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id=' 2.11']").show(200);
          $("[id='4']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id=' 2.11']").hide(200);
          $("[id='4']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Other (non device)']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\" required></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Power wheelchair']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.06 b']").show(200);
          $("[id='2.06 c']").show(200);
          $("[id='2.06d']").show(200);
          $("[id='2.06e']").show(200);
          $("[id='2.06f']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.06 b']").hide(200);
          $("[id='2.06 c']").hide(200);
          $("[id='2.06d']").hide(200);
          $("[id='2.06e']").hide(200);
          $("[id='2.06f']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Scooter']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.06']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.06']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Walker']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.1']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.1']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Cane']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Visually Impaired Cane']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Service Animal']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.09']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.09']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Hearing Impairment']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Personal Care Attendant']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Crutches']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Stroller/pediatric wheelchair']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.06']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.06']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Segway']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.06 b']").show(200);
          $("[id='2.06 c']").show(200);
          $("[id='2.06d']").show(200);
          $("[id='2.06e']").show(200);
          $("[id='2.06f']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.06 b']").hide(200);
          $("[id='2.06 c']").hide(200);
          $("[id='2.06d']").hide(200);
          $("[id='2.06e']").hide(200);
          $("[id='2.06f']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:3-wheel bicycle (Metro approved)']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.06']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.06']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Hidden Disability']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.01:Manual wheelchair']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.05']").show(200);
          $("[id='2.06 b']").show(200);
          $("[id='2.06 c']").show(200);
          $("[id='2.06d']").show(200);
          $("[id='2.06e']").show(200);
          $("[id='2.06f']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").show(200);
          $("[id='2.11']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='2.01_notes']").html("    <label for=\"2.01_text\">Notes:</label><textarea class=\"form-control\" id=\"2.01_text\" rows=\"3\"></textarea>");
        $("[id ='2.01_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.05']").hide(200);
          $("[id='2.06 b']").hide(200);
          $("[id='2.06 c']").hide(200);
          $("[id='2.06d']").hide(200);
          $("[id='2.06e']").hide(200);
          $("[id='2.06f']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='2.01_notes']").hide(200);
        $("[id ='2.01_notes']").html("");
      }
   });
   
   $("[id='2.02 a:Unsuccessful boarding (pass-up)']").change(function () {
      if (this.checked) {
          $("[id='2.02 g']").show(200);
          $("[id='2.12']").show(200);
        $("[id ='2.02 a_notes']").html("    <label for=\"2.02 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 a_notes']").show(200);
      }
      else {
          $("[id='2.02 g']").hide(200);
          $("[id='2.12']").hide(200);
        $("[id ='2.02 a_notes']").hide(200);
        $("[id ='2.02 a_notes']").html("");
      }
   });
   
   $("[id='2.02 a:Surveyor boarded ']").change(function () {
      if (this.checked) {
          $("[id='2.02 g']").hide(200);
        $("[id ='2.02 a_notes']").html("    <label for=\"2.02 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 a_notes']").show(200);
      }
      else {
          $("[id='2.02 g']").show(200);
        $("[id ='2.02 a_notes']").hide(200);
        $("[id ='2.02 a_notes']").html("");
      }
   });
   
   $("[id='2.02 b:Operator']").change(function () {
      if (this.checked) {
        $("[id ='2.02 b_notes']").html("    <label for=\"2.02 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 b_notes']").show(200);
      }
      else {
        $("[id ='2.02 b_notes']").hide(200);
        $("[id ='2.02 b_notes']").html("");
      }
   });
   
   $("[id='2.02 b:Surveyor']").change(function () {
      if (this.checked) {
        $("[id ='2.02 b_notes']").html("    <label for=\"2.02 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 b_notes']").show(200);
      }
      else {
        $("[id ='2.02 b_notes']").hide(200);
        $("[id ='2.02 b_notes']").html("");
      }
   });
   
   $("[id='2.02 b:Other']").change(function () {
      if (this.checked) {
        $("[id ='2.02 b_notes']").html("    <label for=\"2.02 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 b_notes']").show(200);
      }
      else {
        $("[id ='2.02 b_notes']").hide(200);
        $("[id ='2.02 b_notes']").html("");
      }
   });
   
   $("[id='2.02 c:Unable to attempt priority boarding']").change(function () {
      if (this.checked) {
          $("[id='2.02 g']").hide(200);
        $("[id ='2.02 c_notes']").html("    <label for=\"2.02 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 c_notes']").show(200);
      }
      else {
          $("[id='2.02 g']").show(200);
        $("[id ='2.02 c_notes']").hide(200);
        $("[id ='2.02 c_notes']").html("");
      }
   });
   
   $("[id='2.02 c:Other']").change(function () {
      if (this.checked) {
          $("[id='2.02 g']").hide(200);
        $("[id ='2.02 c_notes']").html("    <label for=\"2.02 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 c_notes']").show(200);
      }
      else {
          $("[id='2.02 g']").show(200);
        $("[id ='2.02 c_notes']").hide(200);
        $("[id ='2.02 c_notes']").html("");
      }
   });
   
   $("[id='2.02 c:Did not attempt to allow priority boarding']").change(function () {
      if (this.checked) {
          $("[id='2.02 g']").hide(200);
        $("[id ='2.02 c_notes']").html("    <label for=\"2.02 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 c_notes']").show(200);
      }
      else {
          $("[id='2.02 g']").show(200);
        $("[id ='2.02 c_notes']").hide(200);
        $("[id ='2.02 c_notes']").html("");
      }
   });
   
   $("[id='2.02 c:Attempted to allow boarding first']").change(function () {
      if (this.checked) {
          $("[id='2.02 g']").hide(200);
        $("[id ='2.02 c_notes']").html("    <label for=\"2.02 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 c_notes']").show(200);
      }
      else {
          $("[id='2.02 g']").show(200);
        $("[id ='2.02 c_notes']").hide(200);
        $("[id ='2.02 c_notes']").html("");
      }
   });
   
   $("[id='2.02 d:Safe bus placement']").change(function () {
      if (this.checked) {
        $("[id ='2.02 d_notes']").html("    <label for=\"2.02 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 d_notes']").show(200);
      }
      else {
        $("[id ='2.02 d_notes']").hide(200);
        $("[id ='2.02 d_notes']").html("");
      }
   });
   
   $("[id='2.02 d:Unsafe bus placement']").change(function () {
      if (this.checked) {
        $("[id ='2.02 d_notes']").html("    <label for=\"2.02 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 d_notes']").show(200);
      }
      else {
        $("[id ='2.02 d_notes']").hide(200);
        $("[id ='2.02 d_notes']").html("");
      }
   });
   
   $("[id='2.02 d:Fly-by, Operator did not stop ']").change(function () {
      if (this.checked) {
          $("[id='2.02 d']").hide(200);
          $("[id='2.02 e']").hide(200);
          $("[id='2.02 f']").hide(200);
        $("[id ='2.02 d_notes']").html("    <label for=\"2.02 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 d_notes']").show(200);
      }
      else {
          $("[id='2.02 d']").show(200);
          $("[id='2.02 e']").show(200);
          $("[id='2.02 f']").show(200);
        $("[id ='2.02 d_notes']").hide(200);
        $("[id ='2.02 d_notes']").html("");
      }
   });
   
   $("[id='2.02 e: Successfully deployed upon request']").change(function () {
      if (this.checked) {
        $("[id ='2.02 e_notes']").html("    <label for=\"2.02 e_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 e_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 e_notes']").show(200);
      }
      else {
        $("[id ='2.02 e_notes']").hide(200);
        $("[id ='2.02 e_notes']").html("");
      }
   });
   
   $("[id='2.02 e: Deployed unsolicited']").change(function () {
      if (this.checked) {
        $("[id ='2.02 e_notes']").html("    <label for=\"2.02 e_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 e_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 e_notes']").show(200);
      }
      else {
        $("[id ='2.02 e_notes']").hide(200);
        $("[id ='2.02 e_notes']").html("");
      }
   });
   
   $("[id='2.02 e:N/A - Ramp was not needed']").change(function () {
      if (this.checked) {
        $("[id ='2.02 e_notes']").html("    <label for=\"2.02 e_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 e_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 e_notes']").show(200);
      }
      else {
        $("[id ='2.02 e_notes']").hide(200);
        $("[id ='2.02 e_notes']").html("");
      }
   });
   
   $("[id='2.02 e: Operator hesitated - ramp deployed']").change(function () {
      if (this.checked) {
        $("[id ='2.02 e_notes']").html("    <label for=\"2.02 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 e_notes']").show(200);
      }
      else {
        $("[id ='2.02 e_notes']").hide(200);
        $("[id ='2.02 e_notes']").html("");
      }
   });
   
   $("[id='2.02 e: Ramp not deployed, Other issue']").change(function () {
      if (this.checked) {
        $("[id ='2.02 e_notes']").html("    <label for=\"2.02 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 e_notes']").show(200);
      }
      else {
        $("[id ='2.02 e_notes']").hide(200);
        $("[id ='2.02 e_notes']").html("");
      }
   });
   
   $("[id='2.02 e: Request to deploy denied']").change(function () {
      if (this.checked) {
        $("[id ='2.02 e_notes']").html("    <label for=\"2.02 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 e_notes']").show(200);
      }
      else {
        $("[id ='2.02 e_notes']").hide(200);
        $("[id ='2.02 e_notes']").html("");
      }
   });
   
   $("[id='2.02 f:N/A - Kneeling was not needed']").change(function () {
      if (this.checked) {
        $("[id ='2.02 f_notes']").html("    <label for=\"2.02 f_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 f_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 f_notes']").show(200);
      }
      else {
        $("[id ='2.02 f_notes']").hide(200);
        $("[id ='2.02 f_notes']").html("");
      }
   });
   
   $("[id='2.02 f:Bus knelt unsolicited']").change(function () {
      if (this.checked) {
        $("[id ='2.02 f_notes']").html("    <label for=\"2.02 f_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 f_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 f_notes']").show(200);
      }
      else {
        $("[id ='2.02 f_notes']").hide(200);
        $("[id ='2.02 f_notes']").html("");
      }
   });
   
   $("[id='2.02 f:Knelt upon request']").change(function () {
      if (this.checked) {
        $("[id ='2.02 f_notes']").html("    <label for=\"2.02 f_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 f_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 f_notes']").show(200);
      }
      else {
        $("[id ='2.02 f_notes']").hide(200);
        $("[id ='2.02 f_notes']").html("");
      }
   });
   
   $("[id='2.02 f:Operator hesitated - bus knelt']").change(function () {
      if (this.checked) {
        $("[id ='2.02 f_notes']").html("    <label for=\"2.02 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 f_notes']").show(200);
      }
      else {
        $("[id ='2.02 f_notes']").hide(200);
        $("[id ='2.02 f_notes']").html("");
      }
   });
   
   $("[id='2.02 f:Request to kneel bus denied']").change(function () {
      if (this.checked) {
        $("[id ='2.02 f_notes']").html("    <label for=\"2.02 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 f_notes']").show(200);
      }
      else {
        $("[id ='2.02 f_notes']").hide(200);
        $("[id ='2.02 f_notes']").html("");
      }
   });
   
   $("[id='2.02 f:Bus not knelt, Other issue']").change(function () {
      if (this.checked) {
        $("[id ='2.02 f_notes']").html("    <label for=\"2.02 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 f_notes']").show(200);
      }
      else {
        $("[id ='2.02 f_notes']").hide(200);
        $("[id ='2.02 f_notes']").html("");
      }
   });
   
   $("[id='2.02 g:No assistance needed / requested']").change(function () {
      if (this.checked) {
        $("[id ='2.02 g_notes']").html("    <label for=\"2.02 g_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 g_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 g_notes']").show(200);
      }
      else {
        $("[id ='2.02 g_notes']").hide(200);
        $("[id ='2.02 g_notes']").html("");
      }
   });
   
   $("[id='2.02 g:Request to assist denied']").change(function () {
      if (this.checked) {
        $("[id ='2.02 g_notes']").html("    <label for=\"2.02 g_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 g_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 g_notes']").show(200);
      }
      else {
        $("[id ='2.02 g_notes']").hide(200);
        $("[id ='2.02 g_notes']").html("");
      }
   });
   
   $("[id='2.02 g:PCA provided assistance']").change(function () {
      if (this.checked) {
        $("[id ='2.02 g_notes']").html("    <label for=\"2.02 g_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 g_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 g_notes']").show(200);
      }
      else {
        $("[id ='2.02 g_notes']").hide(200);
        $("[id ='2.02 g_notes']").html("");
      }
   });
   
   $("[id='2.02 g:Provided assistance unsolicited']").change(function () {
      if (this.checked) {
        $("[id ='2.02 g_notes']").html("    <label for=\"2.02 g_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 g_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 g_notes']").show(200);
      }
      else {
        $("[id ='2.02 g_notes']").hide(200);
        $("[id ='2.02 g_notes']").html("");
      }
   });
   
   $("[id='2.02 g:Requested assistance provided']").change(function () {
      if (this.checked) {
        $("[id ='2.02 g_notes']").html("    <label for=\"2.02 g_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 g_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 g_notes']").show(200);
      }
      else {
        $("[id ='2.02 g_notes']").hide(200);
        $("[id ='2.02 g_notes']").html("");
      }
   });
   
   $("[id='2.02 g:Operator hesitated - assistance provided']").change(function () {
      if (this.checked) {
        $("[id ='2.02 g_notes']").html("    <label for=\"2.02 g_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.02 g_text\" rows=\"3\" required></textarea>");
        $("[id ='2.02 g_notes']").show(200);
      }
      else {
        $("[id ='2.02 g_notes']").hide(200);
        $("[id ='2.02 g_notes']").html("");
      }
   });
   
   $("[id='2.02 h:Operator asked Surveyor for desired stop']").change(function () {
      if (this.checked) {
        $("[id ='2.02 h_notes']").html("    <label for=\"2.02 h_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 h_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 h_notes']").show(200);
      }
      else {
        $("[id ='2.02 h_notes']").hide(200);
        $("[id ='2.02 h_notes']").html("");
      }
   });
   
   $("[id='2.02 h:Did not ask surveyor for desired stop']").change(function () {
      if (this.checked) {
        $("[id ='2.02 h_notes']").html("    <label for=\"2.02 h_text\">Notes:</label><textarea class=\"form-control\" id=\"2.02 h_text\" rows=\"3\"></textarea>");
        $("[id ='2.02 h_notes']").show(200);
      }
      else {
        $("[id ='2.02 h_notes']").hide(200);
        $("[id ='2.02 h_notes']").html("");
      }
   });
   
   $("input[name='2.03 a']").change(function () {
      if ($("[id='2.03 a:Space available at arrival']").is(":checked")) {
        $("[id ='2.03 a_notes']").html("    <label for=\"2.03 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.03 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.03 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 a']").change(function () {
      if ($("[id='2.03 a:Unable to Determine']").is(":checked")) {
        $("[id ='2.03 a_notes']").html("    <label for=\"2.03 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 a']").change(function () {
      if ($("[id='2.03 a:No space available at arrival']").is(":checked")) {
        $("[id ='2.03 a_notes']").html("    <label for=\"2.03 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 b']").change(function () {
      if ($("[id='2.03 b:Other (packages, stroller, folded walker…)']").is(":checked")) {
        $("[id ='2.03 b_notes']").html("    <label for=\"2.03 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 b']").change(function () {
      if ($("[id='2.03 b:Customers seated in securement areas']").is(":checked")) {
        $("[id ='2.03 b_notes']").html("    <label for=\"2.03 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 b']").change(function () {
      if ($("[id='2.03 b:One mobility aid present']").is(":checked")) {
        $("[id ='2.03 b_notes']").html("    <label for=\"2.03 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 b']").change(function () {
      if ($("[id='2.03 b:Two mobility aids present']").is(":checked")) {
        $("[id ='2.03 b_notes']").html("    <label for=\"2.03 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 b']").change(function () {
      if ($("[id='2.03 b:Unable to Determine']").is(":checked")) {
        $("[id ='2.03 b_notes']").html("    <label for=\"2.03 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 c']").change(function () {
      if ($("[id='2.03 c:Attempt to clear unnecessary']").is(":checked")) {
        $("[id ='2.03 c_notes']").html("    <label for=\"2.03 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 c']").change(function () {
      if ($("[id='2.03 c:Attempt to clear made']").is(":checked")) {
        $("[id ='2.03 c_notes']").html("    <label for=\"2.03 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.03 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.03 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 c']").change(function () {
      if ($("[id='2.03 c:No attempt to clear made']").is(":checked")) {
        $("[id ='2.03 c_notes']").html("    <label for=\"2.03 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 c']").change(function () {
      if ($("[id='2.03 c:Unable to Determine']").is(":checked")) {
        $("[id ='2.03 c_notes']").html("    <label for=\"2.03 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 d']").change(function () {
      if ($("[id='2.03 d:Operator']").is(":checked")) {
        $("[id ='2.03 d_notes']").html("    <label for=\"2.03 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 d']").change(function () {
      if ($("[id='2.03 d:Surveyor']").is(":checked")) {
        $("[id ='2.03 d_notes']").html("    <label for=\"2.03 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.03 d']").change(function () {
      if ($("[id='2.03 d:Other']").is(":checked")) {
        $("[id ='2.03 d_notes']").html("    <label for=\"2.03 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.03 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.03 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.04']").change(function () {
      if ($("[id='2.04:Rear facing']").is(":checked")) {
          $("[id='2.08']").show(200);
          $("[id='2.06']").hide(200);
      }
      else {
          $("[id='2.08']").hide(200);
          $("[id='2.06']").show(200);
      }
   });
   
   $("input[name='2.04']").change(function () {
      if ($("[id='2.04:Front facing']").is(":checked")) {
          $("[id='2.06']").show(200);
          $("[id='2.07']").show(200);
          $("[id='2.08']").hide(200);
      }
      else {
          $("[id='2.06']").hide(200);
          $("[id='2.07']").hide(200);
          $("[id='2.08']").show(200);
      }
   });
   
   $("input[name='2.05 a']").change(function () {
      if ($("[id='2.05 a: Seat already folded']").is(":checked")) {
        $("[id ='2.05 a_notes']").html("    <label for=\"2.05 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 a']").change(function () {
      if ($("[id='2.05 a:Operator lifted folding seat']").is(":checked")) {
        $("[id ='2.05 a_notes']").html("    <label for=\"2.05 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 a']").change(function () {
      if ($("[id='2.05 a:Customer or other passenger lifted folding seats']").is(":checked")) {
        $("[id ='2.05 a_notes']").html("    <label for=\"2.05 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 a']").change(function () {
      if ($("[id='2.05 a:N/A (walker area available)']").is(":checked")) {
        $("[id ='2.05 a_notes']").html("    <label for=\"2.05 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 b']").change(function () {
      if ($("[id='2.05 b:Prepared lap/shoulder belts']").is(":checked")) {
        $("[id ='2.05 b_notes']").html("    <label for=\"2.05 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 b']").change(function () {
      if ($("[id='2.05 b:Did not prepare  lap/shoulder belts']").is(":checked")) {
        $("[id ='2.05 b_notes']").html("    <label for=\"2.05 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 c']").change(function () {
      if ($("[id='2.05 c:N/A (no q\\'pod)']").is(":checked")) {
        $("[id ='2.05 c_notes']").html("    <label for=\"2.05 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 c']").change(function () {
      if ($("[id='2.05 c:Rear tie-downs prepared']").is(":checked")) {
        $("[id ='2.05 c_notes']").html("    <label for=\"2.05 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.05 c']").change(function () {
      if ($("[id='2.05 c:Did not prepare rear tie downs']").is(":checked")) {
        $("[id ='2.05 c_notes']").html("    <label for=\"2.05 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.05 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.05 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 a']").change(function () {
      if ($("[id='2.06 a:Customer transferred to fixed seat unsolicited']").is(":checked")) {
        $("[id ='2.06 a_notes']").html("    <label for=\"2.06 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 a']").change(function () {
      if ($("[id='2.06 a:Operator requested customer to transfer to fixed seat']").is(":checked")) {
        $("[id ='2.06 a_notes']").html("    <label for=\"2.06 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 a']").change(function () {
      if ($("[id='2.06 a:No request to transfer was made']").is(":checked")) {
        $("[id ='2.06 a_notes']").html("    <label for=\"2.06 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 b']").change(function () {
      if ($("[id='2.06 b:Combined offer for WC & Lap/Shoulder Belts']").is(":checked")) {
        $("[id ='2.06 b_notes']").html("    <label for=\"2.06 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 b']").change(function () {
      if ($("[id='2.06 b:Securement clearly offered ']").is(":checked")) {
        $("[id ='2.06 b_notes']").html("    <label for=\"2.06 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 b']").change(function () {
      if ($("[id='2.06 b:No/unclear offer of securement made']").is(":checked")) {
        $("[id ='2.06 b_notes']").html("    <label for=\"2.06 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 c']").change(function () {
      if ($("[id='2.06 c:No/improper gestures used']").is(":checked")) {
        $("[id ='2.06 c_notes']").html("    <label for=\"2.06 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 c']").change(function () {
      if ($("[id='2.06 c:Proper gestures used with offer']").is(":checked")) {
        $("[id ='2.06 c_notes']").html("    <label for=\"2.06 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 d']").change(function () {
      if ($("[id='2.06 d:Securement accepted']").is(":checked")) {
        $("[id ='2.06 d_notes']").html("    <label for=\"2.06 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 d']").change(function () {
      if ($("[id='2.06 d:Did not accept securement']").is(":checked")) {
        $("[id ='2.06 d_notes']").html("    <label for=\"2.06 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 e']").change(function () {
      if ($("[id='2.06 e: Full securement ']").is(":checked")) {
        $("[id ='2.06 e_notes']").html("    <label for=\"2.06 e_text\">Notes:</label><textarea class=\"form-control\" id=\"2.06 e_text\" rows=\"3\"></textarea>");
        $("[id ='2.06 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 e']").change(function () {
      if ($("[id='2.06 e:Partial/no securement']").is(":checked")) {
        $("[id ='2.06 e_notes']").html("    <label for=\"2.06 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 f']").change(function () {
      if ($("[id='2.06 f:Operator ']").is(":checked")) {
        $("[id ='2.06 f_notes']").html("    <label for=\"2.06 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 f']").change(function () {
      if ($("[id='2.06 f:Surveyor']").is(":checked")) {
        $("[id ='2.06 f_notes']").html("    <label for=\"2.06 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.06 f']").change(function () {
      if ($("[id='2.06 f:Other']").is(":checked")) {
        $("[id ='2.06 f_notes']").html("    <label for=\"2.06 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.06 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.06 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 a']").change(function () {
      if ($("[id='2.7 a:Securement clearly offered ']").is(":checked")) {
        $("[id ='2.7 a_notes']").html("    <label for=\"2.7 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 a']").change(function () {
      if ($("[id='2.7 a:No/unclear offer made']").is(":checked")) {
        $("[id ='2.7 a_notes']").html("    <label for=\"2.7 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 b']").change(function () {
      if ($("[id='2.7 b:Hand gestures used with offer']").is(":checked")) {
        $("[id ='2.7 b_notes']").html("    <label for=\"2.7 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 b']").change(function () {
      if ($("[id='2.7 b:No/unclear hand gestures not used']").is(":checked")) {
        $("[id ='2.7 b_notes']").html("    <label for=\"2.7 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 c']").change(function () {
      if ($("[id='2.7 c:Securement accepted']").is(":checked")) {
        $("[id ='2.7 c_notes']").html("    <label for=\"2.7 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 c']").change(function () {
      if ($("[id='2.7 c:Did not accept securement']").is(":checked")) {
        $("[id ='2.7 c_notes']").html("    <label for=\"2.7 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 d']").change(function () {
      if ($("[id='2.7 d: Both belts secured']").is(":checked")) {
        $("[id ='2.7 d_notes']").html("    <label for=\"2.7 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 d']").change(function () {
      if ($("[id='2.7 d: Unsuccessful securement']").is(":checked")) {
        $("[id ='2.7 d_notes']").html("    <label for=\"2.7 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.7 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.7 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 d']").change(function () {
      if ($("[id='2.7 d:Anti-tip belt was used']").is(":checked")) {
        $("[id ='2.7 d_notes']").html("    <label for=\"2.7 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 d']").change(function () {
      if ($("[id='2.7 d:Lap Only']").is(":checked")) {
        $("[id ='2.7 d_notes']").html("    <label for=\"2.7 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.7 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.7 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 d']").change(function () {
      if ($("[id='2.7 d:Shoulder Only']").is(":checked")) {
        $("[id ='2.7 d_notes']").html("    <label for=\"2.7 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.7 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.7 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 e']").change(function () {
      if ($("[id='2.7 e:Surveyor']").is(":checked")) {
        $("[id ='2.7 e_notes']").html("    <label for=\"2.7 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.7 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.7 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 e']").change(function () {
      if ($("[id='2.7 e:Operator ']").is(":checked")) {
        $("[id ='2.7 e_notes']").html("    <label for=\"2.7 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.7 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.7 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.7 e']").change(function () {
      if ($("[id='2.7 e:Other']").is(":checked")) {
        $("[id ='2.7 e_notes']").html("    <label for=\"2.7 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.7 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.7 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 a']").change(function () {
      if ($("[id='2.8 a:Asked to set brakes/power down by Operator']").is(":checked")) {
        $("[id ='2.8 a_notes']").html("    <label for=\"2.8 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.8 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.8 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 a']").change(function () {
      if ($("[id='2.8 a:No request made to set brakes/power down']").is(":checked")) {
        $("[id ='2.8 a_notes']").html("    <label for=\"2.8 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 b']").change(function () {
      if ($("[id='2.8 b:Asked to lean against securement pad']").is(":checked")) {
        $("[id ='2.8 b_notes']").html("    <label for=\"2.8 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.8 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.8 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 b']").change(function () {
      if ($("[id='2.8 b:No request made to lean against securement pad']").is(":checked")) {
        $("[id ='2.8 b_notes']").html("    <label for=\"2.8 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 c']").change(function () {
      if ($("[id='2.8 c:Anti-tip belt offered']").is(":checked")) {
        $("[id ='2.8 c_notes']").html("    <label for=\"2.8 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.8 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.8 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 c']").change(function () {
      if ($("[id='2.8 c:Did not offer anti-tip belt']").is(":checked")) {
        $("[id ='2.8 c_notes']").html("    <label for=\"2.8 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 d']").change(function () {
      if ($("[id='2.8 d: Successfully attached']").is(":checked")) {
        $("[id ='2.8 d_notes']").html("    <label for=\"2.8 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.8 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.8 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 d']").change(function () {
      if ($("[id='2.8 d:Attachment unsuccessful']").is(":checked")) {
        $("[id ='2.8 d_notes']").html("    <label for=\"2.8 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 e']").change(function () {
      if ($("[id='2.8 e:Operator ']").is(":checked")) {
        $("[id ='2.8 e_notes']").html("    <label for=\"2.8 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 e']").change(function () {
      if ($("[id='2.8 e:Surveyor']").is(":checked")) {
        $("[id ='2.8 e_notes']").html("    <label for=\"2.8 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.8 e']").change(function () {
      if ($("[id='2.8 e:Other']").is(":checked")) {
        $("[id ='2.8 e_notes']").html("    <label for=\"2.8 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.8 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.8 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 a']").change(function () {
      if ($("[id='2.9 a:Dog']").is(":checked")) {
        $("[id ='2.9 a_notes']").html("    <label for=\"2.9 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 a']").change(function () {
      if ($("[id='2.9 a:Miniature Horse']").is(":checked")) {
        $("[id ='2.9 a_notes']").html("    <label for=\"2.9 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 a']").change(function () {
      if ($("[id='2.9 a:Other']").is(":checked")) {
        $("[id ='2.9 a_notes']").html("    <label for=\"2.9 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 b']").change(function () {
      if ($("[id='2.9 b:None required']").is(":checked")) {
        $("[id ='2.9 b_notes']").html("    <label for=\"2.9 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 b']").change(function () {
      if ($("[id='2.9 b:Provided assistance unsolicited']").is(":checked")) {
        $("[id ='2.9 b_notes']").html("    <label for=\"2.9 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 b']").change(function () {
      if ($("[id='2.9 b:Assistance provided upon request']").is(":checked")) {
        $("[id ='2.9 b_notes']").html("    <label for=\"2.9 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 b']").change(function () {
      if ($("[id='2.9 b:Operator hesitated, questioned Surveyor (boarded)']").is(":checked")) {
        $("[id ='2.9 b_notes']").html("    <label for=\"2.9 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 b']").change(function () {
      if ($("[id='2.9 b:Request for assistance denied']").is(":checked")) {
        $("[id ='2.9 b_notes']").html("    <label for=\"2.9 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 c']").change(function () {
      if ($("[id='2.9 c:Asked if \"animal is a service animal\"']").is(":checked")) {
        $("[id ='2.9 c_notes']").html("    <label for=\"2.9 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 c']").change(function () {
      if ($("[id='2.9 c:Did not ask approved question']").is(":checked")) {
        $("[id ='2.9 c_notes']").html("    <label for=\"2.9 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 c']").change(function () {
      if ($("[id='2.9 c:Other']").is(":checked")) {
        $("[id ='2.9 c_notes']").html("    <label for=\"2.9 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 d']").change(function () {
      if ($("[id='2.9 d:Boarded successfully']").is(":checked")) {
        $("[id ='2.9 d_notes']").html("    <label for=\"2.9 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 d']").change(function () {
      if ($("[id='2.9 d:Unsuccessful boarding (pass-up)']").is(":checked")) {
        $("[id ='2.9 d_notes']").html("    <label for=\"2.9 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 d']").change(function () {
      if ($("[id='2.9 d:Unable to Determine']").is(":checked")) {
        $("[id ='2.9 d_notes']").html("    <label for=\"2.9 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 e']").change(function () {
      if ($("[id='2.9 e:Operator']").is(":checked")) {
        $("[id ='2.9 e_notes']").html("    <label for=\"2.9 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 e']").change(function () {
      if ($("[id='2.9 e:Surveyor']").is(":checked")) {
        $("[id ='2.9 e_notes']").html("    <label for=\"2.9 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 e']").change(function () {
      if ($("[id='2.9 e:Other']").is(":checked")) {
        $("[id ='2.9 e_notes']").html("    <label for=\"2.9 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 f']").change(function () {
      if ($("[id='2.9 f:Well-behaved']").is(":checked")) {
        $("[id ='2.9 f_notes']").html("    <label for=\"2.9 f_text\">Notes:</label><textarea class=\"form-control\" id=\"2.9 f_text\" rows=\"3\"></textarea>");
        $("[id ='2.9 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 f']").change(function () {
      if ($("[id='2.9 f:Not under control (aggressive behavior, walking in the aisle, relieved itself on bus, etc.)']").is(":checked")) {
        $("[id ='2.9 f_notes']").html("    <label for=\"2.9 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.9 f']").change(function () {
      if ($("[id='2.9 f:Other']").is(":checked")) {
        $("[id ='2.9 f_notes']").html("    <label for=\"2.9 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.9 f_text\" rows=\"3\" required></textarea>");
        $("[id ='2.9 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 a']").change(function () {
      if ($("[id='2.10 a:Folding']").is(":checked")) {
        $("[id ='2.10 a_notes']").html("    <label for=\"2.10 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 a']").change(function () {
      if ($("[id='2.10 a: Unable to fold (items)']").is(":checked")) {
        $("[id ='2.10 a_notes']").html("    <label for=\"2.10 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 a']").change(function () {
      if ($("[id='2.10 a: Other']").is(":checked")) {
        $("[id ='2.10 a_notes']").html("    <label for=\"2.10 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 a']").change(function () {
      if ($("[id='2.10 a: Non-folding - design']").is(":checked")) {
        $("[id ='2.10 a_notes']").html("    <label for=\"2.10 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 b']").change(function () {
      if ($("[id='2.10 b: Walker took up extra seats']").is(":checked")) {
        $("[id ='2.10 b_notes']").html("    <label for=\"2.10 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 b']").change(function () {
      if ($("[id='2.10 b: Customer not prevented from sitting on walker seat']").is(":checked")) {
        $("[id ='2.10 b_notes']").html("    <label for=\"2.10 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 b']").change(function () {
      if ($("[id='2.10 b: Placed safely by customer or Operator']").is(":checked")) {
        $("[id ='2.10 b_notes']").html("    <label for=\"2.10 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 b']").change(function () {
      if ($("[id='2.10 b: Unsafe placement of walker allowed by Operator']").is(":checked")) {
        $("[id ='2.10 b_notes']").html("    <label for=\"2.10 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 b']").change(function () {
      if ($("[id='2.10 b: Other']").is(":checked")) {
        $("[id ='2.10 b_notes']").html("    <label for=\"2.10 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 c']").change(function () {
      if ($("[id='2.10 c: Other']").is(":checked")) {
        $("[id ='2.10 c_notes']").html("    <label for=\"2.10 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 c']").change(function () {
      if ($("[id='2.10 c: Securement was denied']").is(":checked")) {
        $("[id ='2.10 c_notes']").html("    <label for=\"2.10 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 c']").change(function () {
      if ($("[id='2.10 c: Aid secured unsolicited']").is(":checked")) {
        $("[id ='2.10 c_notes']").html("    <label for=\"2.10 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 c']").change(function () {
      if ($("[id='2.10 c: Successfully secured aid upon request']").is(":checked")) {
        $("[id ='2.10 c_notes']").html("    <label for=\"2.10 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 c']").change(function () {
      if ($("[id='2.10 c: Operator hesitated; aid secured']").is(":checked")) {
        $("[id ='2.10 c_notes']").html("    <label for=\"2.10 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 c']").change(function () {
      if ($("[id='2.10 c: No securement completed']").is(":checked")) {
        $("[id ='2.10 c_notes']").html("    <label for=\"2.10 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.10 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 d']").change(function () {
      if ($("[id='2.10 d:Operator']").is(":checked")) {
        $("[id ='2.10 d_notes']").html("    <label for=\"2.10 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 d']").change(function () {
      if ($("[id='2.10 d:Surveyor']").is(":checked")) {
        $("[id ='2.10 d_notes']").html("    <label for=\"2.10 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.10 d']").change(function () {
      if ($("[id='2.10 d:Other']").is(":checked")) {
        $("[id ='2.10 d_notes']").html("    <label for=\"2.10 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.10 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.10 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 a']").change(function () {
      if ($("[id='2.11 a:Unable to attempt priority alighting']").is(":checked")) {
        $("[id ='2.11 a_notes']").html("    <label for=\"2.11 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 a']").change(function () {
      if ($("[id='2.11 a:Attempted to allow to alight first']").is(":checked")) {
        $("[id ='2.11 a_notes']").html("    <label for=\"2.11 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 a']").change(function () {
      if ($("[id='2.11 a:Other']").is(":checked")) {
        $("[id ='2.11 a_notes']").html("    <label for=\"2.11 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 a']").change(function () {
      if ($("[id='2.11 a:Did not attempt to allow priority alighting']").is(":checked")) {
        $("[id ='2.11 a_notes']").html("    <label for=\"2.11 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b: Request to deploy denied']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b: Ramp not deployed, other issue']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b: Operator hesitated - ramp deployed']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b: Ramp deployed upon request']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b:Other']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b:N/A - Ramp was not needed']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 b']").change(function () {
      if ($("[id='2.11 b: Deployed unsolicited']").is(":checked")) {
        $("[id ='2.11 b_notes']").html("    <label for=\"2.11 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:Bus was knelt unsolicited']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:N/A - Kneeling was not needed']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:Knelt upon  request']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:Other']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:Bus not knelt, other issue']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:Request to kneel bus denied']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 c']").change(function () {
      if ($("[id='2.11 c:Operator hesitated - bus knelt']").is(":checked")) {
        $("[id ='2.11 c_notes']").html("    <label for=\"2.11 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 c_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:PCA provided assistance']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:No assistance needed / requested']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:Provided assistance unsolicited']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:Assistance was provided upon request']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:Operator hesitated - assistance provided']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:Request for assistance denied']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 d']").change(function () {
      if ($("[id='2.11 d:Other']").is(":checked")) {
        $("[id ='2.11 d_notes']").html("    <label for=\"2.11 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 d_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 e']").change(function () {
      if ($("[id='2.11 e:Customer alighted at requested location']").is(":checked")) {
        $("[id ='2.11 e_notes']").html("    <label for=\"2.11 e_text\">Notes:</label><textarea class=\"form-control\" id=\"2.11 e_text\" rows=\"3\"></textarea>");
        $("[id ='2.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 e']").change(function () {
      if ($("[id='2.11 e:Did not alight at requested location']").is(":checked")) {
        $("[id ='2.11 e_notes']").html("    <label for=\"2.11 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.11 e']").change(function () {
      if ($("[id='2.11 e:Other']").is(":checked")) {
        $("[id ='2.11 e_notes']").html("    <label for=\"2.11 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.11 e_text\" rows=\"3\" required></textarea>");
        $("[id ='2.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 a']").change(function () {
      if ($("[id='2.12 a:Informed of pass-up cause']").is(":checked")) {
        $("[id ='2.12 a_notes']").html("    <label for=\"2.12 a_text\">Notes:</label><textarea class=\"form-control\" id=\"2.12 a_text\" rows=\"3\"></textarea>");
        $("[id ='2.12 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 a']").change(function () {
      if ($("[id='2.12 a:Pass-up cause not stated']").is(":checked")) {
        $("[id ='2.12 a_notes']").html("    <label for=\"2.12 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.12 a_text\" rows=\"3\" required></textarea>");
        $("[id ='2.12 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 b']").change(function () {
      if ($("[id='2.12 b:Operator contacted BOC']").is(":checked")) {
        $("[id ='2.12 b_notes']").html("    <label for=\"2.12 b_text\">Notes:</label><textarea class=\"form-control\" id=\"2.12 b_text\" rows=\"3\"></textarea>");
        $("[id ='2.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 b']").change(function () {
      if ($("[id='2.12 b:BOC not contacted by Operator']").is(":checked")) {
        $("[id ='2.12 b_notes']").html("    <label for=\"2.12 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.12 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 b']").change(function () {
      if ($("[id='2.12 b:Unable to determine']").is(":checked")) {
        $("[id ='2.12 b_notes']").html("    <label for=\"2.12 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.12 b_text\" rows=\"3\" required></textarea>");
        $("[id ='2.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 c ']").change(function () {
      if ($("[id='2.12 c :Informed of next bus']").is(":checked")) {
        $("[id ='2.12 c _notes']").html("    <label for=\"2.12 c _text\">Notes:</label><textarea class=\"form-control\" id=\"2.12 c _text\" rows=\"3\"></textarea>");
        $("[id ='2.12 c _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.12 c ']").change(function () {
      if ($("[id='2.12 c :Next bus information not stated']").is(":checked")) {
        $("[id ='2.12 c _notes']").html("    <label for=\"2.12 c _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.12 c _text\" rows=\"3\" required></textarea>");
        $("[id ='2.12 c _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.13']").change(function () {
      if ($("[id='2.13:Other']").is(":checked")) {
        $("[id ='2.13_notes']").html("    <label for=\"2.13_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.13_text\" rows=\"3\" required></textarea>");
        $("[id ='2.13_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='2.13']").change(function () {
      if ($("[id='2.13:Exceeded standard for customer treatment']").is(":checked")) {
        $("[id ='2.13_notes']").html("    <label for=\"2.13_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"2.13_text\" rows=\"3\" required></textarea>");
        $("[id ='2.13_notes']").show(200);
      }
      else {
      }
   });
   
   $("[id='3.03:No aid used']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Other']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\" required></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Power wheelchair']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.07']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.09']").show(200);
          $("[id='3.1']").show(200);
          $("[id='3.11']").show(200);
          $("[id='3.12']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.07']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.09']").hide(200);
          $("[id='3.1']").hide(200);
          $("[id='3.11']").hide(200);
          $("[id='3.12']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Scooter']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.07']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.09']").show(200);
          $("[id='3.1']").show(200);
          $("[id='3.11']").show(200);
          $("[id='3.12']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.07']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.09']").hide(200);
          $("[id='3.1']").hide(200);
          $("[id='3.11']").hide(200);
          $("[id='3.12']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Walker']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.7 a']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.14']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.7 a']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.14']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Cane ']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Visually Impaired Cane']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Service Animal']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.03']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.11']").show(200);
          $("[id='2.13']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.03']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='2.13']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Personal Care Attendant']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Hearing Impairment']").change(function () {
      if (this.checked) {
          $("[id='2.02']").show(200);
          $("[id='2.04']").show(200);
          $("[id='2.11']").show(200);
          $("[id='2.13']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='2.02']").hide(200);
          $("[id='2.04']").hide(200);
          $("[id='2.11']").hide(200);
          $("[id='2.13']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Crutches']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Stroller/pediatric wheelchair']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.07']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.09']").show(200);
          $("[id='3.1']").show(200);
          $("[id='3.11']").show(200);
          $("[id='3.12']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.07']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.09']").hide(200);
          $("[id='3.1']").hide(200);
          $("[id='3.11']").hide(200);
          $("[id='3.12']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Segway']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.7 a']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.14']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.7 a']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.14']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:3-wheel bicycle (Metro approved)']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.7 a']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.14']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.7 a']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.14']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Hidden Disability']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
          $("[id='6']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
          $("[id='6']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("[id='3.03:Manual wheelchair']").change(function () {
      if (this.checked) {
          $("[id='3.04']").show(200);
          $("[id='3.05']").show(200);
          $("[id='3.06']").show(200);
          $("[id='3.07']").show(200);
          $("[id='3.08']").show(200);
          $("[id='3.09']").show(200);
          $("[id='3.1']").show(200);
          $("[id='3.11']").show(200);
          $("[id='3.12']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.17']").show(200);
          $("[id='3.18']").show(200);
          $("[id='3.19']").show(200);
          $("[id='4']").show(200);
          $("[id='5']").show(200);
        $("[id ='3.03_notes']").html("    <label for=\"3.03_text\">Notes:</label><textarea class=\"form-control\" id=\"3.03_text\" rows=\"3\"></textarea>");
        $("[id ='3.03_notes']").show(200);
      }
      else {
          $("[id='3.04']").hide(200);
          $("[id='3.05']").hide(200);
          $("[id='3.06']").hide(200);
          $("[id='3.07']").hide(200);
          $("[id='3.08']").hide(200);
          $("[id='3.09']").hide(200);
          $("[id='3.1']").hide(200);
          $("[id='3.11']").hide(200);
          $("[id='3.12']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.17']").hide(200);
          $("[id='3.18']").hide(200);
          $("[id='3.19']").hide(200);
          $("[id='4']").hide(200);
          $("[id='5']").hide(200);
        $("[id ='3.03_notes']").hide(200);
        $("[id ='3.03_notes']").html("");
      }
   });
   
   $("input[name='3.5 a']").change(function () {
      if ($("[id='3.5 a:Customer boarded successfully']").is(":checked")) {
          $("[id='3.5 f']").hide(200);
        $("[id ='3.5 a_notes']").html("    <label for=\"3.5 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 a_notes']").show(200);
      }
      else {
          $("[id='3.5 f']").show(200);
      }
   });
   
   $("input[name='3.5 a']").change(function () {
      if ($("[id='3.5 a:Unsuccessful boarding (pass-up)']").is(":checked")) {
          $("[id='3.5 f']").show(200);
        $("[id ='3.5 a_notes']").html("    <label for=\"3.5 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 a_notes']").show(200);
      }
      else {
          $("[id='3.5 f']").hide(200);
      }
   });
   
   $("input[name='3.5 b']").change(function () {
      if ($("[id='3.5 b:Unable to attempt priority boarding']").is(":checked")) {
        $("[id ='3.5 b_notes']").html("    <label for=\"3.5 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 b']").change(function () {
      if ($("[id='3.5 b:Attempted to allow to board first']").is(":checked")) {
        $("[id ='3.5 b_notes']").html("    <label for=\"3.5 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 b']").change(function () {
      if ($("[id='3.5 b:Did not attempt to allow priority boarding']").is(":checked")) {
        $("[id ='3.5 b_notes']").html("    <label for=\"3.5 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 b']").change(function () {
      if ($("[id='3.5 b:Other']").is(":checked")) {
        $("[id ='3.5 b_notes']").html("    <label for=\"3.5 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d: Denied  request to deploy ']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d:Unable to determine']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d: Ramp not deployed, other']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d: Operator hesitated - ramp deployed']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d: Successfully deployed upon request']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d: Deployed unsolicited']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 d']").change(function () {
      if ($("[id='3.5 d:N/A - Ramp was not needed']").is(":checked")) {
        $("[id ='3.5 d_notes']").html("    <label for=\"3.5 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:Unable to determine']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:Bus not knelt, other issue']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:N/A - Kneeling was not needed']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:Request to kneel bus denied']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:Operator hesitated - bus knelt']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:Bus knelt unsolicited']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 e']").change(function () {
      if ($("[id='3.5 e:Knelt upon request']").is(":checked")) {
        $("[id ='3.5 e_notes']").html("    <label for=\"3.5 e_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 e_text\" rows=\"3\"></textarea>");
        $("[id ='3.5 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 f']").change(function () {
      if ($("[id='3.5 f:Operator']").is(":checked")) {
        $("[id ='3.5 f_notes']").html("    <label for=\"3.5 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 f']").change(function () {
      if ($("[id='3.5 f:Customer']").is(":checked")) {
        $("[id ='3.5 f_notes']").html("    <label for=\"3.5 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 f']").change(function () {
      if ($("[id='3.5 f:Other']").is(":checked")) {
        $("[id ='3.5 f_notes']").html("    <label for=\"3.5 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 g ']").change(function () {
      if ($("[id='3.5 g :Customer requested stop location assistance unsolicited']").is(":checked")) {
        $("[id ='3.5 g _notes']").html("    <label for=\"3.5 g _text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 g _text\" rows=\"3\"></textarea>");
        $("[id ='3.5 g _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5 g ']").change(function () {
      if ($("[id='3.5 g :Operator asked Customer for desired stop']").is(":checked")) {
        $("[id ='3.5 g _notes']").html("    <label for=\"3.5 g _text\">Notes:</label><textarea class=\"form-control\" id=\"3.5 g _text\" rows=\"3\"></textarea>");
        $("[id ='3.5 g _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5c']").change(function () {
      if ($("[id='3.5c:Unable to determine']").is(":checked")) {
        $("[id ='3.5c_notes']").html("    <label for=\"3.5c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5c']").change(function () {
      if ($("[id='3.5c:Fly-by, Operator did not stop (pass-up)']").is(":checked")) {
          $("[id='3.5 f']").show(200);
          $("[id='3.5 d']").hide(200);
          $("[id='3.5 e']").hide(200);
          $("[id=' 3.07']").hide(200);
          $("[id='3.1']").hide(200);
          $("[id='3.11']").hide(200);
          $("[id='3.12']").hide(200);
          $("[id='3.13']").hide(200);
          $("[id='3.14']").hide(200);
          $("[id='3.15']").hide(200);
          $("[id='3.16']").hide(200);
        $("[id ='3.5c_notes']").html("    <label for=\"3.5c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5c_notes']").show(200);
      }
      else {
          $("[id='3.5 f']").hide(200);
          $("[id='3.5 d']").show(200);
          $("[id='3.5 e']").show(200);
          $("[id=' 3.07']").show(200);
          $("[id='3.1']").show(200);
          $("[id='3.11']").show(200);
          $("[id='3.12']").show(200);
          $("[id='3.13']").show(200);
          $("[id='3.14']").show(200);
          $("[id='3.15']").show(200);
          $("[id='3.16']").show(200);
      }
   });
   
   $("input[name='3.5c']").change(function () {
      if ($("[id='3.5c:Unsafe bus placement']").is(":checked")) {
        $("[id ='3.5c_notes']").html("    <label for=\"3.5c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.5c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.5c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.5c']").change(function () {
      if ($("[id='3.5c:Safe bus placement']").is(":checked")) {
        $("[id ='3.5c_notes']").html("    <label for=\"3.5c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.5c_text\" rows=\"3\"></textarea>");
        $("[id ='3.5c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 a']").change(function () {
      if ($("[id='3.6 a:Space available at arrival']").is(":checked")) {
        $("[id ='3.6 a_notes']").html("    <label for=\"3.6 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 a']").change(function () {
      if ($("[id='3.6 a:No space available at arrival']").is(":checked")) {
        $("[id ='3.6 a_notes']").html("    <label for=\"3.6 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 a']").change(function () {
      if ($("[id='3.6 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.6 a_notes']").html("    <label for=\"3.6 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 b']").change(function () {
      if ($("[id='3.6 b:Two mobility aids present']").is(":checked")) {
        $("[id ='3.6 b_notes']").html("    <label for=\"3.6 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 b']").change(function () {
      if ($("[id='3.6 b:One mobility aid present']").is(":checked")) {
        $("[id ='3.6 b_notes']").html("    <label for=\"3.6 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 b']").change(function () {
      if ($("[id='3.6 b:Customers seated in securement areas']").is(":checked")) {
        $("[id ='3.6 b_notes']").html("    <label for=\"3.6 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 b']").change(function () {
      if ($("[id='3.6 b:Other (packages, stroller, folded walker…)']").is(":checked")) {
        $("[id ='3.6 b_notes']").html("    <label for=\"3.6 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 b']").change(function () {
      if ($("[id='3.6 b:Unable to determine']").is(":checked")) {
        $("[id ='3.6 b_notes']").html("    <label for=\"3.6 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 c']").change(function () {
      if ($("[id='3.6 c:Attempt to clear made']").is(":checked")) {
        $("[id ='3.6 c_notes']").html("    <label for=\"3.6 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 c']").change(function () {
      if ($("[id='3.6 c:Unable to determine']").is(":checked")) {
        $("[id ='3.6 c_notes']").html("    <label for=\"3.6 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 c']").change(function () {
      if ($("[id='3.6 c:Attempt to clear unnecessary']").is(":checked")) {
        $("[id ='3.6 c_notes']").html("    <label for=\"3.6 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 c']").change(function () {
      if ($("[id='3.6 c:No attempt to clear made']").is(":checked")) {
        $("[id ='3.6 c_notes']").html("    <label for=\"3.6 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 d']").change(function () {
      if ($("[id='3.6 d:Customer boarded ']").is(":checked")) {
        $("[id ='3.6 d_notes']").html("    <label for=\"3.6 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.6 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.6 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 d']").change(function () {
      if ($("[id='3.6 d:Unsuccessful boarding (pass-up)']").is(":checked")) {
        $("[id ='3.6 d_notes']").html("    <label for=\"3.6 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 d']").change(function () {
      if ($("[id='3.6 d:Unable to determine']").is(":checked")) {
        $("[id ='3.6 d_notes']").html("    <label for=\"3.6 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 e']").change(function () {
      if ($("[id='3.6 e:Customer']").is(":checked")) {
        $("[id ='3.6 e_notes']").html("    <label for=\"3.6 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 e']").change(function () {
      if ($("[id='3.6 e:Operator']").is(":checked")) {
        $("[id ='3.6 e_notes']").html("    <label for=\"3.6 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.6 e']").change(function () {
      if ($("[id='3.6 e:Other']").is(":checked")) {
        $("[id ='3.6 e_notes']").html("    <label for=\"3.6 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.6 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.6 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  b']").change(function () {
      if ($("[id='3.7  b:Prepared lap/shoulder belts']").is(":checked")) {
        $("[id ='3.7  b_notes']").html("    <label for=\"3.7  b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7  b_text\" rows=\"3\"></textarea>");
        $("[id ='3.7  b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  b']").change(function () {
      if ($("[id='3.7  b:Unable to Determine']").is(":checked")) {
        $("[id ='3.7  b_notes']").html("    <label for=\"3.7  b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.7  b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.7  b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  b']").change(function () {
      if ($("[id='3.7  b:Did not prepare lap/shoulder belts']").is(":checked")) {
        $("[id ='3.7  b_notes']").html("    <label for=\"3.7  b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7  b_text\" rows=\"3\"></textarea>");
        $("[id ='3.7  b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  c']").change(function () {
      if ($("[id='3.7  c:N/A (no q'pod)']").is(":checked")) {
        $("[id ='3.7  c_notes']").html("    <label for=\"3.7  c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7  c_text\" rows=\"3\"></textarea>");
        $("[id ='3.7  c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  c']").change(function () {
      if ($("[id='3.7  c:Rear tie-downs prepared']").is(":checked")) {
        $("[id ='3.7  c_notes']").html("    <label for=\"3.7  c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7  c_text\" rows=\"3\"></textarea>");
        $("[id ='3.7  c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  c']").change(function () {
      if ($("[id='3.7  c:Did not prepare rear tie downs']").is(":checked")) {
        $("[id ='3.7  c_notes']").html("    <label for=\"3.7  c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7  c_text\" rows=\"3\"></textarea>");
        $("[id ='3.7  c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7  c']").change(function () {
      if ($("[id='3.7  c:Unable to Determine']").is(":checked")) {
        $("[id ='3.7  c_notes']").html("    <label for=\"3.7  c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.7  c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.7  c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7 a']").change(function () {
      if ($("[id='3.7 a: Seat already folded']").is(":checked")) {
        $("[id ='3.7 a_notes']").html("    <label for=\"3.7 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7 a']").change(function () {
      if ($("[id='3.7 a:Customer or other passenger lifted folding seats']").is(":checked")) {
        $("[id ='3.7 a_notes']").html("    <label for=\"3.7 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7 a']").change(function () {
      if ($("[id='3.7 a: Operator Lifted folding seats']").is(":checked")) {
        $("[id ='3.7 a_notes']").html("    <label for=\"3.7 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7 a']").change(function () {
      if ($("[id='3.7 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.7 a_notes']").html("    <label for=\"3.7 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.7 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.7 a']").change(function () {
      if ($("[id='3.7 a:N/A (walker area available)']").is(":checked")) {
        $("[id ='3.7 a_notes']").html("    <label for=\"3.7 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.7 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.7 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.08']").change(function () {
      if ($("[id='3.08:No assistance needed / requested']").is(":checked")) {
        $("[id ='3.08_notes']").html("    <label for=\"3.08_text\">Notes:</label><textarea class=\"form-control\" id=\"3.08_text\" rows=\"3\"></textarea>");
        $("[id ='3.08_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.08']").change(function () {
      if ($("[id='3.08:Provided assistance unsolicited']").is(":checked")) {
        $("[id ='3.08_notes']").html("    <label for=\"3.08_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.08_text\" rows=\"3\" required></textarea>");
        $("[id ='3.08_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.08']").change(function () {
      if ($("[id='3.08:Unable to determine']").is(":checked")) {
        $("[id ='3.08_notes']").html("    <label for=\"3.08_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.08_text\" rows=\"3\" required></textarea>");
        $("[id ='3.08_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.08']").change(function () {
      if ($("[id='3.08:Operator hesitated - assistance provided']").is(":checked")) {
        $("[id ='3.08_notes']").html("    <label for=\"3.08_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.08_text\" rows=\"3\" required></textarea>");
        $("[id ='3.08_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.08']").change(function () {
      if ($("[id='3.08:Denied requested assistance']").is(":checked")) {
        $("[id ='3.08_notes']").html("    <label for=\"3.08_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.08_text\" rows=\"3\" required></textarea>");
        $("[id ='3.08_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.08']").change(function () {
      if ($("[id='3.08:Assistance provided upon request']").is(":checked")) {
        $("[id ='3.08_notes']").html("    <label for=\"3.08_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.08_text\" rows=\"3\" required></textarea>");
        $("[id ='3.08_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.09']").change(function () {
      if ($("[id='3.09:Rear Facing']").is(":checked")) {
          $("[id='3.12']").show(200);
          $("[id='3.1']").hide(200);
          $("[id='3.11']").hide(200);
      }
      else {
          $("[id='3.12']").hide(200);
          $("[id='3.1']").show(200);
          $("[id='3.11']").show(200);
      }
   });
   
   $("input[name='3.09']").change(function () {
      if ($("[id='3.09:Forward Facing']").is(":checked")) {
          $("[id='3.1']").show(200);
          $("[id='3.12']").hide(200);
      }
      else {
          $("[id='3.1']").hide(200);
          $("[id='3.12']").show(200);
      }
   });
   
   $("input[name='3.10 a']").change(function () {
      if ($("[id='3.10 a:Customer transferred to fixed seat unsolicited']").is(":checked")) {
        $("[id ='3.10 a_notes']").html("    <label for=\"3.10 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 a']").change(function () {
      if ($("[id='3.10 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.10 a_notes']").html("    <label for=\"3.10 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 a']").change(function () {
      if ($("[id='3.10 a:No request to transfer was made']").is(":checked")) {
        $("[id ='3.10 a_notes']").html("    <label for=\"3.10 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 a']").change(function () {
      if ($("[id='3.10 a:Operator requested customer to transfer to fixed seat']").is(":checked")) {
        $("[id ='3.10 a_notes']").html("    <label for=\"3.10 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 b']").change(function () {
      if ($("[id='3.10 b:Securement clearly offered ']").is(":checked")) {
        $("[id ='3.10 b_notes']").html("    <label for=\"3.10 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 b']").change(function () {
      if ($("[id='3.10 b:No offer made']").is(":checked")) {
        $("[id ='3.10 b_notes']").html("    <label for=\"3.10 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 b']").change(function () {
      if ($("[id='3.10 b:Unable to Determine']").is(":checked")) {
        $("[id ='3.10 b_notes']").html("    <label for=\"3.10 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 b']").change(function () {
      if ($("[id='3.10 b:Combined offer for WC & Lap/Shoulder Belts']").is(":checked")) {
        $("[id ='3.10 b_notes']").html("    <label for=\"3.10 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 c']").change(function () {
      if ($("[id='3.10 c:Unable to Determine']").is(":checked")) {
        $("[id ='3.10 c_notes']").html("    <label for=\"3.10 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 c']").change(function () {
      if ($("[id='3.10 c:No/improper gestures used']").is(":checked")) {
        $("[id ='3.10 c_notes']").html("    <label for=\"3.10 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 c']").change(function () {
      if ($("[id='3.10 c:Proper gestures used with offer']").is(":checked")) {
        $("[id ='3.10 c_notes']").html("    <label for=\"3.10 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 d']").change(function () {
      if ($("[id='3.10 d:Customer accepted securement']").is(":checked")) {
        $("[id ='3.10 d_notes']").html("    <label for=\"3.10 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 d']").change(function () {
      if ($("[id='3.10 d:Securement not accepted by customer']").is(":checked")) {
        $("[id ='3.10 d_notes']").html("    <label for=\"3.10 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 d']").change(function () {
      if ($("[id='3.10 d:Unable to Determine']").is(":checked")) {
        $("[id ='3.10 d_notes']").html("    <label for=\"3.10 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 e']").change(function () {
      if ($("[id='3.10 e: Full securement achieved']").is(":checked")) {
        $("[id ='3.10 e_notes']").html("    <label for=\"3.10 e_text\">Notes:</label><textarea class=\"form-control\" id=\"3.10 e_text\" rows=\"3\"></textarea>");
        $("[id ='3.10 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 e']").change(function () {
      if ($("[id='3.10 e: Partial securement achieved']").is(":checked")) {
        $("[id ='3.10 e_notes']").html("    <label for=\"3.10 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 e']").change(function () {
      if ($("[id='3.10 e: No securement achieved']").is(":checked")) {
        $("[id ='3.10 e_notes']").html("    <label for=\"3.10 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 e']").change(function () {
      if ($("[id='3.10 e:Unable to Determine']").is(":checked")) {
        $("[id ='3.10 e_notes']").html("    <label for=\"3.10 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 f']").change(function () {
      if ($("[id='3.10 f:Other']").is(":checked")) {
        $("[id ='3.10 f_notes']").html("    <label for=\"3.10 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 f']").change(function () {
      if ($("[id='3.10 f:Customer']").is(":checked")) {
        $("[id ='3.10 f_notes']").html("    <label for=\"3.10 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 f']").change(function () {
      if ($("[id='3.10 f:Operator ']").is(":checked")) {
        $("[id ='3.10 f_notes']").html("    <label for=\"3.10 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.10 f']").change(function () {
      if ($("[id='3.10 f:Unable to Determine']").is(":checked")) {
        $("[id ='3.10 f_notes']").html("    <label for=\"3.10 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.10 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.10 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 a']").change(function () {
      if ($("[id='3.11 a:Securement clearly offered ']").is(":checked")) {
        $("[id ='3.11 a_notes']").html("    <label for=\"3.11 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 a']").change(function () {
      if ($("[id='3.11 a:No offer made']").is(":checked")) {
        $("[id ='3.11 a_notes']").html("    <label for=\"3.11 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 a']").change(function () {
      if ($("[id='3.11 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.11 a_notes']").html("    <label for=\"3.11 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 b']").change(function () {
      if ($("[id='3.11 b:Hand gestures used with offer']").is(":checked")) {
        $("[id ='3.11 b_notes']").html("    <label for=\"3.11 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 b']").change(function () {
      if ($("[id='3.11 b:No hand gestures not used']").is(":checked")) {
        $("[id ='3.11 b_notes']").html("    <label for=\"3.11 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 b']").change(function () {
      if ($("[id='3.11 b:Unable to Determine']").is(":checked")) {
        $("[id ='3.11 b_notes']").html("    <label for=\"3.11 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 c']").change(function () {
      if ($("[id='3.11 c:Accepted securement']").is(":checked")) {
        $("[id ='3.11 c_notes']").html("    <label for=\"3.11 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 c']").change(function () {
      if ($("[id='3.11 c:Unable to Determine']").is(":checked")) {
        $("[id ='3.11 c_notes']").html("    <label for=\"3.11 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 c']").change(function () {
      if ($("[id='3.11 c:Securement not accepted']").is(":checked")) {
        $("[id ='3.11 c_notes']").html("    <label for=\"3.11 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 d']").change(function () {
      if ($("[id='3.11 d: Lap and shoulder belts secured']").is(":checked")) {
        $("[id ='3.11 d_notes']").html("    <label for=\"3.11 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 d']").change(function () {
      if ($("[id='3.11 d:Shoulder Only']").is(":checked")) {
        $("[id ='3.11 d_notes']").html("    <label for=\"3.11 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 d']").change(function () {
      if ($("[id='3.11 d:Lap Only']").is(":checked")) {
        $("[id ='3.11 d_notes']").html("    <label for=\"3.11 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.11 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 d']").change(function () {
      if ($("[id='3.11 d: Securement unsuccessful']").is(":checked")) {
        $("[id ='3.11 d_notes']").html("    <label for=\"3.11 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 e']").change(function () {
      if ($("[id='3.11 e:Operator ']").is(":checked")) {
        $("[id ='3.11 e_notes']").html("    <label for=\"3.11 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 e']").change(function () {
      if ($("[id='3.11 e:Customer']").is(":checked")) {
        $("[id ='3.11 e_notes']").html("    <label for=\"3.11 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 e']").change(function () {
      if ($("[id='3.11 e:Other']").is(":checked")) {
        $("[id ='3.11 e_notes']").html("    <label for=\"3.11 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.11 e']").change(function () {
      if ($("[id='3.11 e:Unable to Determine']").is(":checked")) {
        $("[id ='3.11 e_notes']").html("    <label for=\"3.11 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.11 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.11 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 a']").change(function () {
      if ($("[id='3.12 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.12 a_notes']").html("    <label for=\"3.12 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 a']").change(function () {
      if ($("[id='3.12 a:No request made to set brakes/power down']").is(":checked")) {
        $("[id ='3.12 a_notes']").html("    <label for=\"3.12 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 a']").change(function () {
      if ($("[id='3.12 a:Asked to set brakes/power down by Operator']").is(":checked")) {
        $("[id ='3.12 a_notes']").html("    <label for=\"3.12 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 a']").change(function () {
      if ($("[id='3.12 a:Brakes set / powered down unsolicited by Customer']").is(":checked")) {
        $("[id ='3.12 a_notes']").html("    <label for=\"3.12 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 b']").change(function () {
      if ($("[id='3.12 b:Unable to Determine']").is(":checked")) {
        $("[id ='3.12 b_notes']").html("    <label for=\"3.12 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 b']").change(function () {
      if ($("[id='3.12 b:Asked to back up against securement pad']").is(":checked")) {
        $("[id ='3.12 b_notes']").html("    <label for=\"3.12 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 b']").change(function () {
      if ($("[id='3.12 b:No request to back up against securement pad made']").is(":checked")) {
        $("[id ='3.12 b_notes']").html("    <label for=\"3.12 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 b']").change(function () {
      if ($("[id='3.12 b:Aid placed against pad unsolicited by Customer']").is(":checked")) {
        $("[id ='3.12 b_notes']").html("    <label for=\"3.12 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 c']").change(function () {
      if ($("[id='3.12 c:Unable to Determine']").is(":checked")) {
        $("[id ='3.12 c_notes']").html("    <label for=\"3.12 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 c']").change(function () {
      if ($("[id='3.12 c:Request for anti-tip belt made by Customer']").is(":checked")) {
        $("[id ='3.12 c_notes']").html("    <label for=\"3.12 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 c']").change(function () {
      if ($("[id='3.12 c:Anti-tip belt not offered']").is(":checked")) {
        $("[id ='3.12 c_notes']").html("    <label for=\"3.12 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 c']").change(function () {
      if ($("[id='3.12 c:Offered / Accepted']").is(":checked")) {
        $("[id ='3.12 c_notes']").html("    <label for=\"3.12 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 c']").change(function () {
      if ($("[id='3.12 c:Offered / Declined']").is(":checked")) {
        $("[id ='3.12 c_notes']").html("    <label for=\"3.12 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 d']").change(function () {
      if ($("[id='3.12 d:Unable to Determine']").is(":checked")) {
        $("[id ='3.12 d_notes']").html("    <label for=\"3.12 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 d']").change(function () {
      if ($("[id='3.12 d:Securement not successful']").is(":checked")) {
        $("[id ='3.12 d_notes']").html("    <label for=\"3.12 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 d']").change(function () {
      if ($("[id='3.12 d:Successful securement']").is(":checked")) {
        $("[id ='3.12 d_notes']").html("    <label for=\"3.12 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.12 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.12 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 e']").change(function () {
      if ($("[id='3.12 e:Operator']").is(":checked")) {
        $("[id ='3.12 e_notes']").html("    <label for=\"3.12 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 e']").change(function () {
      if ($("[id='3.12 e:Other']").is(":checked")) {
        $("[id ='3.12 e_notes']").html("    <label for=\"3.12 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 e']").change(function () {
      if ($("[id='3.12 e:Customer ']").is(":checked")) {
        $("[id ='3.12 e_notes']").html("    <label for=\"3.12 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.12 e']").change(function () {
      if ($("[id='3.12 e:Unable to Determine']").is(":checked")) {
        $("[id ='3.12 e_notes']").html("    <label for=\"3.12 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.12 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.12 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 a']").change(function () {
      if ($("[id='3.13 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.13 a_notes']").html("    <label for=\"3.13 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 a']").change(function () {
      if ($("[id='3.13 a:Miniature Horse']").is(":checked")) {
        $("[id ='3.13 a_notes']").html("    <label for=\"3.13 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 a']").change(function () {
      if ($("[id='3.13 a:Other']").is(":checked")) {
        $("[id ='3.13 a_notes']").html("    <label for=\"3.13 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 a']").change(function () {
      if ($("[id='3.13 a:Dog']").is(":checked")) {
        $("[id ='3.13 a_notes']").html("    <label for=\"3.13 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 b']").change(function () {
      if ($("[id='3.13 b:None required']").is(":checked")) {
        $("[id ='3.13 b_notes']").html("    <label for=\"3.13 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 b']").change(function () {
      if ($("[id='3.13 b: Provided assistance unsolicited']").is(":checked")) {
        $("[id ='3.13 b_notes']").html("    <label for=\"3.13 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 b']").change(function () {
      if ($("[id='3.13 b: Assistance provided upon request']").is(":checked")) {
        $("[id ='3.13 b_notes']").html("    <label for=\"3.13 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 b']").change(function () {
      if ($("[id='3.13 b:Operator hesitated, questioned Customer (boarded)']").is(":checked")) {
        $("[id ='3.13 b_notes']").html("    <label for=\"3.13 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 b']").change(function () {
      if ($("[id='3.13 b:Request for assistance denied']").is(":checked")) {
        $("[id ='3.13 b_notes']").html("    <label for=\"3.13 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 b']").change(function () {
      if ($("[id='3.13 b:Unable to determine']").is(":checked")) {
        $("[id ='3.13 b_notes']").html("    <label for=\"3.13 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 c']").change(function () {
      if ($("[id='3.13 c:Asked if \"animal is a service animal\"']").is(":checked")) {
        $("[id ='3.13 c_notes']").html("    <label for=\"3.13 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 c']").change(function () {
      if ($("[id='3.13 c:Did not ask approved question']").is(":checked")) {
        $("[id ='3.13 c_notes']").html("    <label for=\"3.13 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 c']").change(function () {
      if ($("[id='3.13 c:Unable to Determine']").is(":checked")) {
        $("[id ='3.13 c_notes']").html("    <label for=\"3.13 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 c']").change(function () {
      if ($("[id='3.13 c:Other']").is(":checked")) {
        $("[id ='3.13 c_notes']").html("    <label for=\"3.13 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 d']").change(function () {
      if ($("[id='3.13 d:Unsuccessful boarding (pass-up)']").is(":checked")) {
        $("[id ='3.13 d_notes']").html("    <label for=\"3.13 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 d']").change(function () {
      if ($("[id='3.13 d:Unable to Determine']").is(":checked")) {
        $("[id ='3.13 d_notes']").html("    <label for=\"3.13 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 d']").change(function () {
      if ($("[id='3.13 d:Customer boarded successfully']").is(":checked")) {
        $("[id ='3.13 d_notes']").html("    <label for=\"3.13 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 e']").change(function () {
      if ($("[id='3.13 e:Customer ']").is(":checked")) {
        $("[id ='3.13 e_notes']").html("    <label for=\"3.13 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 e']").change(function () {
      if ($("[id='3.13 e:Operator']").is(":checked")) {
        $("[id ='3.13 e_notes']").html("    <label for=\"3.13 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 e']").change(function () {
      if ($("[id='3.13 e:Other']").is(":checked")) {
        $("[id ='3.13 e_notes']").html("    <label for=\"3.13 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 e']").change(function () {
      if ($("[id='3.13 e:Unable to Determine']").is(":checked")) {
        $("[id ='3.13 e_notes']").html("    <label for=\"3.13 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 f']").change(function () {
      if ($("[id='3.13 f:Well-behaved']").is(":checked")) {
        $("[id ='3.13 f_notes']").html("    <label for=\"3.13 f_text\">Notes:</label><textarea class=\"form-control\" id=\"3.13 f_text\" rows=\"3\"></textarea>");
        $("[id ='3.13 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 f']").change(function () {
      if ($("[id='3.13 f:Not under control (aggressive behavior, walking in the aisle, relieved itself on bus, etc.)']").is(":checked")) {
        $("[id ='3.13 f_notes']").html("    <label for=\"3.13 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 f']").change(function () {
      if ($("[id='3.13 f:Other']").is(":checked")) {
        $("[id ='3.13 f_notes']").html("    <label for=\"3.13 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.13 f']").change(function () {
      if ($("[id='3.13 f:Unable to Determine']").is(":checked")) {
        $("[id ='3.13 f_notes']").html("    <label for=\"3.13 f_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.13 f_text\" rows=\"3\" required></textarea>");
        $("[id ='3.13 f_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 a']").change(function () {
      if ($("[id='3.14 a: Unable to fold (items)']").is(":checked")) {
        $("[id ='3.14 a_notes']").html("    <label for=\"3.14 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 a']").change(function () {
      if ($("[id='3.14 a: Non-folding by design']").is(":checked")) {
        $("[id ='3.14 a_notes']").html("    <label for=\"3.14 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 a']").change(function () {
      if ($("[id='3.14 a:Folding']").is(":checked")) {
        $("[id ='3.14 a_notes']").html("    <label for=\"3.14 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 a']").change(function () {
      if ($("[id='3.14 a:Other']").is(":checked")) {
        $("[id ='3.14 a_notes']").html("    <label for=\"3.14 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 a']").change(function () {
      if ($("[id='3.14 a: Unable to determine']").is(":checked")) {
        $("[id ='3.14 a_notes']").html("    <label for=\"3.14 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 b']").change(function () {
      if ($("[id='3.14 b: Unable to determine']").is(":checked")) {
        $("[id ='3.14 b_notes']").html("    <label for=\"3.14 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 b']").change(function () {
      if ($("[id='3.14 b: Other']").is(":checked")) {
        $("[id ='3.14 b_notes']").html("    <label for=\"3.14 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 b']").change(function () {
      if ($("[id='3.14 b: Customer sat on walker seat']").is(":checked")) {
        $("[id ='3.14 b_notes']").html("    <label for=\"3.14 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 b']").change(function () {
      if ($("[id='3.14 b: Walker took up extra seats']").is(":checked")) {
        $("[id ='3.14 b_notes']").html("    <label for=\"3.14 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 b']").change(function () {
      if ($("[id='3.14 b: Unsafe placement of walker']").is(":checked")) {
        $("[id ='3.14 b_notes']").html("    <label for=\"3.14 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 b']").change(function () {
      if ($("[id='3.14 b: Placed safely by customer or Operator']").is(":checked")) {
        $("[id ='3.14 b_notes']").html("    <label for=\"3.14 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c:Securement was denied']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c: Other']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c: Operator hesitated; aid secured']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c: Successfully secured aid upon request']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c: Aid secured unsolicited']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c:Unable to Determine']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 c']").change(function () {
      if ($("[id='3.14 c: No securement completed']").is(":checked")) {
        $("[id ='3.14 c_notes']").html("    <label for=\"3.14 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.14 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.14 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 d']").change(function () {
      if ($("[id='3.14 d:Operator']").is(":checked")) {
        $("[id ='3.14 d_notes']").html("    <label for=\"3.14 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 d']").change(function () {
      if ($("[id='3.14 d:Customer ']").is(":checked")) {
        $("[id ='3.14 d_notes']").html("    <label for=\"3.14 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 d']").change(function () {
      if ($("[id='3.14 d:Other']").is(":checked")) {
        $("[id ='3.14 d_notes']").html("    <label for=\"3.14 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.14 d']").change(function () {
      if ($("[id='3.14 d:Unable to Determine']").is(":checked")) {
        $("[id ='3.14 d_notes']").html("    <label for=\"3.14 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.14 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.14 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 a']").change(function () {
      if ($("[id='3.15 a:Other']").is(":checked")) {
        $("[id ='3.15 a_notes']").html("    <label for=\"3.15 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 a']").change(function () {
      if ($("[id='3.15 a:Did not attempt to allow priority alighting']").is(":checked")) {
        $("[id ='3.15 a_notes']").html("    <label for=\"3.15 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 a']").change(function () {
      if ($("[id='3.15 a:Unable to attempt priority alighting']").is(":checked")) {
        $("[id ='3.15 a_notes']").html("    <label for=\"3.15 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 a']").change(function () {
      if ($("[id='3.15 a:Attempted to allow to alight first']").is(":checked")) {
        $("[id ='3.15 a_notes']").html("    <label for=\"3.15 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b: Operator hesitated - ramp deployed']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b: Successfully deployed upon request']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b: Deployed unsolicited']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b:N/A - Ramp not needed / requested']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b: Request to deploy denied']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b:Unable to Determine']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 b']").change(function () {
      if ($("[id='3.15 b: Ramp not deployed, other']").is(":checked")) {
        $("[id ='3.15 b_notes']").html("    <label for=\"3.15 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:N/A - Kneeling not needed / requested']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:Knelt unsolicited']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:Bus knelt upon request']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:Operator hesitated - bus knelt']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:Bus not knelt, other issue']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:Request to kneel bus denied']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 c']").change(function () {
      if ($("[id='3.15 c:Unable to Determine']").is(":checked")) {
        $("[id ='3.15 c_notes']").html("    <label for=\"3.15 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 c_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 d']").change(function () {
      if ($("[id='3.15 d:Provided assistance unsolicited']").is(":checked")) {
        $("[id ='3.15 d_notes']").html("    <label for=\"3.15 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 d']").change(function () {
      if ($("[id='3.15 d:No assistance needed / requested']").is(":checked")) {
        $("[id ='3.15 d_notes']").html("    <label for=\"3.15 d_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 d_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 d']").change(function () {
      if ($("[id='3.15 d:Requested assistance provided']").is(":checked")) {
        $("[id ='3.15 d_notes']").html("    <label for=\"3.15 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 d']").change(function () {
      if ($("[id='3.15 d:Unable to Determine']").is(":checked")) {
        $("[id ='3.15 d_notes']").html("    <label for=\"3.15 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 d']").change(function () {
      if ($("[id='3.15 d:Request to assist denied']").is(":checked")) {
        $("[id ='3.15 d_notes']").html("    <label for=\"3.15 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 d']").change(function () {
      if ($("[id='3.15 d:Operator hesitated - assistance provided']").is(":checked")) {
        $("[id ='3.15 d_notes']").html("    <label for=\"3.15 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 d_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 e']").change(function () {
      if ($("[id='3.15 e:Customer alighted at requested location']").is(":checked")) {
        $("[id ='3.15 e_notes']").html("    <label for=\"3.15 e_text\">Notes:</label><textarea class=\"form-control\" id=\"3.15 e_text\" rows=\"3\"></textarea>");
        $("[id ='3.15 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 e']").change(function () {
      if ($("[id='3.15 e:Did not alight at requested location']").is(":checked")) {
        $("[id ='3.15 e_notes']").html("    <label for=\"3.15 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 e']").change(function () {
      if ($("[id='3.15 e:Other']").is(":checked")) {
        $("[id ='3.15 e_notes']").html("    <label for=\"3.15 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.15 e']").change(function () {
      if ($("[id='3.15 e:Unable to Determine']").is(":checked")) {
        $("[id ='3.15 e_notes']").html("    <label for=\"3.15 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.15 e_text\" rows=\"3\" required></textarea>");
        $("[id ='3.15 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 a']").change(function () {
      if ($("[id='3.16 a:Informed of pass-up cause']").is(":checked")) {
        $("[id ='3.16 a_notes']").html("    <label for=\"3.16 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.16 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.16 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 a']").change(function () {
      if ($("[id='3.16 a:Pass-up cause not stated']").is(":checked")) {
        $("[id ='3.16 a_notes']").html("    <label for=\"3.16 a_text\">Notes:</label><textarea class=\"form-control\" id=\"3.16 a_text\" rows=\"3\"></textarea>");
        $("[id ='3.16 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 a']").change(function () {
      if ($("[id='3.16 a:Unable to Determine']").is(":checked")) {
        $("[id ='3.16 a_notes']").html("    <label for=\"3.16 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.16 a_text\" rows=\"3\" required></textarea>");
        $("[id ='3.16 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 b']").change(function () {
      if ($("[id='3.16 b:Operator contacted BOC']").is(":checked")) {
        $("[id ='3.16 b_notes']").html("    <label for=\"3.16 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.16 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.16 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 b']").change(function () {
      if ($("[id='3.16 b:BOC not contacted by Operator']").is(":checked")) {
        $("[id ='3.16 b_notes']").html("    <label for=\"3.16 b_text\">Notes:</label><textarea class=\"form-control\" id=\"3.16 b_text\" rows=\"3\"></textarea>");
        $("[id ='3.16 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 b']").change(function () {
      if ($("[id='3.16 b:Unable to Determine']").is(":checked")) {
        $("[id ='3.16 b_notes']").html("    <label for=\"3.16 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.16 b_text\" rows=\"3\" required></textarea>");
        $("[id ='3.16 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 c ']").change(function () {
      if ($("[id='3.16 c :Informed of next bus']").is(":checked")) {
        $("[id ='3.16 c _notes']").html("    <label for=\"3.16 c _text\">Notes:</label><textarea class=\"form-control\" id=\"3.16 c _text\" rows=\"3\"></textarea>");
        $("[id ='3.16 c _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 c ']").change(function () {
      if ($("[id='3.16 c :Next bus information not stated']").is(":checked")) {
        $("[id ='3.16 c _notes']").html("    <label for=\"3.16 c _text\">Notes:</label><textarea class=\"form-control\" id=\"3.16 c _text\" rows=\"3\"></textarea>");
        $("[id ='3.16 c _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.16 c ']").change(function () {
      if ($("[id='3.16 c :Unable to Determine']").is(":checked")) {
        $("[id ='3.16 c _notes']").html("    <label for=\"3.16 c _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.16 c _text\" rows=\"3\" required></textarea>");
        $("[id ='3.16 c _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.17']").change(function () {
      if ($("[id='3.17: Other']").is(":checked")) {
        $("[id ='3.17_notes']").html("    <label for=\"3.17_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.17_text\" rows=\"3\" required></textarea>");
        $("[id ='3.17_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='3.17']").change(function () {
      if ($("[id='3.17: Exceeded standard for customer treatment']").is(":checked")) {
        $("[id ='3.17_notes']").html("    <label for=\"3.17_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"3.17_text\" rows=\"3\" required></textarea>");
        $("[id ='3.17_notes']").show(200);
      }
      else {
      }
   });
   
   $("#3.18-input").blur(function() {
      if (!$(this).val()) {
        $("[id ='3.18_notes']").html("    <label for=\"3.18_text\">Notes:</label><textarea class=\"form-control\" id=\"3.18_text\" rows=\"3\"></textarea>");
        $("[id ='3.18_notes']").show(200);
      }
      else {
        $("[id ='3.18_notes']").hide(200);
        $("[id ='3.18_notes']").html("");
      }
   });
   
   $("#3.19-input").blur(function() {
      if (!$(this).val()) {
        $("[id ='3.19_notes']").html("    <label for=\"3.19_text\">Notes:</label><textarea class=\"form-control\" id=\"3.19_text\" rows=\"3\"></textarea>");
        $("[id ='3.19_notes']").show(200);
      }
      else {
        $("[id ='3.19_notes']").hide(200);
        $("[id ='3.19_notes']").html("");
      }
   });
   
   $("input[name='4.1 a']").change(function () {
      if ($("[id='4.1 a:Some/no announcements made']").is(":checked")) {
          $("[id='4.03']").show(200);
        $("[id ='4.1 a_notes']").html("    <label for=\"4.1 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 a_notes']").show(200);
      }
      else {
          $("[id='4.03']").hide(200);
      }
   });
   
   $("input[name='4.1 a']").change(function () {
      if ($("[id='4.1 a:All announcements made']").is(":checked")) {
        $("[id ='4.1 a_notes']").html("    <label for=\"4.1 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.1 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.1 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 a']").change(function () {
      if ($("[id='4.1 a: Unable to determine']").is(":checked")) {
        $("[id ='4.1 a_notes']").html("    <label for=\"4.1 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 a']").change(function () {
      if ($("[id='4.1 a:Other']").is(":checked")) {
        $("[id ='4.1 a_notes']").html("    <label for=\"4.1 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 b']").change(function () {
      if ($("[id='4.1 b:Volume  too low']").is(":checked")) {
        $("[id ='4.1 b_notes']").html("    <label for=\"4.1 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 b_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 b']").change(function () {
      if ($("[id='4.1 b:Reasonable volume']").is(":checked")) {
        $("[id ='4.1 b_notes']").html("    <label for=\"4.1 b_text\">Notes:</label><textarea class=\"form-control\" id=\"4.1 b_text\" rows=\"3\"></textarea>");
        $("[id ='4.1 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 b']").change(function () {
      if ($("[id='4.1 b:Announcements too loud']").is(":checked")) {
        $("[id ='4.1 b_notes']").html("    <label for=\"4.1 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 b_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 b']").change(function () {
      if ($("[id='4.1 b:Other']").is(":checked")) {
        $("[id ='4.1 b_notes']").html("    <label for=\"4.1 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 b_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 b']").change(function () {
      if ($("[id='4.1 b: Unable to determine']").is(":checked")) {
        $("[id ='4.1 b_notes']").html("    <label for=\"4.1 b_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 b_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 b_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 c']").change(function () {
      if ($("[id='4.1 c:Announcements clear']").is(":checked")) {
        $("[id ='4.1 c_notes']").html("    <label for=\"4.1 c_text\">Notes:</label><textarea class=\"form-control\" id=\"4.1 c_text\" rows=\"3\"></textarea>");
        $("[id ='4.1 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 c']").change(function () {
      if ($("[id='4.1 c: Unable to determine']").is(":checked")) {
        $("[id ='4.1 c_notes']").html("    <label for=\"4.1 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 c']").change(function () {
      if ($("[id='4.1 c:Unclear announcements']").is(":checked")) {
        $("[id ='4.1 c_notes']").html("    <label for=\"4.1 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 c']").change(function () {
      if ($("[id='4.1 c:Other']").is(":checked")) {
        $("[id ='4.1 c_notes']").html("    <label for=\"4.1 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 d']").change(function () {
      if ($("[id='4.1 d:Made on time']").is(":checked")) {
        $("[id ='4.1 d_notes']").html("    <label for=\"4.1 d_text\">Notes:</label><textarea class=\"form-control\" id=\"4.1 d_text\" rows=\"3\"></textarea>");
        $("[id ='4.1 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 d']").change(function () {
      if ($("[id='4.1 d:Timing of announcements incorrect']").is(":checked")) {
        $("[id ='4.1 d_notes']").html("    <label for=\"4.1 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 d']").change(function () {
      if ($("[id='4.1 d:Other']").is(":checked")) {
        $("[id ='4.1 d_notes']").html("    <label for=\"4.1 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 d']").change(function () {
      if ($("[id='4.1 d: Unable to determine']").is(":checked")) {
        $("[id ='4.1 d_notes']").html("    <label for=\"4.1 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 e']").change(function () {
      if ($("[id='4.1 e:Incorrect order']").is(":checked")) {
        $("[id ='4.1 e_notes']").html("    <label for=\"4.1 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 e_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 e']").change(function () {
      if ($("[id='4.1 e:Made in correct order']").is(":checked")) {
        $("[id ='4.1 e_notes']").html("    <label for=\"4.1 e_text\">Notes:</label><textarea class=\"form-control\" id=\"4.1 e_text\" rows=\"3\"></textarea>");
        $("[id ='4.1 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 e']").change(function () {
      if ($("[id='4.1 e: Unable to determine']").is(":checked")) {
        $("[id ='4.1 e_notes']").html("    <label for=\"4.1 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 e_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.1 e']").change(function () {
      if ($("[id='4.1 e:Other']").is(":checked")) {
        $("[id ='4.1 e_notes']").html("    <label for=\"4.1 e_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.1 e_text\" rows=\"3\" required></textarea>");
        $("[id ='4.1 e_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 a']").change(function () {
      if ($("[id='4.2 a:Some/no announcements made']").is(":checked")) {
          $("[id='4.04']").show(200);
        $("[id ='4.2 a_notes']").html("    <label for=\"4.2 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 a_notes']").show(200);
      }
      else {
          $("[id='4.04']").hide(200);
      }
   });
   
   $("input[name='4.2 a']").change(function () {
      if ($("[id='4.2 a:All announcements made']").is(":checked")) {
        $("[id ='4.2 a_notes']").html("    <label for=\"4.2 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.2 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.2 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 a']").change(function () {
      if ($("[id='4.2 a: Unable to determine']").is(":checked")) {
        $("[id ='4.2 a_notes']").html("    <label for=\"4.2 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 a']").change(function () {
      if ($("[id='4.2 a:Other']").is(":checked")) {
        $("[id ='4.2 a_notes']").html("    <label for=\"4.2 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 b ']").change(function () {
      if ($("[id='4.2 b :Reasonable volume']").is(":checked")) {
        $("[id ='4.2 b _notes']").html("    <label for=\"4.2 b _text\">Notes:</label><textarea class=\"form-control\" id=\"4.2 b _text\" rows=\"3\"></textarea>");
        $("[id ='4.2 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 b ']").change(function () {
      if ($("[id='4.2 b :Volume  too low']").is(":checked")) {
        $("[id ='4.2 b _notes']").html("    <label for=\"4.2 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 b ']").change(function () {
      if ($("[id='4.2 b : Unable to determine']").is(":checked")) {
        $("[id ='4.2 b _notes']").html("    <label for=\"4.2 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 b ']").change(function () {
      if ($("[id='4.2 b :Announcements too loud']").is(":checked")) {
        $("[id ='4.2 b _notes']").html("    <label for=\"4.2 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 b ']").change(function () {
      if ($("[id='4.2 b :Other']").is(":checked")) {
        $("[id ='4.2 b _notes']").html("    <label for=\"4.2 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 c']").change(function () {
      if ($("[id='4.2 c:Announcements clear']").is(":checked")) {
        $("[id ='4.2 c_notes']").html("    <label for=\"4.2 c_text\">Notes:</label><textarea class=\"form-control\" id=\"4.2 c_text\" rows=\"3\"></textarea>");
        $("[id ='4.2 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 c']").change(function () {
      if ($("[id='4.2 c:Other']").is(":checked")) {
        $("[id ='4.2 c_notes']").html("    <label for=\"4.2 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 c']").change(function () {
      if ($("[id='4.2 c: Unable to determine']").is(":checked")) {
        $("[id ='4.2 c_notes']").html("    <label for=\"4.2 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 c']").change(function () {
      if ($("[id='4.2 c:Unclear announcements']").is(":checked")) {
        $("[id ='4.2 c_notes']").html("    <label for=\"4.2 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 d']").change(function () {
      if ($("[id='4.2 d:Made on time']").is(":checked")) {
        $("[id ='4.2 d_notes']").html("    <label for=\"4.2 d_text\">Notes:</label><textarea class=\"form-control\" id=\"4.2 d_text\" rows=\"3\"></textarea>");
        $("[id ='4.2 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 d']").change(function () {
      if ($("[id='4.2 d:Timing of announcements incorrect']").is(":checked")) {
        $("[id ='4.2 d_notes']").html("    <label for=\"4.2 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 d']").change(function () {
      if ($("[id='4.2 d: Unable to determine']").is(":checked")) {
        $("[id ='4.2 d_notes']").html("    <label for=\"4.2 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 d']").change(function () {
      if ($("[id='4.2 d:Other']").is(":checked")) {
        $("[id ='4.2 d_notes']").html("    <label for=\"4.2 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 e ']").change(function () {
      if ($("[id='4.2 e :Made in correct order']").is(":checked")) {
        $("[id ='4.2 e _notes']").html("    <label for=\"4.2 e _text\">Notes:</label><textarea class=\"form-control\" id=\"4.2 e _text\" rows=\"3\"></textarea>");
        $("[id ='4.2 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 e ']").change(function () {
      if ($("[id='4.2 e :Incorrect order']").is(":checked")) {
        $("[id ='4.2 e _notes']").html("    <label for=\"4.2 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 e ']").change(function () {
      if ($("[id='4.2 e :Other']").is(":checked")) {
        $("[id ='4.2 e _notes']").html("    <label for=\"4.2 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.2 e ']").change(function () {
      if ($("[id='4.2 e : Unable to determine']").is(":checked")) {
        $("[id ='4.2 e _notes']").html("    <label for=\"4.2 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.2 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.2 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 a']").change(function () {
      if ($("[id='4.3 a:Required/requested announcements made']").is(":checked")) {
        $("[id ='4.3 a_notes']").html("    <label for=\"4.3 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.3 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.3 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 a']").change(function () {
      if ($("[id='4.3 a: Unable to determine']").is(":checked")) {
        $("[id ='4.3 a_notes']").html("    <label for=\"4.3 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 a']").change(function () {
      if ($("[id='4.3 a:Some/no announcements made']").is(":checked")) {
        $("[id ='4.3 a_notes']").html("    <label for=\"4.3 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 a']").change(function () {
      if ($("[id='4.3 a:Other']").is(":checked")) {
        $("[id ='4.3 a_notes']").html("    <label for=\"4.3 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 b ']").change(function () {
      if ($("[id='4.3 b :Reasonable volume']").is(":checked")) {
        $("[id ='4.3 b _notes']").html("    <label for=\"4.3 b _text\">Notes:</label><textarea class=\"form-control\" id=\"4.3 b _text\" rows=\"3\"></textarea>");
        $("[id ='4.3 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 b ']").change(function () {
      if ($("[id='4.3 b :Volume  too low']").is(":checked")) {
        $("[id ='4.3 b _notes']").html("    <label for=\"4.3 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 b ']").change(function () {
      if ($("[id='4.3 b :Other']").is(":checked")) {
        $("[id ='4.3 b _notes']").html("    <label for=\"4.3 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 b ']").change(function () {
      if ($("[id='4.3 b : Unable to determine']").is(":checked")) {
        $("[id ='4.3 b _notes']").html("    <label for=\"4.3 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 c']").change(function () {
      if ($("[id='4.3 c:Announcements clear']").is(":checked")) {
        $("[id ='4.3 c_notes']").html("    <label for=\"4.3 c_text\">Notes:</label><textarea class=\"form-control\" id=\"4.3 c_text\" rows=\"3\"></textarea>");
        $("[id ='4.3 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 c']").change(function () {
      if ($("[id='4.3 c:Unclear announcements']").is(":checked")) {
        $("[id ='4.3 c_notes']").html("    <label for=\"4.3 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 c']").change(function () {
      if ($("[id='4.3 c: Unable to determine']").is(":checked")) {
        $("[id ='4.3 c_notes']").html("    <label for=\"4.3 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 c']").change(function () {
      if ($("[id='4.3 c:Other']").is(":checked")) {
        $("[id ='4.3 c_notes']").html("    <label for=\"4.3 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 d']").change(function () {
      if ($("[id='4.3 d:Made on time']").is(":checked")) {
        $("[id ='4.3 d_notes']").html("    <label for=\"4.3 d_text\">Notes:</label><textarea class=\"form-control\" id=\"4.3 d_text\" rows=\"3\"></textarea>");
        $("[id ='4.3 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 d']").change(function () {
      if ($("[id='4.3 d:Timing of announcements incorrect']").is(":checked")) {
        $("[id ='4.3 d_notes']").html("    <label for=\"4.3 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 d']").change(function () {
      if ($("[id='4.3 d:Other']").is(":checked")) {
        $("[id ='4.3 d_notes']").html("    <label for=\"4.3 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 d']").change(function () {
      if ($("[id='4.3 d: Unable to determine']").is(":checked")) {
        $("[id ='4.3 d_notes']").html("    <label for=\"4.3 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 e ']").change(function () {
      if ($("[id='4.3 e : Unable to determine']").is(":checked")) {
        $("[id ='4.3 e _notes']").html("    <label for=\"4.3 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 e ']").change(function () {
      if ($("[id='4.3 e :Incorrect order']").is(":checked")) {
        $("[id ='4.3 e _notes']").html("    <label for=\"4.3 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 e ']").change(function () {
      if ($("[id='4.3 e :Made in correct order']").is(":checked")) {
        $("[id ='4.3 e _notes']").html("    <label for=\"4.3 e _text\">Notes:</label><textarea class=\"form-control\" id=\"4.3 e _text\" rows=\"3\"></textarea>");
        $("[id ='4.3 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.3 e ']").change(function () {
      if ($("[id='4.3 e :Other']").is(":checked")) {
        $("[id ='4.3 e _notes']").html("    <label for=\"4.3 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.3 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.3 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 a']").change(function () {
      if ($("[id='4.4 a: Unable to determine']").is(":checked")) {
        $("[id ='4.4 a_notes']").html("    <label for=\"4.4 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 a']").change(function () {
      if ($("[id='4.4 a:Other']").is(":checked")) {
        $("[id ='4.4 a_notes']").html("    <label for=\"4.4 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 a']").change(function () {
      if ($("[id='4.4 a:Requested/required announcements made']").is(":checked")) {
        $("[id ='4.4 a_notes']").html("    <label for=\"4.4 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.4 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.4 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 a']").change(function () {
      if ($("[id='4.4 a:Some/no announcements made']").is(":checked")) {
        $("[id ='4.4 a_notes']").html("    <label for=\"4.4 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 b ']").change(function () {
      if ($("[id='4.4 b :Volume  too low']").is(":checked")) {
        $("[id ='4.4 b _notes']").html("    <label for=\"4.4 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 b ']").change(function () {
      if ($("[id='4.4 b : Unable to determine']").is(":checked")) {
        $("[id ='4.4 b _notes']").html("    <label for=\"4.4 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 b ']").change(function () {
      if ($("[id='4.4 b :Other']").is(":checked")) {
        $("[id ='4.4 b _notes']").html("    <label for=\"4.4 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 b ']").change(function () {
      if ($("[id='4.4 b :Reasonable volume']").is(":checked")) {
        $("[id ='4.4 b _notes']").html("    <label for=\"4.4 b _text\">Notes:</label><textarea class=\"form-control\" id=\"4.4 b _text\" rows=\"3\"></textarea>");
        $("[id ='4.4 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 c']").change(function () {
      if ($("[id='4.4 c:Unable to determine']").is(":checked")) {
        $("[id ='4.4 c_notes']").html("    <label for=\"4.4 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 c']").change(function () {
      if ($("[id='4.4 c:Unclear announcements']").is(":checked")) {
        $("[id ='4.4 c_notes']").html("    <label for=\"4.4 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 c']").change(function () {
      if ($("[id='4.4 c:Announcements clear']").is(":checked")) {
        $("[id ='4.4 c_notes']").html("    <label for=\"4.4 c_text\">Notes:</label><textarea class=\"form-control\" id=\"4.4 c_text\" rows=\"3\"></textarea>");
        $("[id ='4.4 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 c']").change(function () {
      if ($("[id='4.4 c:Other']").is(":checked")) {
        $("[id ='4.4 c_notes']").html("    <label for=\"4.4 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 d']").change(function () {
      if ($("[id='4.4 d:Made on time']").is(":checked")) {
        $("[id ='4.4 d_notes']").html("    <label for=\"4.4 d_text\">Notes:</label><textarea class=\"form-control\" id=\"4.4 d_text\" rows=\"3\"></textarea>");
        $("[id ='4.4 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 d']").change(function () {
      if ($("[id='4.4 d:Timing of announcements incorrect']").is(":checked")) {
        $("[id ='4.4 d_notes']").html("    <label for=\"4.4 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 d']").change(function () {
      if ($("[id='4.4 d: Unable to determine']").is(":checked")) {
        $("[id ='4.4 d_notes']").html("    <label for=\"4.4 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 d']").change(function () {
      if ($("[id='4.4 d:Other']").is(":checked")) {
        $("[id ='4.4 d_notes']").html("    <label for=\"4.4 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 e ']").change(function () {
      if ($("[id='4.4 e :Made in correct order']").is(":checked")) {
        $("[id ='4.4 e _notes']").html("    <label for=\"4.4 e _text\">Notes:</label><textarea class=\"form-control\" id=\"4.4 e _text\" rows=\"3\"></textarea>");
        $("[id ='4.4 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 e ']").change(function () {
      if ($("[id='4.4 e :Incorrect order']").is(":checked")) {
        $("[id ='4.4 e _notes']").html("    <label for=\"4.4 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 e ']").change(function () {
      if ($("[id='4.4 e : Unable to determine']").is(":checked")) {
        $("[id ='4.4 e _notes']").html("    <label for=\"4.4 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.4 e ']").change(function () {
      if ($("[id='4.4 e :Other']").is(":checked")) {
        $("[id ='4.4 e _notes']").html("    <label for=\"4.4 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.4 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.4 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 a']").change(function () {
      if ($("[id='4.5 a:Rear sign']").is(":checked")) {
        $("[id ='4.5 a_notes']").html("    <label for=\"4.5 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 a']").change(function () {
      if ($("[id='4.5 a:Middle sign']").is(":checked")) {
        $("[id ='4.5 a_notes']").html("    <label for=\"4.5 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 a']").change(function () {
      if ($("[id='4.5 a:Front sign']").is(":checked")) {
        $("[id ='4.5 a_notes']").html("    <label for=\"4.5 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 a']").change(function () {
      if ($("[id='4.5 a:N/A']").is(":checked")) {
        $("[id ='4.5 a_notes']").html("    <label for=\"4.5 a_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 a_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 a']").change(function () {
      if ($("[id='4.5 a:Other']").is(":checked")) {
        $("[id ='4.5 a_notes']").html("    <label for=\"4.5 a_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 a_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 a_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 b ']").change(function () {
      if ($("[id='4.5 b :No information displayed']").is(":checked")) {
        $("[id ='4.5 b _notes']").html("    <label for=\"4.5 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 b ']").change(function () {
      if ($("[id='4.5 b :Some information displayed']").is(":checked")) {
        $("[id ='4.5 b _notes']").html("    <label for=\"4.5 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 b ']").change(function () {
      if ($("[id='4.5 b :Required information displayed']").is(":checked")) {
        $("[id ='4.5 b _notes']").html("    <label for=\"4.5 b _text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 b _text\" rows=\"3\"></textarea>");
        $("[id ='4.5 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 b ']").change(function () {
      if ($("[id='4.5 b :N/A']").is(":checked")) {
        $("[id ='4.5 b _notes']").html("    <label for=\"4.5 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 b ']").change(function () {
      if ($("[id='4.5 b : Unable to determine']").is(":checked")) {
        $("[id ='4.5 b _notes']").html("    <label for=\"4.5 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 b ']").change(function () {
      if ($("[id='4.5 b :Other']").is(":checked")) {
        $("[id ='4.5 b _notes']").html("    <label for=\"4.5 b _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 b _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 b _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 c']").change(function () {
      if ($("[id='4.5 c:N/A']").is(":checked")) {
        $("[id ='4.5 c_notes']").html("    <label for=\"4.5 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 c']").change(function () {
      if ($("[id='4.5 c:Unable to determine']").is(":checked")) {
        $("[id ='4.5 c_notes']").html("    <label for=\"4.5 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 c']").change(function () {
      if ($("[id='4.5 c:None or some of the time']").is(":checked")) {
        $("[id ='4.5 c_notes']").html("    <label for=\"4.5 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 c']").change(function () {
      if ($("[id='4.5 c:All the time']").is(":checked")) {
        $("[id ='4.5 c_notes']").html("    <label for=\"4.5 c_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 c_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 c']").change(function () {
      if ($("[id='4.5 c:Other']").is(":checked")) {
        $("[id ='4.5 c_notes']").html("    <label for=\"4.5 c_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 c_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 c_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 d']").change(function () {
      if ($("[id='4.5 d: On time']").is(":checked")) {
        $("[id ='4.5 d_notes']").html("    <label for=\"4.5 d_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 d_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 d']").change(function () {
      if ($("[id='4.5 d: Not displayed on time']").is(":checked")) {
        $("[id ='4.5 d_notes']").html("    <label for=\"4.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 d']").change(function () {
      if ($("[id='4.5 d: Unable to determine']").is(":checked")) {
        $("[id ='4.5 d_notes']").html("    <label for=\"4.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 d']").change(function () {
      if ($("[id='4.5 d:N/A']").is(":checked")) {
        $("[id ='4.5 d_notes']").html("    <label for=\"4.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 d']").change(function () {
      if ($("[id='4.5 d:Other']").is(":checked")) {
        $("[id ='4.5 d_notes']").html("    <label for=\"4.5 d_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 d_text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 d']").change(function () {
      if ($("[id='4.5 d:Correct Order']").is(":checked")) {
        $("[id ='4.5 d_notes']").html("    <label for=\"4.5 d_text\">Notes:</label><textarea class=\"form-control\" id=\"4.5 d_text\" rows=\"3\"></textarea>");
        $("[id ='4.5 d_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 e ']").change(function () {
      if ($("[id='4.5 e :Incorrect order']").is(":checked")) {
        $("[id ='4.5 e _notes']").html("    <label for=\"4.5 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 e ']").change(function () {
      if ($("[id='4.5 e :Unable to determine']").is(":checked")) {
        $("[id ='4.5 e _notes']").html("    <label for=\"4.5 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 e ']").change(function () {
      if ($("[id='4.5 e :N/A']").is(":checked")) {
        $("[id ='4.5 e _notes']").html("    <label for=\"4.5 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='4.5 e ']").change(function () {
      if ($("[id='4.5 e :Other']").is(":checked")) {
        $("[id ='4.5 e _notes']").html("    <label for=\"4.5 e _text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"4.5 e _text\" rows=\"3\" required></textarea>");
        $("[id ='4.5 e _notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.01']").change(function () {
      if ($("[id='5.01: Did not wear seat belt']").is(":checked")) {
        $("[id ='5.01_notes']").html("    <label for=\"5.01_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.01_text\" rows=\"3\" required></textarea>");
        $("[id ='5.01_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.01']").change(function () {
      if ($("[id='5.01: Worn at all times']").is(":checked")) {
        $("[id ='5.01_notes']").html("    <label for=\"5.01_text\">Notes:</label><textarea class=\"form-control\" id=\"5.01_text\" rows=\"3\"></textarea>");
        $("[id ='5.01_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.01']").change(function () {
      if ($("[id='5.01: Unable to determine']").is(":checked")) {
        $("[id ='5.01_notes']").html("    <label for=\"5.01_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.01_text\" rows=\"3\" required></textarea>");
        $("[id ='5.01_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.01']").change(function () {
      if ($("[id='5.01:Other']").is(":checked")) {
        $("[id ='5.01_notes']").html("    <label for=\"5.01_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.01_text\" rows=\"3\" required></textarea>");
        $("[id ='5.01_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.02']").change(function () {
      if ($("[id='5.02:No usage observed']").is(":checked")) {
        $("[id ='5.02_notes']").html("    <label for=\"5.02_text\">Notes:</label><textarea class=\"form-control\" id=\"5.02_text\" rows=\"3\"></textarea>");
        $("[id ='5.02_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.02']").change(function () {
      if ($("[id='5.02: Operator observed using electronic device']").is(":checked")) {
        $("[id ='5.02_notes']").html("    <label for=\"5.02_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.02_text\" rows=\"3\" required></textarea>");
        $("[id ='5.02_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.02']").change(function () {
      if ($("[id='5.02:Other']").is(":checked")) {
        $("[id ='5.02_notes']").html("    <label for=\"5.02_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.02_text\" rows=\"3\" required></textarea>");
        $("[id ='5.02_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.02']").change(function () {
      if ($("[id='5.02: Unable to determine']").is(":checked")) {
        $("[id ='5.02_notes']").html("    <label for=\"5.02_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.02_text\" rows=\"3\" required></textarea>");
        $("[id ='5.02_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.03']").change(function () {
      if ($("[id='5.03:Operator operated bus safely at all times']").is(":checked")) {
        $("[id ='5.03_notes']").html("    <label for=\"5.03_text\">Notes:</label><textarea class=\"form-control\" id=\"5.03_text\" rows=\"3\"></textarea>");
        $("[id ='5.03_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.03']").change(function () {
      if ($("[id='5.03: Unable to determine']").is(":checked")) {
        $("[id ='5.03_notes']").html("    <label for=\"5.03_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.03_text\" rows=\"3\" required></textarea>");
        $("[id ='5.03_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.03']").change(function () {
      if ($("[id='5.03: Operator ran a red light / stop sign']").is(":checked")) {
        $("[id ='5.03_notes']").html("    <label for=\"5.03_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.03_text\" rows=\"3\" required></textarea>");
        $("[id ='5.03_notes']").show(200);
      }
      else {
      }
   });
   
   $("input[name='5.03']").change(function () {
      if ($("[id='5.03:Other']").is(":checked")) {
        $("[id ='5.03_notes']").html("    <label for=\"5.03_text\"><span id=\"required\">*</span> Notes:</label><textarea class=\"form-control\" id=\"5.03_text\" rows=\"3\" required></textarea>");
        $("[id ='5.03_notes']").show(200);
      }
      else {
      }
   });   

});

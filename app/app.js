// Global Vars
let inputValues = document.getElementsByTagName("input");

function eraseErrorMessages() {
  $(".inputArea").each(function (index, element) {
    // console.log(element);
    // Uncomment code after you are done
    $("p").html("");
  });
}

function checkFormInputs() {
  // Form Values
  let firstName = $("#firstname").val();
  let lastName = $("#lastname").val();
  let email = $("#email").val();
  let radioVal = $("input[name=query-type]:checked").val();
  let message = $(".inputArea textarea").val();
  let checkBox = $("#consent");

  // Clear any previous error messages
  eraseErrorMessages();

  // Check Input
  if (firstName != "") {
    console.log("First Name Input:", firstName);
  } else {
    console.log("No Name Entered.");
    $(".fn p").append("This field is required");
  }
  if (lastName != "") {
    console.log("Last Name Input:", lastName);
  } else {
    console.log("No Name Entered.");
    $(".ln p").append("This field is required");
  }
  if (message != "") {
    console.log("Text Message:", message);
  } else {
    console.log("Empty Text");
    $(".ms p").append("This field is required");
  }

  if (radioVal != undefined) {
    console.log("Query Selected:", radioVal);
  } else {
    console.log("Please select a query type.");
    $(".radio p").append("Please select a query type");
  }

  if (checkBox[0].checked == false) {
    console.log("To submit this form, please consent to being contacted");
    $(".checkBoxInputArea p").append(
      "To submit this form, please consent to being contacted",
    );
  } else {
    console.log("Box Checked!");
  }
}

// Init Listerners
function initListeners() {
  $(".submitBTN").on("click", function () {
    console.log("Submit Button Clicked");

    checkFormInputs();

    $(window).on("load", function () {
      console.log("Ready");
      $(".messageBox").css({ display: "flex" });
    });
  });

  console.log("Listening...");
  eraseErrorMessages();
  console.log(inputValues);
}

$(document).ready(function () {
  initListeners();
});

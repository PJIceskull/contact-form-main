// Global Vars
let inputValues = document.getElementsByTagName("input");

function eraseErrorMessages() {
  $(".inputArea").each(function (index, element) {
    // console.log(element);
    // Uncomment code after you are done
    $(".invalidText").html("");
  });
}

function checkFormInputs() {
  // Form Values
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  let email = document.getElementById("email");
  // let radioVal = $("input[name=query-type]:checked").val();
  let radioVal = $("input[name=query-type]:checked").val();
  let message = document.getElementById("message");
  let checkBox = document.getElementById("consent");

  // Clear any previous error messages
  eraseErrorMessages();
  // Example of checking validity of input
  console.log("First name input:", firstName.checkValidity());

  // Check Input
  if (firstName.checkValidity() === true) {
    console.log("First Name Input:", firstName);
    $(".fn .invalidText").html();
  } else {
    console.log("No First Name Entered.");
    $(".fn .invalidText").append("This field is required");
  }
  if (lastName.checkValidity() === true) {
    console.log("Last Name Input:", lastName);
    $(".ln .invalidText").html();
  } else {
    console.log("No Last Name Entered.");
    $(".ln .invalidText").append("This field is required");
  }
  // Check if Email is valid
  if (email.checkValidity() === true) {
    console.log("Please enter a valid email address");
    $(".em .invalidText").append("Please enter a valid email address");
  }
  if (message.checkValidity() === true) {
    console.log("Text Message:", message);
  } else {
    console.log("Empty Text");
    $(".ms .invalidText").append("This field is required");
  }

  if (radioVal != undefined) {
    console.log("Query Selected:", radioVal);
  } else {
    console.log("Please select a query type.");
    $(".radio .invalidText").append("Please select a query type");
  }

  if (checkBox.checkValidity() === true) {
    console.log("Box Checked!");
  } else {
    console.log("To submit this form, please consent to being contacted");
    $(".checkBoxInputArea .invalidText").append(
      "To submit this form, please consent to being contacted",
    );
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

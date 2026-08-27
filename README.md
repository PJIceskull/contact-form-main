# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/PJIceskull/contact-form-main](https://github.com/PJIceskull/contact-form-main)
- Live Site URL: [https://pjiceskull.github.io/contact-form-main/](https://pjiceskull.github.io/contact-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [SASS](https://sass-lang.com/) - CSS prepocessor language.
- Javascript
- [Jquery](https://jquery.com/) - Javascript Library

### What I learned

This challenge served as a nice refresher of working with Form elements. During development, I relearn basic concepts like the `e.preventDefault`, DOM using JavaScripts, and using `for loop` functions. I also learn how to check the error status of my input elements using `checkValidity()`. Of course, on the CSS I learned how to created **basic animation for elements that aren't hover states**! Additionally, I learn how style form elements like the _textarea_, _radio_ buttons, and _checkbox_ elements.

Some HTML code I'm proud of:

```html
<fieldset class="radio">
  <legend>Query Type <span>*</span></legend>
  <div class="wrapper">
    <label for="generalEnquiry" class="radioGroup">
      <input
        type="radio"
        name="query-type"
        id="generalEnquiry"
        value="generalEnquiry"
        required
      />
      General Enquiry
    </label>
    <label for="supportRequest" class="radioGroup">
      <input
        type="radio"
        name="query-type"
        id="supportRequest"
        value="supportRequest"
        required
      />
      Support Request
    </label>
  </div>
</fieldset>
```

CSS:

```css
@keyframes SlideDown {
  0% {
    top: -150px;
  }
  100% {
    top: 0;
  }
}
```

```scss
$webColors: (
  "red": hsl(0, 66%, 54%),
  "Green-light": hsl(148, 38%, 91%),
  "Green-medium": hsl(169, 82%, 27%),
  "white": hsl(0, 0%, 100%),
  "grey-medium": hsl(186, 15%, 59%),
  "grey-dark": hsl(187, 24%, 22%),
);
```

```css
.checkBoxGroup {
  input {
    width: 18px;
    height: 18px;
    appearance: none;
    padding: 0;
    border-radius: 2px;
    &:checked {
      background-image: url("../assets/images/icon-checkbox-check.svg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border: none;
    }
  }
}
```

JavaScript:

```js
if (firstName.checkValidity() === true) {
  console.log("First Name Input:", firstName);
  $(".fn .invalidText").html();
} else {
  console.log("No First Name Entered.");
  $(".fn .invalidText").append("This field is required");
}
```

```js
for (let i = 0; i < inputValues.length; i++) {
  if (inputValues[i].checkValidity() === false) {
    hasError = true;
    console.log("Form Inputs Invalid!");
    break;
  } else {
    hasError = false;
    console.log("Form Input Valid!");
  }
}
```

```js
if (hasError === false) {
  scroll(0, 0);
  document.querySelector("form").reset();
  $(".messageBox").css({ display: "flex" });
}
```

### Continued development

I'm curious on learning more about `for Loop`s and `if` statements. I feel that I could have make my JS code cleaner by using a for loop intend for repeating writing `ifelse` statements. I may also consider sticking with vanilla JS intend using JQuery, since I ran to many issues when certain JS cmds were incompatiable with my Jquery code.

### Useful resources

- [W3schools](https://www.w3schools.com/TAGs/att_input_type_radio.asp)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
  - [Using the `:checked` class property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:checked)
  - [Textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea)
- [Stack Overflow](https://stackoverflow.com/questions)
  - [Styling Radio buttons using Images ex.1](https://stackoverflow.com/questions/17541614/use-images-instead-of-radio-buttons)
  - [Styling Radio buttons using Images ex.2](https://stackoverflow.com/questions/17541614/use-images-instead-of-radio-buttons)

### AI Collaboration

_Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants._

- **GitHub Copilot**
  - Use mainly for autosuggestion and autocomplete for code.

  I mainly found Copilot more useful in my Javascript where I had less knowledge in what I was doing. Copilot would suggest code ideas when I was typing. However whether the code suggested was useful tended to be a coin-flip.
  Overall, I found using Copilot to be more annoying when coding due to it's quirks. When it suggests code when I'm already typing, it makes my code & window sloppy to look at. Additionally, it sometiems forgets an ending "}" or ";" for it's suggestions which mess with your code if you are not careful. Another personal gripe I had using Copilot is I like to use VSCode's autocomplete list shortcut (`ctrl+space`) when coding. However since Copilot takes priority, I have manually use the shortcode which slows down my coding. This is especially annoying when I'm writing my CSS.

## Author

- Website - [Pierce Issah](https://pjiceskull.github.io/WebPorfolio)
- Frontend Mentor - [@PJIceskull](https://www.frontendmentor.io/profile/PJIceskull)
- Twitter - [@Pierce24I](https://twitter.com/pierce24i)

## Acknowledgments

- **Chamu / @chamu_k_m** from [Frontend Mentor Community Discord](https://discord.gg/UAfh3qzhYb)

Gave me advice on how to make my HTML code more accessibile and what sematic elements I should use. Also gave me advice on how I should code displaying my success message.

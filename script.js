`use strict`;

const validEmail =
  /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const input1 = document.querySelector(`#email-1`);
const input2 = document.querySelector(`#email-2`);
const error1 = document.querySelector(`#error1`);
const error2 = document.querySelector(`#error2`);
const form1 = document.querySelector(`#form-1`);
const form2 = document.querySelector(`#footer-form`);

form1.addEventListener(`submit`, function (event) {
  if (input1.value.match(validEmail)) {
    input1.style.border = `0.625px solid #07043b`;
    error1.style.display = `none`;
  } else {
    input1.style.border = `0.625px solid #EF4877`;
    error1.style.display = `block`;
    event.preventDefault();
    return false;
  }
});
form2.addEventListener(`submit`, function (event) {
  if (input2.value.match(validEmail)) {
    input2.style.border = `0.625px solid #07043b`;
    error2.style.display = `none`;
  } else {
    input2.style.border = `0.625px solid #EF4877`;
    error2.style.display = `block`;
    event.preventDefault();
    return false;
  }
});

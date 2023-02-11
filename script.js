`use strict`;

const validEmail =
  /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const input1 = document.querySelector(`#email-1`);
const input2 = document.querySelector(`#email-2`);
const error1 = document.querySelector(`#error1`);
const error2 = document.querySelector(`#error2`);
const submit1 = document.querySelector(`#submit-1`);
const submit2 = document.querySelector(`#submit-2`);

submit1.addEventListener(`click`, () => {
  validateEmail(input1, error1);
});
submit2.addEventListener(`click`, () => {
  validateEmail(input2, error2);
});

function validateEmail(x, y) {
  if (x.value.match(validEmail)) {
    x.style.border = `0.625px solid #07043b`;
    y.style.display = `none`;
    return true;
  } else {
    x.style.border = `0.625px solid #EF4877`;
    y.style.display = `block`;
    return false;
  }
}

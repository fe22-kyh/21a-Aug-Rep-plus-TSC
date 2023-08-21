const el = (ref) => document.querySelector(ref);

// Alternativ 2
/* Ingång till lösningsförslag */
const validations = [
  { // Object literal
    name: "title",
    ref: '.title-field',
    verify: () => el('.title-field').value !== 'Title'
  },
  {
    name: "firstName",
    ref: '.fName-field',
    verify: () => el('.fName-field').value.length > 2
  },
  {
    name: "lastName",
    ref: '.lName-field',
    verify: () => el('.lName-field').value.length > 2
  },
  {
    name: "email",
    ref: '.email-field',
    verify: () => el('.email-field').value.includes('@')
  },
  {
    name: "phone",
    ref: '.phone-field',
    verify: () => Number.isInteger(el('.phone-field').value.replace(" ", ""))
  },
  {
    name: "password",
    ref: '.password-field',
    verify: () => el('.password-field').value.length > 3
  },
  {
    name: "repassword",
    ref: '.repassword-field',
    verify: () => el('.repassword-field').value === el('.password-field').value
  }
];


function handleSubmit(event) {
  event.preventDefault();
  let validationErrors = 0;
  let formValue = {};

  for(let validation of validations) {
    if(!validation.verify()) {
      validationErrors += 1;
      el(validation.ref).style.backgroundColor = 'red';
    }
    formValue[validation.name] = el(validation.ref).value;
  }

  if(validationErrors > 0) return false;

  console.table(formValue);
}
el('.club-form').addEventListener('submit', handleSubmit);
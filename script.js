form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('button clicked');

  formValidation();
});

let formValidation = () => {
  if (input.value === '') {
    msg.innerHTML = 'Post cannot be blank';
    console.log('failure');
  } else {
    console.log('successs');
    msg.innerHTML = '';
  }
};

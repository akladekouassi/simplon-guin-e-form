function validateForm() {
  const userNameInput = document.getElementById('username');
  const userNameError = document.getElementById('username-error');

  if (userNameInput.value === '') {
    userNameError.textContent = 'Le champ ne doit pas être vide';

    return false;
  }

  return false;
}

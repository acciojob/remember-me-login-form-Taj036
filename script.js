//your JS code here. If required.
let submitBtn = document.getElementById('form');
let existingBtn = document.getElementById('existing');
submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  // Move the variable assignments inside the event listener
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  const rememberCheckbox = document.getElementById('checkbox');

  if (rememberCheckbox.checked) {
    localStorage.setItem(`${username}`, `${password}`);
    alert(`Logged in as ${username}`);
  }
});
function loginAsExistingUser() {
  let savedUsername = localStorage.getItem('username');
  alert(`Logged in as ${savedUsername}`);
}
function showExistingButton() {
  existingBtn.style.display = 'block';
}
existingBtn.addEventListener('click', loginAsExistingUser);
window.onload = checkForExistingDetails;
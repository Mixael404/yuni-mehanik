const logoReset = document.querySelector('.logo_reset');
const logoInput = document.getElementById('logo-input');
const logoWrapper = document.getElementById('logo-preview');

const previewPhoto = () => {
  const file = logoInput.files;
  if (file) {
      const fileReader = new FileReader();
      fileReader.onload = event => {
        logoWrapper.src = event.target.result;
      }
      fileReader.readAsDataURL(file[0]);
  }
}

logoInput.addEventListener('change', previewPhoto);

logoReset.addEventListener('click', () => {
  logoWrapper.src = '../practice-1/assets/images/logo-placeholder.png'
  logoInput.value = ''
})

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal__bg')){
    modal.classList.add("hidden");
  }
})
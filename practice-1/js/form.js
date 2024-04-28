const showModal = document.getElementById("show-modal");
const modal = document.querySelector(".modal__bg");
const form = document.querySelector('form');
const submit = document.querySelector('.modal__submit');
const cancel = document.querySelector(".modal__cancel");

const emailInput = form.querySelector('#email')
const phoneInput = form.querySelector('#phone')
const domainInput = form.querySelector('#domain')
const websiteInput = form.querySelector('#web')
const vkInput = form.querySelector('#vk')
const okInput = form.querySelector('#ok')
const facebookInput = form.querySelector('#facebook')
const instagramInput = form.querySelector('#instagram')
const youtubeInput = form.querySelector('#youtube')
const leaderInput = form.querySelector('#leader')

const validation = new Validation()
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = []
    results.push(validation.validate(emailInput.value, [validation.isEmail.bind(validation)]))
    results.push(validation.validate(phoneInput.value, [validation.isPhone.bind(validation)]))
    results.push(validation.validate(domainInput.value, [validation.isSelected.bind(validation)]))
    results.push(validation.validate(websiteInput.value, [validation.isWebsite.bind(validation)]))
    results.push(validation.validate(vkInput.value, [validation.isVk.bind(validation)]))
    results.push(validation.validate(okInput.value, [validation.isOk.bind(validation)]))
    results.push(validation.validate(facebookInput.value, [validation.isFacebook.bind(validation)]))
    results.push(validation.validate(instagramInput.value, [validation.isInstagram.bind(validation)]))
    results.push(validation.validate(youtubeInput.value, [validation.isYoutube.bind(validation)]))
    results.push(validation.validate(leaderInput.value, [validation.isLead.bind(validation)]))
    
    if(results.includes(false)){
        alert('Ошибка ввода!')
    } else{
        alert('Отправлено!')
    }
})

showModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cancel.addEventListener("click", () => {
    modal.classList.add('hidden');
})
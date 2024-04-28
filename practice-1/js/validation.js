class Validation{
    constructor(){
        this.email = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
        this.website = /[a-z0-9-.].[a-z]/
        this.vk = /vk.com\/[a-z0-9]/
        this.ok = /ok.com\/[a-z0-9]/
        this.facebook = /facebook.com\/[a-z0-9]/
        this.instagram = /instagram.com\/[a-z0-9]/
        this.youtube = /youtube.com\/[a-z0-9]/
        this.lead = /^[a-zA-Zа-яА-Я ]+$/

        this.formattedPhone = /^\+\d\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/
    }

    validate(value, validators=[]){
        for (const validator of validators) {
            const result = validator(value)
            if(!result) return false
        }
        return true
    }

    isEmail(value){
        if(!this.email.test(value)) return false
        return true
    }
    isPhone(value){
        const simplePhone = /^\d{11}$/
        if(this.formattedPhone.test(value) || simplePhone.test(value)) return true
        return false
    }

    isWebsite(value){
        if(value.trim() === '') return true
        if(!this.website.test(value)) return false
        return true
    }
    isVk(value){
        if(value.trim() === '') return true
        if(!this.vk.test(value)) return false
        return true
    }
    isOk(value){
        if(value.trim() === '') return true
        if(!this.ok.test(value)) return false
        return true
    }
    isFacebook(value){
        if(value.trim() === '') return true
        if(!this.facebook.test(value)) return false
        return true
    }
    isInstagram(value){
        if(value.trim() === '') return true
        if(!this.instagram.test(value)) return false
        return true
    }
    isYoutube(value){
        if(value.trim() === '') return true
        if(!this.youtube.test(value)) return false
        return true
    }
    isLead(value){
        if(value.trim() === '') return true
        if(!this.lead.test(value)) return false
        return true
    }

    isSelected(value){
        if(value.trim() === '')  return false
        return true
    }

}

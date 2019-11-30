import Vue from 'vue'
import { ValidationProvider, extend, configure } from 'vee-validate'
import VueI18n from 'vue-i18n'
import id from 'vee-validate/dist/locale/id.json'
import en from 'vee-validate/dist/locale/en.json'
import { required, email } from 'vee-validate/dist/rules'

Vue.use(VueI18n)
const enCustomMessage = {
  strong_password: 'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)'
}
const idCustomMessage = {
  strong_password: 'Kata sandi harus menggunakan setidaknya: 1 huruf besar, 1 huruf kecil, 1 angka, dan satu karakter khusus (Contoh , . _ & ? )'
}

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  messages: {
    id: {
      fields: {
        name: 'Nama',
        email: 'Email',
        password: 'Kata sandi',
        phone: 'No. Hp'
      },
      validation: Object.assign({}, id.messages, idCustomMessage)
    },
    en: {
      fields: {
        name: 'Name',
        email: 'E-mail',
        password: 'Password',
        phone: 'Phone number'
      },
      validation: Object.assign({}, en.messages, enCustomMessage)
    }
  }
})

configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`)
    return i18n.t(`validation.${values._rule_}`, values)
  }
})

extend('required', required)

extend('email', email)

extend('strong_password', {
  validate: value => {
    var strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})')
    return strongRegex.test(value)
  }
})

Vue.component('ValidationProvider', ValidationProvider)

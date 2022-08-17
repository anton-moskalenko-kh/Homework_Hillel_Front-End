class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor(...args) {
        super(...args);
        this.form = document.querySelector('.form')
    }

    createTextElement(placeholder, clue) {
        this.placeholder = placeholder;
        return this.form.insertAdjacentHTML('beforeend', `
             <div class="block__input">
                <input class="text__input" data-valid = false name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" value="${this.value}">
                <span class="clue">${clue}</span> 
            </div>
        `)
    }
}

class CheckboxElement extends TextElement {
    constructor(...args) {
        super(...args);
    }
    createCheckboxElement (checked) {
        this.checked = checked;
        return this.form.insertAdjacentHTML('beforeend', `
        <div>
            <input name="${this.name}" type="${this.type}" ${this.checked ? 'checked="true"' : ''} id="checkbox" class="checkbox"
            ${this.checked ? 'data-valid = "true"' : 'data-valid = "false"'}>
            <label for="checkbox"> 
                Agree to terms and conditions
            </label>
        </div>
        `)
    }
}

class ButtonElement extends TextElement {
    constructor(...args) {
        super(...args);
        this.form = document.querySelector('.form')
    }
    createButton () {
       return this.form.insertAdjacentHTML('beforeend', `
        <button name="${this.name}" data-valid = 'true' type="${this.type}" value="${this.value}" class="btn__form" disabled>Register</button>
        `)
    }
}

const name = new TextElement("name", "text", '')
name.createTextElement("Ваше имя", "Только латинские буквы");

const email = new TextElement("email", "text", '')
email.createTextElement("Your email", "name@gmail.com")

const password = new TextElement("password", "password", '')
password.createTextElement("Пароль", "Должен содержать минимум 6 символов, цифру, 1 заглавную и строчку букву")

const repeatedPassword = new TextElement("repeatedPassword", "password", '')
repeatedPassword.createTextElement("Repeat your password", "Повторно введите пароль")

const checkbox = new CheckboxElement("checkbox", "checkbox", '')
checkbox.createCheckboxElement(true)

const button = new ButtonElement("button", "submit")
button.createButton()


class FormValidate {
    constructor(form) {
        this.form = form;
        this.elements = form.elements;
    }

    checkInputText (inputName) {
        const inputText = document.querySelector(`input[name="${inputName}"]`)
        const regExpText = /^(?=.*?[A-Za-z])[A-Za-z+]+$/
        inputText.addEventListener('input', function () {
            if (regExpText.test(this.value)) {
                this.style.borderColor = "green"
                this.dataset.valid = 'true';
            } else {
                this.style.borderColor = "red"
                this.dataset.valid = 'false';
                return false
            }
        })
    }

    checkEmail (inputName) {
        const inputEmail = document.querySelector(`input[name="${inputName}"]`)
        const regExpEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        inputEmail.addEventListener('input', function () {
            if (regExpEmail.test(this.value)) {
                this.style.borderColor = "green"
                this.dataset.valid = 'true';
            } else {
             this.style.borderColor = "red";
             this.dataset.valid = 'false';
                return false
            }
        })
    }

    checkPasswords (namePassword, nameRepeatedPassword) {
        const inputPassword = document.querySelector(`input[name="${namePassword}"]`)
            const regExpPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
            inputPassword.addEventListener('input', function () {
                if (regExpPassword.test(this.value)) {
                    this.style.borderColor = "green"
                    this.dataset.valid = 'true';
                } else {
                    this.style.borderColor = "red"
                    this.dataset.valid = 'false';
                    return false
                }
        })

        const secondPassword = document.querySelector(`input[name="${nameRepeatedPassword}"]`)
            secondPassword.addEventListener('input', function () {
                if (this.value === inputPassword.value) {
                    this.style.borderColor = "green"
                    this.dataset.valid = 'true';
                } else {
                    this.style.borderColor = "red"
                    this.dataset.valid = 'false';
                    return false
                }
            })
    }

    checkCheckbox (name) {
        const checkbox = document.querySelector(`input[name="${name}"]`)
        checkbox.addEventListener('input', function () {
            if (checkbox.checked) {
                checkbox.dataset.valid = 'true';
            } else {
                checkbox.dataset.valid = 'false';
            }
        })
    }

    checkButton (inputName) {
        const formInput = this.elements
        const button = document.querySelector(`button[name="${inputName}"]`)
        this.form.addEventListener('input', function () {
            for (let i = 0; i < formInput.length; i++) {
                if (formInput[i].dataset.valid === 'false') {
                    button.disabled = true
                    break;
                } else {
                    button.disabled = false
                }
            }
        })
    }
}

const validation = new FormValidate(document.querySelector('.form'))
validation.checkInputText("name")
validation.checkEmail("email")
validation.checkPasswords("password", "repeatedPassword")
validation.checkCheckbox("checkbox")
validation.checkButton("button")

const btn = document.querySelector('.btn__form')
btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log({
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        password: document.querySelector('input[name="password"]').value,
        repeatedPassword: document.querySelector('input[name="repeatedPassword"]').value,
    })
})
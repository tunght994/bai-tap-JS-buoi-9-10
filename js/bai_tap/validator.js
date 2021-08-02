function Validator(options) {

    var formElement = document.querySelector(options.form)

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)
        var errorElements = formElement.querySelectorAll(options.error)
        errorElements.forEach((errorElement) => {
                if (errorMessage) {
                    errorElement.innerText = errorMessage
                    errorElement.style.display = 'block'
                }
        })
    }
    if (formElement) {
        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                inputElement.oninput = function () {
                    var errorElements = formElement.querySelectorAll(options.error)
                    errorElements.forEach((errorElement) => {
                        errorElement.innerText = ''
                        errorElement.style.display = 'none'
                    })
                }
            }
        })
    }
}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui long nhap truong nay'
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regax.test(value) ? undefined : message || 'Vui long nhap dung dinh dang'
        }
    }
}

Validator.minMaxLength = function (selector, min , max ,message) {
    return {
        selector: selector,
        test: function (value){
            return value.length >= min && value.length <= max ? undefined : message || 'Vui long nhap dung dinh dang'
        }
    }
}

Validator.isValue = function (selector, min , max , message) {
    return {
        selector: selector,
        test: function (value){
            var n = parseInt(value)
            return n >= min && n <= max ? undefined : message || 'Vui long nhap dung dinh dang'
        }
    }
}
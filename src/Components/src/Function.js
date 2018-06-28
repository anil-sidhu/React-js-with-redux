export const Required = function (data, min = null, max = null) {
    let errorMsg = {};
    data ? data : data = ''
    if (data.length < 1) {
        errorMsg.msg = "Please Enter Some Value"
        errorMsg.status = false
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    return errorMsg;
}
export const Numeric = function (data, min = null, max = null) {
    let errorMsg = {};
    data ? data : data = ''

    if (isNaN(data)) {
        errorMsg.msg = "Please type Number only"
        errorMsg.status = false
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    return errorMsg;
}
export const Letter = function (data = '', min = null, max = null) {
    let errorMsg = {};
    let letters = /^[A-Za-z]+$/;
    data ? data : data = ''
    if (data.match(letters)) {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Please type letters only"
        errorMsg.status = false
    }
    return errorMsg;
}

export const AlphaNumeric = function (data = '', min = null, max = null) {
    let errorMsg = {};
    console.warn("income",data)
    let letterNumber = /^[0-9a-zA-Z]+$/;
    data ? data : data = ''
    if (data.match(letterNumber)) {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    } 
    if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Please type letters and number only "
        errorMsg.status = false
    }
    return errorMsg;
}

export const Email = function (data = '') {
    let errorMsg = {};
    data ? data : data = ''
    console.warn("comming data",data)
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    
    if (data.match(email)) {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    else {
        errorMsg.msg = "Please Enter Valid Email Address"
        errorMsg.status = false
    }
    return errorMsg;
}


export const CustomRx = function (data = '', spChar = null, capChar = null, min = null, max = null) {

    let errorMsg = {};
    //         let letterNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let rx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
    let specialChar = /(?=.*?[#?!@$%^&*-])/;
    let capitalChar = /^(?=.*?[A-Z])/
    if (spChar) {
        if (!data.match(specialChar)) {
            errorMsg.msg = "Please Enter at least one Special character"
            errorMsg.status = false
            return errorMsg
        }
    }
    if (capChar) {
        if (!data.match(capitalChar)) {
            errorMsg.msg = "Please Enter at least one capital letter"
            errorMsg.status = false
            return errorMsg
        }
    }
    if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    return errorMsg;
}


function lengthValidator(data, min = null, max = null) {

    let errorMsg = {}
    let maxStatus = false
    let minStatus = false
    max ? data.length > max ? maxStatus = false : maxStatus = true : null
    min ? data.length < min ? minStatus = false : minStatus = true : null

    if (min && data.length < min) {
        errorMsg.status = false;
        errorMsg.msg = 'Minimum length should be ' + min
        return errorMsg;
    }
    else if (max && data.length > max) {
        errorMsg.status = false;
        errorMsg.msg = 'Maximum length should be ' + max
        return errorMsg;
    }

    else {
        errorMsg.status = true;
        errorMsg.msg = "Correct"
    }
    return errorMsg
}
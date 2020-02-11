
export const VALIDATION_MESSAGES = {
    // EMAIL_REQUIRED: 'Please enter email address',
    // INVALID_EMAIL: 'Please enter a valid email address',
    // EMAIL_NOT_FOUND: 'Couldn\'t find your Email',
    // YOUR_PASSWORD_REQUIRED: 'Please enter your password',
    // MIN_PASSWORD: 'Password must be from 8 to 20 characters',
    // OLD_NEW_PASSWORD_SAME: 'Old and new password can not be the same',  // 
    // NEW_PASSWORD_REQUIRED: 'Please enter new password',
    // PASSWORD_REQUIRED: 'Please enter current password',
    // PASSWORD_PATTERN: 'Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character,no space, minimum 8 and maximum 20 characters.',
    // CONFIRM_PASSWORD_REQUIRED: 'Please enter confirm password',
    // CONFIRM_PASSWORD_MIN: 'Confirm password must be from 8 to 20 characters',
    // CONF_PASSWORD_INCORRECT: 'Those passwords didn\'t match. Try again',
    // OLD_PASSWORD_INCORRECT: 'Entered old password was incorrect',

    DEFAULT_CODE : '+91',
    COUNTRY_CODE : 'IN',
    OOPS: 'Oops something went wrong',
    PLEASE_SELECT: 'Plase select',
    NO_INTERNET: 'No Internet Connection.',
    NOT_CONNECT_SERVER: 'Could not connect to the server. Please try again later',

    DELETE: 'Delete Confirmation',
    ACTIVE: 'Activate',
    INACTIVE: 'Deactivate',
    DELETE_LIST: 'Are you sure you want to delete ?',
    ACTIVE_LIST: 'Are you sure you want to activate ?',
    INACTIVE_LIST: 'Are you sure you want to deactivate ?',
    RECOMMENDED: 'Confirmation',
    POPULAR: 'Confirmation',

    MARK_POPULAR: 'Are you sure you want to mark as popular ?',
    REMOVE_POPULAR: 'Are you sure you want to remove from popular ?',

    MARK_RECOMMENDED: 'Are you sure you want to mark as recommended ?',
    REMOVE_RECOMMENDED: 'Are you sure you want to remove from recommendation ?',

    COUNTRY_CODE_REQUIRED: 'Please enter code',
    COUNTRY_NAME_REQUIRED: 'Please enter country name',
    COUNTRY_NAME_VALID: 'Please enter valid country name',
    COUNTRY_SHORT_NAME_REQUIRED: 'Please enter short name',
    COUNTRY_SHORT_NAME_VALID: 'Please enter valid short name',

    API_NAME_REQUIRED: 'Please enter API name',
    API_NAME_VALID: 'API name minimum 4 characters',
    SELECT_COUNTRY: 'Please select country',
    API_ULR_REQUIRED: 'Please enter API url',
    API_ULR_VALID: 'Please enter valid API url',
    API_VALID: 'Please select API',
    API_BODY_REQUIRED: 'Please enter request body',
    VALID_JSON: 'Please enter valid json formate',
    API_RESPONCE_REQUIRED: 'Please enter response',
    API_HEADER: 'Please enter header',
    API_CLIENT_KEY: 'Please enter Client Key',
    ATTR_OPTIONS_REQUIRED: 'Please enter option name',


    ATTRIBUTE_NAME: 'Please enter attribute name',
    VALID_ATTRIBUTE_NAME: 'Attribute name minimum 4 characters',
    PATTERN_ATTRIBUTE_NAME: 'Only lowercase and _ allowed',
    SELECT_ATTRIBUTE: 'Please select attribute type',
    SELECT_FILTER: 'Please select filter type',

    // SELECT_VALIDATION_API: 'Please select validator API',
    // TEMPLATE_REQUIRED: 'Please enter template name',
    // VALID_TEMPLATE_NAME: 'Template name minimum 4 characters',

    ADD_ATTRIBUTE: 'Please select attribute',
    OUTPUT_PARAMETER: 'Please select output parameter',
    RESPONSE_ERROR_REQUIRED: 'Please enter response error text',
    RESPONSE_REQUIRED: 'Please enter success response text',

    // SELECT_TEMPLATE: 'Please select template',

    // DISCRIPTION_REQUIRED: 'Please enter description',

    // VALIDATION_REGULAR_EXPRESSION: 'Please enter regular expression',
    // OPTIONS: 'Please enter options',
    // CAPTION_REGULAR: 'Please enter caption',

    // SUBTEMPLATE_REQUIRED: 'Please enter sub template name',
    // VALID_SUBTEMPLATE_NAME: 'Sub template name minimum 4 characters',

};

export const POPUP_MESSAGES = {
    logout: 'Logout',
    logoutConfirmation: 'Do you wish to logout?',
};

export const invalidImageError = (format = 'jpeg/png') => `Only ${format} images are allowed`;

export const invalidFileSize = (size = 4) => `File size can not be more than ${size} MB`;

export const COMMON_MESSAGES = {
    ADDED: (type) => toTitleCase(type) + ' has been added successfully',
    UPDATED: (type) => toTitleCase(type) + ' has been updated successfully',
    BLOCKED: {
        confirm: (type) => `Do you want to block this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been blocked successfully`
    },
    ACTIVE: {
        confirm: (type) => `Do you want to unblock this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been unblocked successfully`
    },
    DELETED: {
        confirm: (type) => `Do you want to delete this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been deleted successfully`
    }
};

export const SOMETHING_WENT_WRONG = 'Something went wrong , Please try again later.';

export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};


export const LIMIT = {
    EMAIL_MIN_LENGTH: 5,
    EMAIL_LENGTH: 60,
    PASSWORD_MIN: 8,
    PASSWORD_MAX: 20,
    MIN_LENGTH: 8,
    MAX_LENGTH: 20,
    COUNTRY_CODE_MIN: 1,
    COUNTRY_CODE_MAX: 5,
    COUNTRY_NAME_MAX: 40,
    COUNTRY_NAME_MIN: 2,
    COUNTRY_SORT_NAME_MAX: 2,
    COUNTRY_SORT_NAME_MIN: 2,
    ZIP_MAX: 8,
    API_NAME_MAX: 50,
    API_NAME_MIN: 4,
    URL_MAX: 500,
    ATTRIBUTE_NAME_MAX: 50,
    ATTRIBUTE_NAME_MIN: 4,
    TEMPLATE_NAME_MIN: 4,
    TEMPLATE_NAME_MAX: 30,
    MAX_NAME: 100,
    MAX_DISCRIPTION: 300,
    MAX_500: 500,
};




/*----------------VALIDATOR-------------*/
export const Regex = {
    NUMBER: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
    USER_NAME: /^[a-z0-9_-]{3,16}$/,
    AMOUNT: /(^[0][1-9]+)|([1-9]\d*)+$/,
    CHARACTER: /^[a-zA-Z]*$/,
    API_KEY: /^[a-z_]+$/,
    URL: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    // PASSWORD: /(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=.*[@#$%^&+=])(?=[^0-9]*[0-9]).{8,20}/,
    PASSWORD: /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$/,
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const MODE_OF_PAYMENT = [
    { name: 'Online', value: 'online' },
    { name: 'Cash', value: 'cash' },
]


export const API_STATUS = [
    { name: 'Active', value: 1 },
    { name: 'Blocked', value: 0 },
]

export const BIRYANI_TYPE = [
    { name: 'Veg', value: 1 },
    { name: 'Non-Veg', value: 0 },
]
export const STOCK_TYPE = [
    { name: 'In stock', value: false },
    { name: 'Out of stock', value: true },
]

export const API_METHODS = [
    { name: 'GET', value: 'GET' },
    { name: 'POST', value: 'POST' },
    { name: 'PUT', value: 'PUT' },
]

export const RESPONSE_TYPE = [
    { name: 'Value', value: 'VALUE' },
    { name: 'Other', value: 'OTHER' },
]

export function isJsonParse(json: any) {
    try {
        JSON.parse(json);
    } catch (e) {
        return false;
    }
    return true;
}

export function jsonStringify(json: any) {
    if (json) {
        try {
            return JSON.stringify(json);
        } catch (e) {
            return '';
        }
    } else {
        return ''
    }
}

export function toUpperCase(text: string) {
    if (text) {
       return text.toUpperCase();
    } else {
        return ''
    }
}

export function mappingMultipleKeysValue(data: any) {
    let main = {}
    let location = {};
    (function treeMaker(obj, index) {
        let suffix = toString.call(obj) == '[object Array]' ? ']' : '';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                location[index + key + suffix] = obj[key];
                if (typeof obj[key] == 'object') {
                    if (obj[key] instanceof Array) {
                        treeMaker(obj[key], index + key + suffix + '[')
                    } else {
                        treeMaker(obj[key], index + key + suffix + '.')
                    }
                }
            }
        }
    })(data, '');

    for (const key in location) {
        if (location.hasOwnProperty(key) && (typeof location[key] == 'string')) {
            let newKey: any = key.split('.');
            newKey = newKey[newKey.length - 1]
            main[newKey] = location[key];
        }
    }
    return main;
}
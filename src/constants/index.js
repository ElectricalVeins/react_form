export const USER_NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
export const LOGIN_PATTERN = /(?!^\d)^\w{6,16}$/;
export const EMAIL_PATTERN = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
export const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/; //Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character

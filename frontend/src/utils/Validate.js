// utils/validate.js

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\d{10}$/; // Assuming phone number is 10 digits
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number

export const validateEmail = (email) => {
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  return phoneRegex.test(phone);
};

export const validatePassword = (password) => {
  return passwordRegex.test(password);
};

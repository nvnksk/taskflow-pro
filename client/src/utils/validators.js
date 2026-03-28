export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim().length > 0;
};

export const validateTaskTitle = (title) => {
  return validateRequired(title) && title.trim().length >= 3 && title.trim().length <= 100;
};

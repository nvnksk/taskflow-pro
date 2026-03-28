export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return typeof password === 'string' && password.length >= 8;
};

export const validateObjectId = (id) => {
  return /^[a-f\d]{24}$/i.test(id);
};

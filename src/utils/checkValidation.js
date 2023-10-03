export const checkValidation = (email, password) => {
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  if (!isEmailValid || !isPasswordValid) return "Invalid username & password";
  else return null;
};

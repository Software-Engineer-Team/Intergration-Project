import { showAlert } from "./alert-utils";

export const validateHandler = ({
  type = "Register",
  name,
  email,
  password,
  retypePassword,
  terms,
}) => {
  if (type === "Register" && !name) {
    showAlert("Please enter your name!");
    return false;
  }
  if (!email) {
    showAlert("Please enter your email address!");
    return false;
  }
  if (!validateEmail(email)) {
    showAlert("Please enter valid email address!");
    return false;
  }
  if (!password) {
    showAlert("Please enter your password!");
    return false;
  }
  if (type === "Register" && !retypePassword) {
    showAlert("Please retype your password!");
    return false;
  }
  if (type === "Register" && !terms) {
    showAlert("Please agree with our terms and conditions!");
    return false;
  }
  if (type === "Register" && password !== retypePassword) {
    showAlert("Password does not match!");
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

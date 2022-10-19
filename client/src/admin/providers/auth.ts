import jwtDecode from "jwt-decode";
import jwtEncode from "jwt-encode";
import { AuthProvider } from "react-admin";

interface UserInterface {
  id: string;
  name: string;
  avatar: string;
  password: string;
  email: string;
}

export const authProvider: AuthProvider = {
  login,
  checkError,
  checkAuth,
  logout,
  getIdentity,
  getPermissions: authPermissions
};

function getUser() {
  const token = localStorage.getItem("token");

  if (!token) return;

  const user = jwtDecode(token);

  return user;
}

function checkAuth(_params: any) {
  const token = localStorage.getItem("token");

  if (!token) {
    return Promise.reject();
  }

  return Promise.resolve();
}

function checkError(error: any) {
  if (error.status === 401) {
    return Promise.reject();
  }

  return Promise.resolve();
}

function login(params: { email: string; password: string }) {
  const { email, password } = params;
  const data: UserInterface = {
    id: "eh21uiweu",
    name: "John Doe",
    avatar: "",
    email,
    password
  };

  return Promise.resolve(jwtEncode(data, "secret")).then(token =>
    localStorage.setItem("token", token)
  );
}

function logout(_params: any) {
  localStorage.removeItem("token");
  return Promise.resolve();
}

function authPermissions() {
  const user = getUser();
  const isResetOrForgot = /(forgot|reset)/.test(window.location.pathname);

  if (!user && !isResetOrForgot) {
    return Promise.reject({});
  }

  return Promise.resolve(user || {});
}

function getIdentity() {
  const user = jwtDecode<UserInterface>(localStorage.getItem("token") || "");

  if (!user) {
    return Promise.reject();
  }

  const { id, name, avatar } = user;

  const [fullName] = name.split(/\s+/);

  return Promise.resolve({
    id,
    fullName,
    avatar
  });
}

import api from "./apiConfig"

export const signUp = async (signUpData) => {
  try {
    const res = await api.post("/sign-up", signUpData)
    localStorage.setItem("token", res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
    return res.data.user;
  } catch (e) {
    throw e
  }
}

export const signIn = async (signInData) => {
  try {
    const res = await api.post("/sign-in", signInData)
    localStorage.setItem("token", res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
    return res.data.user;
  } catch (e) {
    throw e
  }
}

export const verify = async () => {
  const token = localStorage.getItem("token")
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/verify")
    return res.data
  } else { 
  return false
  }
}

export const signOut = async () => {
  try {
    api.defaults.headers.common.authorization = null;
  } catch(e) {
    throw e
  }
}
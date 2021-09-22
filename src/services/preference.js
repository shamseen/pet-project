import api from "./apiConfig";

export const createPreference = async (input) => {
  try {
    const res = await api.post(`/preferences`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPreferences = async () => {
  try {
    const res = await api.get(`/preferences`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPreference = async (id) => {
  try {
    const res = await api.get(`/preferences/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

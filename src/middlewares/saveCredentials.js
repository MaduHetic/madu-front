export const saveCredentialsInStorage = async (creds) => {
  console.debug("[saveCredentialsInStorage]");
  try {
    await localStorage.setItem("user", JSON.stringify(creds)); // save to device
  } catch (error) {
    console.error("AsyncStorage error: ", error);
  }
};

export const getCredsFromStorage = async () => {
  console.debug("[getCredsFromStorage]");
  try {
    const creds = await localStorage.getItem("user");
    console.debug("[getCredsFromStorage]", creds);

    return JSON.parse(creds);
  } catch (error) {
    console.error("Get credentials error: ", error);
  }
};

export const removeCredsFromStorage = async () => {
  console.debug("[removeCredsFromStorage]");

  try {
    await localStorage.removeItem("user");
  } catch (error) {
    console.error("Get credentials error: ", error);
  }
};

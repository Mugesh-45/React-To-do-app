const apiRequest = async (url = "", optionObject = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionObject);
    if (!response.ok) throw Error("please reload the app");
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;

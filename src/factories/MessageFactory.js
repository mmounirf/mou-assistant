import axios from "axios";

class MessageFactory {
  static send(data) {
    const payload = {
      sessionId: "12345678",
      queryInput: {
        text: {
          text: data,
          languageCode: "en"
        }
      }
    };
    return axios.post(process.env.REACT_APP_DIALOGFLOW_GATEWAY, payload);
  }
}

export default MessageFactory;
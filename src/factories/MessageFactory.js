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

  static scrollToBottom() {
    const messages = document.getElementsByClassName('conversation')[0].children;
    messages[messages.length - 1].scrollIntoView();
  }
}

export default MessageFactory;
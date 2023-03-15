import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
  TypingIndicator,
  MessageModel,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import { useState } from "react";

const KEY = process.env.REACT_APP_OPENAI_API_KEY;

const ChatGPT = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message:
        "Hello, ChatGPT is here to help find appropriate keywords for your search!",
      sender: "ChatGPT",
      direction: "incoming",
      position: "first",
    },
  ]);

  const handleSend = async (message: string) => {
    const newMessage: MessageModel = {
      message: message,
      sender: "user",
      direction: "outgoing",
      position: "first",
    };

    const newMessages = [...messages, newMessage];
    // update message state
    setMessages(newMessages);

    // set a typing indicator
    setTyping(true);

    // process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: MessageModel[]) {
    // chatMessages { sender: "user" or "ChatGPT", message: "message"}
    // apiMessages { role: "user" or "assistant", content: "content"}

    let apiMessages = chatMessages.map((messageObj) => {
      let role = "";
      if (messageObj.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObj.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain like I am a social media marketing analyst",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming",
            position: "first",
          },
        ]);
        setTyping(false);
      });
  }
  return (
    <MainContainer style={{ fontSize: "1.2em" }}>
      <ChatContainer>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={
            typing ? <TypingIndicator content="ChatGPT is typing" /> : null
          }
        >
          {messages.map((message, i) => {
            return <Message key={i} model={message} />;
          })}
        </MessageList>
        <MessageInput placeholder="type message here" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  );
};

export default ChatGPT;

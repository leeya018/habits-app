import axios from "axios";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { getUrl } from "util";
let socket;

const useSocket = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    socketInitializer();
    return () => socketInitializer;
  }, []);

  const socketInitializer = async () => {
    await axios.get(getUrl() + "/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-input", (msg) => {
      setResponse(msg);
    });
  };

  const sendMessage = (msg) => {
    socket.emit("input-change", msg);
  };

  return { response, sendMessage };
};

export default useSocket;

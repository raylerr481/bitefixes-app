import { useState } from "react";
import api from "../services/api";

// Interfaz para definir la estructura del mensaje
interface Message {
  sender: "user" | "bot";
  text: string;
}

export function useChat(userId: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    try {
      const response = await api.post("/api/chat/direct", {
        message: text,
        user_id: userId,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "user", text },
        { sender: "bot", text: response.data.reply },
      ]);
    } catch (error) {
      console.error("Error al hablar con Bitey:", error);
    }
  };

  return { messages, sendMessage };
}

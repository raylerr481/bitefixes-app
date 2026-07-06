// src/app/chat/index.tsx
import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { useChat } from "../../hooks/useChat";

export default function ChatScreen() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat("usuario_prueba_123"); // Aquí pondrías el ID del usuario real

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.sender}: {item.text}
          </Text>
        )}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Escribe a Bitey..."
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Button
        title="Enviar"
        onPress={() => {
          sendMessage(input);
          setInput("");
        }}
      />
    </View>
  );
}

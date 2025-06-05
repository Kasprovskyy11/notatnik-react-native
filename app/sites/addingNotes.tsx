import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNotes } from "../../src/contexts/NotesContext";

export default function AddingNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useNotes();

  const handleAddNote = () => {
    if (title && content) {
      addNote({
        id: Date.now(), // Using timestamp as a unique ID
        title: title,
        content: content,
      });
      setContent("");
      setTitle("");
    }
  };

  return (
    <View className=" items-center flex-1 bg-white p-4">
      <Text className="text-3xl">Adding Notes</Text>
      <TextInput
        value={title}
        onChange={(event) => setTitle(event.nativeEvent.text)}
        placeholder="Tytuł notatki"
        className="border-black border-2 rounded-full w-full p-2 my-4 text-lg text-center"
      />
      <TextInput
        placeholder="Treść notatki..."
        multiline
        textAlignVertical="top"
        value={content}
        onChange={(event) => setContent(event.nativeEvent.text)}
        className="border-gray-300 border rounded-xl w-full h-96 p-4 my-4 text-lg bg-gray-100 shadow-sm"
      />
      <TouchableOpacity onPress={handleAddNote}>
        <Text>Dodaj notatkę</Text>
      </TouchableOpacity>
    </View>
  );
}

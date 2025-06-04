import { FlatList, Text, View } from "react-native";
import { useState } from "react";
import { Header } from "@react-navigation/elements";
import NoteComponent from "../components/NoteComponent";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function Notatki() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 2, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 3, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 4, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 5, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 6, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 7, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 8, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 9, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 10, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 11, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 12, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
    { id: 13, title: "Pierwsza Notatka", content: "To jest pierwsza notatka." },
  ]);
  return (
    <>
      <View className="flex-1 bg-white p-4">
        <Text className="text-3xl text-center font-bold text-blue-500">
          Notatki
        </Text>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
          renderItem={({ item }) => (
            <NoteComponent
              id={item.id}
              title={item.title}
              content={item.content}
            />
          )}
        />
      </View>
    </>
  );
}

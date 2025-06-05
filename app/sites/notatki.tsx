import { FlatList, Text, View } from "react-native";
import { useState } from "react";
import { Header } from "@react-navigation/elements";
import NoteComponent from "../components/NoteComponent";
import { useNotes } from "../../src/contexts/NotesContext";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function Notatki() {
  const { notes } = useNotes();
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

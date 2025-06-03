import { Text, View, TouchableOpacity } from "react-native";

interface NoteProps {
  id: number;
  title: string;
  content: string;
}

export default function NoteComponent({ id, title, content }: NoteProps) {
  return (
    <View className="items-start justify-center border border-black my-4 px-4 py-2 rounded-lg bg-gray-100">
      <Text className="text-black">{title}</Text>
      <Text className="text-black">{content}</Text>
    </View>
  );
}

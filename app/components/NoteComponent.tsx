import { Text, View, TouchableOpacity } from "react-native";

interface NoteProps {
  id: number;
  title: string;
  content: string;
}

export default function NoteComponent({ id, title, content }: NoteProps) {
  return (
    <View className="items-center border border-black my-4 px-4 py-2 rounded-lg bg-gray-100">
      <Text className="text-black text-2xl">{title}</Text>
      <TouchableOpacity className="bg-[royalblue] px-4 py-2 rounded-full mt-2">
        <Text className=" color-white">Szczegóły</Text>
      </TouchableOpacity>
    </View>
  );
}

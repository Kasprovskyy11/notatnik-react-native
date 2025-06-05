import { router } from "expo-router";
import { Text, View } from "react-native";
import "../globals.css";

export default function TitleComponent() {
  return (
    <View>
      <Text
        className="text-2xl text-center font-bold text-white mr-2"
        onPress={() => {
          router.navigate("/");
        }}
      >
        Notatnik
      </Text>
    </View>
  );
}

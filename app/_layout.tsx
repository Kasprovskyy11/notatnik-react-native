import { router, Stack } from "expo-router";
import { StatusBar, TouchableOpacity, Text } from "react-native";
import "./globals.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="royalblue" />
      <Stack
        screenOptions={{
          title: "Notatnik",
          headerShown: true,
          headerStyle: { backgroundColor: "royalblue" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.navigate("/sites/notatki")}
              className="py-2 px-6 bg-white rounded-full"
            >
              <Text className="text-[royalblue] font-bold uppercase">
                Notatki
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      ;
    </>
  );
}

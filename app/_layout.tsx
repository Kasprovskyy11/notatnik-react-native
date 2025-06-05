import { router, Stack } from "expo-router";
import { StatusBar, TouchableOpacity, Text, View } from "react-native";
import { NotesProvider } from "../src/contexts/NotesContext";
import TitleComponent from "./components/TitleComponent";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="royalblue" />
      <NotesProvider>
        <Stack
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: "royalblue" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            headerBackVisible: false,
            headerTitle: () => <TitleComponent />,
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    backgroundColor: "white",
                    borderRadius: 999,
                    marginRight: 8,
                  }}
                  onPress={() => router.navigate("/sites/addingNotes")}
                >
                  <Text
                    style={{
                      color: "royalblue",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Dodaj Notatkę
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.navigate("/sites/notatki")}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 24,
                    backgroundColor: "white",
                    borderRadius: 999,
                  }}
                >
                  <Text
                    style={{
                      color: "royalblue",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Notatki
                  </Text>
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </NotesProvider>
    </>
  );
}

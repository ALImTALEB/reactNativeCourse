import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const WelcomeScreen = () => {
  const [name, onChangeName] = useState("");

  return (
    <ScrollView style={styles.scroll} indicatorStyle={"white"}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Little Lemon</Text>
        <Text style={styles.text2}>
          LittleLemon is a charming neighborhood bistro that serves simple food
          andclassic cocktails in a lively but casual environment. We wouldlove
          to hear more about yourexperience with us!F223
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="First Name"
          onChangeText={onChangeName}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  text: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  text2: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  scroll: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 30,
    borderRadius: 10,
    padding: 10,
  },
});

export default WelcomeScreen;

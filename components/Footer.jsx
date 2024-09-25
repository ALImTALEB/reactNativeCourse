import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: "#333333",
    textAlign: "center",
  },
});

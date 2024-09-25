import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.text}>Little Lemon</Text>
    </View>
  );
};
const screenWidth = Dimensions.get("window").width;

const styleSheet = StyleSheet.create({
  container: {
    padding: 40,
    width: screenWidth,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE9972",
  },
  text: {
    fontSize: 30,
    color: "#333333",
  },
});

export default LittleLemonHeader;

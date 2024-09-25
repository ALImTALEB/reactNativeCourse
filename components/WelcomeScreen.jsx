import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView style={styles.scroll} indicatorStyle={"white"}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Little Lemon</Text>
        <Text style={styles.text2}>
          Little {"\n"}Lemon is a charming neighborhood bistro that{"\n"} serves{" "}
          {"\n"}simple food and {"\n"}classic {"\n"}
          cocktails
          {"\n"} in{"\n"} a lively but{"\n"} casual{"\n"} environment{"\n"}. We
          would {"\n"}love to hear more{"\n"} about your {"\n"}experience {"\n"}
          with{"\n"} us {"\n"}!F223
        </Text>
      </View>
    </ScrollView>
  );
};
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
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
});

export default WelcomeScreen;

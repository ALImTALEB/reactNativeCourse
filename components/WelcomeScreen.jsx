import { ScrollView, Text, View } from "react-native";
import { Dimensions } from "react-native";

const WelcomeScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      indicatorStyle={"white"}
    >
      <View
        style={{
          flex: 1,
          width: screenWidth,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            padding: 40,
            fontSize: 30,
            color: "#EDEFEE",
            textAlign: "center",
          }}
        >
          Welcome to Little Lemon
        </Text>
        <Text
          style={{
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: "#EDEFEE",
            textAlign: "center",
          }}
        >
          Little {"\n"}Lemon is a charming neighborhood bistro that{"\n"} serves{" "}
          {"\n"}simple food and {"\n"}classic {"\n"}
          cocktails
          {"\n"} in{"\n"} a lively but{"\n"} casual{"\n"} environment{"\n"}. We
          would {"\n"}love to hear more{"\n"} about your {"\n"}experience {"\n"}
          with{"\n"} us {"\n"}!F
        </Text>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;

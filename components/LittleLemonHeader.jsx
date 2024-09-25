import { View, Text } from "react-native";
import { Dimensions } from 'react-native';

const LittleLemonHeader = () => {
    const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ padding: 40,width: screenWidth, alignSelf: "center", display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: "#F4CE14" }}>
      <Text style={{ fontSize: 30, color: "black" }}>
        Little Lemon
      </Text>
    </View>
  );
};

export default LittleLemonHeader;

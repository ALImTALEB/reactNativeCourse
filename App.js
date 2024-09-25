import { StyleSheet, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <View style={styleSheet.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styleSheet.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  text: {
    fontSize: 30,
    color: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});

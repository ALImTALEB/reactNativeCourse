import { StyleSheet, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
      <View style={styleSheet.container}>
        <LittleLemonHeader />
        <MenuItems />
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

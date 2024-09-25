import { useState } from "react";
import {
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>

        <TextInput
          style={styles.input}
          value={email}
          placeholder="email"
          onChangeText={onChangeEmail}
          keyboardType={"email-address"}
          clearButtonMode="always"
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="password"
          onChangeText={onChangePassword}
          keyboardType={"default"}
          secureTextEntry={true}
          clearButtonMode="always"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 30,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
});

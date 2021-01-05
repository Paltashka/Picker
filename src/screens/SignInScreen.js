import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../contexts/AuthProvider";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("hi@pickery.de");
  const [pass, setPass] = useState("lol12345");

  const { signup } = useAuth();

  const logIn = () => {
    signup(email, pass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pickery</Text>

      <Text style={styles.subTitle}>Picker</Text>

      <TextInput
        value={email}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Enter your email"
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        value={pass}
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={(value) => setPass(value)}
      />

      <View style={{ flex: 1 }} />

      <TouchableOpacity onPress={() => logIn()}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>EINLOGGEN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 200,
    paddingHorizontal: 35,
    paddingBottom: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 12,
  },
  subTitle: {
    marginBottom: 75,
  },
  input: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 4,
  },
  btn: {
    height: 60,
    width: Dimensions.get("window").width - 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32DB7A",
    borderRadius: 30,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
});

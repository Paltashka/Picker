import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";

const PickedScreen = ({ navigation }) => {
  return (
    <View>
      <Text>PickedScreen</Text>
    </View>
  );
};
export default PickedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0058FF",
    alignItems: "center",
    paddingTop: 300,
  },
});

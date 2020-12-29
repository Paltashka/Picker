import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Spinner, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BlackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KEINE OFFENE BESTELLUNG</Text>

      <Text style={styles.title}>___</Text>

      <Text style={styles.title}>GET READY ..</Text>

      <View style={{ flex: 1 }} />

      <TouchableOpacity>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>IN BEARBEITUNG</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default BlackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 300,
    paddingBottom: 40,
  },
  title: {
    color: "#fff",
    marginBottom: 90,
  },
  btnContainer: {
    backgroundColor: "#F2FF57",
    width: Dimensions.get("window").width - 70,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
  },
});

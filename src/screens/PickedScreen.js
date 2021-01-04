import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PickedScreen = ({ route, navigation }) => {
  const data = route.params.data;
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LABEL WIRD GEDRUCT</Text>

      <Text style={styles.number}>{`# ${data.node.number}`}</Text>

      <Text style={styles.time}>{`${data.node.lines.length} ARTIKEL`}</Text>

      <Text style={styles.articleNumber}>ARTIKEL</Text>

      <TouchableOpacity onPress={() => navigation.navigate("TakeOrder")}>
        <View style={styles.circle}>
          <Text style={styles.btnText}>FERTIG</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default PickedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00DB82",
    alignItems: "center",
    paddingTop: 300,
  },
});

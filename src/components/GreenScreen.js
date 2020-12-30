import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMutation } from "@apollo/client";

import { FULFILL_ORDER } from "../graphql/mutations";

const GreenScreen = ({ data, navigation }) => {
  const [orderFulfill] = useMutation(FULFILL_ORDER, {
    onCompleted: (res) => {
      console.log("result");
      navigation.push("Order", { data });
    },
  });

  const fulfillOrder = () => {
    console.log(data);
    orderFulfill({
      variables: {
        input: {
          notifyCustomer: false,
          lines: [
            {
              orderLineId: data.node.lines[0].id,
              stocks: [
                {
                  quantity: data.node.lines[0].quantity,
                  warehouse:
                    "V2FyZWhvdXNlOjZhMGJmY2Y2LWQ2NDItNDI2MC05MmZlLWM1N2YwNDA0NWZmMQ==",
                },
              ],
            },
          ],
        },
        orderId: data.node.id,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEUE BESTELLUNG</Text>

      <Text style={styles.number}>{`# ${data.node.number}`}</Text>

      <View style={styles.articleNumberContainer}>
        <Text
          style={styles.articleNumber}
        >{`${data.node.lines.length} ARTIKEL`}</Text>
      </View>

      <TouchableOpacity onPress={() => fulfillOrder()}>
        <View style={styles.circle}>
          <Text style={styles.btnText}>ANNEHMEN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default GreenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0058FF",
    alignItems: "center",
    paddingTop: 300,
  },
  title: {
    color: "#fff",
    marginBottom: 90,
  },
  number: {
    color: "#fff",
    marginBottom: 35,
    fontSize: 40,
  },
  articleNumber: {
    color: "#fff",
  },
  articleNumberContainer: {
    height: 30,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    marginBottom: 65,
  },
  circle: {
    backgroundColor: "#fff",
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
  },
});

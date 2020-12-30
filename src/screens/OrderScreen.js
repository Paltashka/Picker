import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useMutation } from "@apollo/client";

import { FULFILL_ORDER } from "../graphql/mutations";

const OrderScreen = ({ route, navigation }) => {
  const data = route.params.data;
  const lines = data.node.lines;
  const [checked, setChecked] = useState(lines.map(() => false));

  const [orderFulfill] = useMutation(FULFILL_ORDER, {
    onCompleted: (res) => {
      console.log("result");
      navigation.push("Picked", { data: data.node.number });
    },
  });

  const sortedLines = Object.assign([], lines).sort(function (a, b) {
    var keyA = parseInt(a.variant.metadata[0].value);
    var keyB = parseInt(b.variant.metadata[0].value);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  const logOut = () => {
    navigation.navigate("SignIn");
  };

  const fulfillOrder = () => {
    var order_lines = [];
    var i;
    for (i = 1; i < lines.length; i++) {
      var line = {};
      line["orderLineId"] = lines[i].id;
      line["stocks"] = [
        {
          quantity: lines[i].quantity,
          warehouse:
            "V2FyZWhvdXNlOjZhMGJmY2Y2LWQ2NDItNDI2MC05MmZlLWM1N2YwNDA0NWZmMQ==",
        },
      ];
      order_lines.push(line);
    }
    orderFulfill({
      variables: {
        input: {
          notifyCustomer: false,
          lines: order_lines,
        },
        orderId: data.node.id,
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedLines}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: `https://storage.googleapis.com/media-iceman/products/${item.productSku}-1.jpg`,
                  // uri: item.thumbnail.url,
                }}
                style={styles.image}
              />
              <Text style={styles.description}>{item.productName}</Text>
              <TouchableOpacity
                onPress={() => {
                  setChecked(
                    checked.map((el, i) => {
                      return i === index ? !el : el;
                    })
                  );
                }}
              >
                <View
                  style={checked[index] ? styles.circleChecked : styles.circle}
                >
                  <Text
                    style={
                      checked[index]
                        ? styles.circleCheckedText
                        : styles.circleText
                    }
                  >
                    {item.quantity}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.number}>{`# ${data.node.number}`}</Text>

            <TouchableOpacity onPress={logOut}>
              <View style={styles.logOutContainer}>
                <Text style={styles.logOutNumber}>LOG OUT</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
        ListFooterComponent={
          <TouchableOpacity
            onPress={fulfillOrder}
            disabled={checked.some((el) => el === false)}
          >
            <View
              style={{
                ...styles.btnContainer,
                backgroundColor: checked.some((el) => el === false)
                  ? "#F2F2F2"
                  : "#00DB82",
              }}
            >
              <Text
                style={{
                  ...styles.btnText,
                  color: checked.some((el) => el === false) ? "#777" : "#fff",
                }}
              >
                FERTIG & DRUCKEN
              </Text>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};
export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#000",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 25,
  },
  number: {
    color: "#fff",
    fontSize: 40,
  },
  logOutNumber: {
    color: "#fff",
    fontSize: 15,
  },
  logOutContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 35,
    height: 32,
    justifyContent: "center",
    borderRadius: 16,
  },
  image: {
    width: 80,
    height: 80,
  },
  listItem: {
    height: 140,
    flexDirection: "row",
    marginHorizontal: 25,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#EDEDED",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  circleChecked: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00DB82",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    fontSize: 25,
  },
  circleCheckedText: {
    fontSize: 25,
    color: "#fff",
  },
  description: {
    marginHorizontal: 10,
    flex: 1,
    fontSize: 15,
  },
  btnContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    color: "#777",
  },
});

import React, { useEffect } from "react";
import { StyleSheet, Spinner } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_ORDER } from "../graphql/queries";
import client from "../config/apollo";

import GreenScreen from "../components/GreenScreen";
import BlackScreen from "../components/BlackScreen";

const TakeOrderScreen = ({ navigation }) => {
  const { loading, data, error } = useQuery(GET_ORDER, {
    variables: {
      status: ["UNFULFILLED"],
      first: 2,
      OrderDirection: "ASC",
      OrderSortField: "NUMBER",
    },
    client,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <Spinner />;

  if (data.orders.edges.length === 0)
    return <BlackScreen navigation={navigation} />;

  return <GreenScreen data={data.orders.edges[0]} navigation={navigation} />;
};
export default TakeOrderScreen;

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

import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "right",
    fontStyle: "italic"
  },
  background: {
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  avatar: {
    height: 200,
    width: 200,
    alignSelf: "center"
  }
});

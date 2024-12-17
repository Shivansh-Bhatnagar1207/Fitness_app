import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const images = {
  bulk: require("../assets/images/workout/bulk.jpg"),
  yoga: require("../assets/images/workout/yoga.jpg"),
  lean: require("../assets/images/workout/lean.jpg"),
  default: require("../assets/images/logo.png"),
};
const Card = ({ id }) => {
  const imageSource = images[id] || images.default;
  return (
    <View>
      <ImageBackground
        source={imageSource}
        style={styles.container}
        resizeMode="contain"
      >
        <View style={styles.text}>
          <Text className="font-bold text-white text-center">{id}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "200",
    width: "200",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20",
  },
  text: {
    backgroundColor: "black",
    width: "30",
    margin: "auto",
  },
});

export default Card;

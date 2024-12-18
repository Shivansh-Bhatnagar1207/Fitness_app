import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const images = {
  Bulk: require("../assets/images/workout/bulk.png"),
  Yoga: require("../assets/images/workout/yoga.jpg"),
  Lean: require("../assets/images/workout/lean.jpg"),
  default: require("../assets/images/workout/fit.jpg"),
};
const Card = ({ id }) => {
  const imageSource = images[id] || images.default;
  return (
    <View>
      <Link href={`/${id}`}>
        <ImageBackground
          source={imageSource}
          style={styles.container}
          resizeMode="contain"
        >
          <View style={styles.text}>
            <Text className="font-bold text-white text-center">{id}</Text>
          </View>
        </ImageBackground>
      </Link>
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

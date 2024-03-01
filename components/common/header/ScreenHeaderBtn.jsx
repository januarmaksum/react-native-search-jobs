import React from "react";
import { TouchableOpacity, Image, Platform } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.btnContainer,
        Platform.OS === "web" && { marginHorizontal: 16 },
      ]}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

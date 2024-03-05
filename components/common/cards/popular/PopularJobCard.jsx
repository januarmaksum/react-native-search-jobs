import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../../../../constants";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const logo = item.employer_logo ? item.employer_logo : images.defaultLogo;

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={handleCardPress}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(selectedJob, item)}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

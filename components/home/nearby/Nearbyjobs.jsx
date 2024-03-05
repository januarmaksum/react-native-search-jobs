import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../../hooks/useFetch";

import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";

const Nearbyjobs = () => {
  const router = useRouter();

  const params = {
    query: "React",
    page: "1",
    num_pages: "1",
  };
  const { data, isLoading, error } = useFetch("search", params);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something weng wrong</Text>
        ) : (
          data?.map((item) => (
            <NearbyJobCard
              job={item}
              key={`nearby-job-${item?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;

import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useFetch from "../../../hooks/useFetch";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";

const Popularjobs = () => {
  const router = useRouter();

  const params = {
    query: "React",
    page: "1",
    num_pages: "1",
  };
  const { data, isLoading, error } = useFetch("search", params);

  console.log('render popular jobs');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
            renderItem={({ item }) => <PopularJobCard item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;

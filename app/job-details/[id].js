import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useState, useCallback } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hooks/useFetch";

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const jobParams = {
    job_id: params.id,
  };
  const { data, isLoading, error, refetch } = useFetch(
    "job-details",
    jobParams
  );
  console.log("data: ", data);

  return (
    <SafeAreaView>
      {/* <Stack.Screen></Stack.Screen> */}

      <View>
        <Text>job detail</Text>
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;

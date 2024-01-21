import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const componentNavigator = () => {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default componentNavigator;

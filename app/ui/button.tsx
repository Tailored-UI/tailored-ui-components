import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { Star } from "lucide-react-native";

const button = () => {
  return (
    <>
      <SafeAreaView className="bg-white">
        <Stack.Screen options={{ headerShown: false }} />
        <View className="h-full w-full bg-white justify-center items-center">
          <Button size="icon" style="bg-sky-500 rounded-3xl" elevated>
            <Star size={20} className="text-white" />
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default button;
 
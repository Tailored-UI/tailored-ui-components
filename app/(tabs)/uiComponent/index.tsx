import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const router = useRouter();

  const components = [
    {
      name: "Button",
      onPress: () => router.push("/ui/button"),
    },
  ];

  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full bg-white justify-start items-start p-8 space-y-10">
        <Text className="text-3xl font-semibold text-zinc-800">
          UI Components
        </Text>
        <View className="w-full h-full">
          <FlatList
            data={components}
            renderItem={({ item }) => {
              return (
                <View className="w-full py-4 border-b border-gray-200">
                  <Pressable onPress={item.onPress}>
                    <Text className="text-xl font-medium">{item.name}</Text>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { Sparkles } from "lucide-react-native";

const button = () => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="h-full w-full bg-white px-10 justify-start items-start space-y-8 pb-10">
          <View className="w-full justify-start items-start border-b border-zinc-200 pb-8 space-y-4">
            <Text className="text-3xl font-semibold text-zinc-800">Button</Text>
            <View>
              <Button>This is Button</Button>
            </View>
          </View>
          <View className="w-full justify-start items-start space-y-4 border-b border-zinc-200 pb-8">
            <Text className="text-3xl font-semibold text-zinc-800">
              Button{" "}
              <Text className="text-lg font-base text-zinc-400">
                Different Sizes
              </Text>
            </Text>
            <View>
              <Button>This is default size</Button>
            </View>
            <View>
              <Button size="sm">This is small button</Button>
            </View>
            <View>
              <Button size="md">This is medium button</Button>
            </View>
            <View>
              <Button size="lg">This is large button</Button>
            </View>
          </View>
          <View className="w-full justify-start items-start space-y-4 border-b border-zinc-200 pb-8">
            <Text className="text-3xl font-semibold text-zinc-800">
              Button{" "}
              <Text className="text-lg font-base text-zinc-400">Variants</Text>
            </Text>
            <View>
              <Button size="sm">This is default button</Button>
            </View>

            <View>
              <Button variant="ghost" size="sm">
                This is ghost button
              </Button>
            </View>
            <View>
              <Button variant="secondary" size="sm">
                This is Secondary button
              </Button>
            </View>
            <View>
              <Button variant="outline" size="sm">
                This is outline button
              </Button>
            </View>
            <View>
              <Button variant="link" size="sm">
                This is link button
              </Button>
            </View>
            <View>
              <Button variant="distructive" size="sm">
                This is distructive button
              </Button>
            </View>
            <View>
              <Button size="icon">
                <Sparkles size={25} className="text-white" />
              </Button>
            </View>
            <View>
              <Button size="sm" elevated>
                This is elevated button
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default button;

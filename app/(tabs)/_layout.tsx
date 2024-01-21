import { Tabs } from "expo-router";
import React from "react";
import { Home, Sparkles } from "lucide-react-native";

const appTabs = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 25,
          right: 25,
          height: 80,
          elevation: 20,
          shadowColor: "#000",
          borderRadius: 25,
          backgroundColor: "#c4c4c4",
          borderColor: "#1a2e05",
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <Home
                size={25}
                className={`${
                  props.focused ? "text-gray-600" : "text-gray-100"
                }`}
                fill={props.focused ? "#4b5563" : "#f3f4f6"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="uiComponent"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <Sparkles
                size={25}
                className={`${
                  props.focused ? "text-gray-600" : "text-gray-100"
                }`}
                fill={props.focused ? "#4b5563" : "#f3f4f6"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default appTabs;

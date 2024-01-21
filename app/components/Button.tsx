import { View, Text, Pressable } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";

interface buttonProps {
  style?: string;
  textStyle?: string;
  variant?: "ghost" | "outline" | "link" | "secondary" | "distructive";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
  wfull?: boolean;
  elevated?: boolean;
}

const Button: React.FC<buttonProps> = ({
  style,
  variant,
  size,
  children,
  wfull,
  textStyle,
  elevated,
}) => {
  return (
    <View
      className={cn(
        `px-12 py-3 bg-neutral-800 rounded-md flex justify-center items-center`,
        variant === "ghost"
          ? "bg-neutral-100"
          : variant === "outline"
          ? "border border-neutral-800 bg-neutral-100"
          : variant === "link"
          ? "bg-transparent p-1 border-b border-neutral-800"
          : variant === "secondary"
          ? "bg-neutral-200 "
          : variant === "distructive"
          ? "bg-red-500 shadow-rose-600"
          : "",
        size === "sm"
          ? "px-8 py-3"
          : size === "lg"
          ? "px-14 py-4"
          : size === "icon"
          ? "p-5"
          : "",
        wfull ? "w-full " : "",
        style ? style : ""
      )}
      style={{
        elevation: elevated ? 20 : 0,
        shadowColor: variant === "distructive" ? "red" : "black",
      }}
    >
      <Pressable>
        {size !== "icon" ? (
          <Text
            className={cn(
              `rounded-md flex justify-center items-center text-white`,
              variant === "ghost"
                ? "text-neutral-800"
                : variant === "outline"
                ? "text-neutral-800"
                : variant === "link"
                ? "text-neutral-800"
                : variant === "secondary"
                ? "text-neutral-800"
                : variant === "distructive"
                ? "text-red-50"
                : "",
              size === "sm"
                ? "text-base"
                : size === "lg"
                ? "text-2xl font-semibold"
                : size === "md"
                ? "text-xl font-normal"
                : "",
              textStyle
            )}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
};

export default Button;

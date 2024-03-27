import useMultipleColor from "@/lib/hooks/useMultipleColor";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Button, Icon, useTheme } from "react-native-paper";

const ColorSwitch = () => {
  const theme = useTheme();
  const { selectedColor, setSelectedColor } = useMultipleColor();

  const colors = [
    {
      value: "rgb(225, 29, 72)",
    },
    {
      value: "rgb(60, 130, 246)",
    },
    {
      value: "rgb(34, 197, 95)",
    },
    {
      value: "rgb(234, 88, 11)",
    },
    {
      value: "rgb(95, 1, 236)",
    },
  ];

  return (
    <View style={{ flexDirection: "row" }}>
      {colors.map((color, i) => (
        <TouchableWithoutFeedback
          key={i}
          onPress={() => setSelectedColor(color.value)}
          style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: color.value,
              height: 50,
              width: 50,
              borderRadius: 100,
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon
              source="check"
              size={30}
              color={
                theme.dark ? theme.colors.onBackground : theme.colors.background
              }
            />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default ColorSwitch;

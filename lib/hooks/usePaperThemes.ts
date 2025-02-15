import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import useMultipleColor from "@/lib/hooks/useMultipleColor";
import * as SystemUI from "expo-system-ui"; // Import your color hook
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const usePaperTheme = () => {
  const colorScheme = useColorScheme();
  const { selectedColor } = useMultipleColor();

  const error = "#FF3018";
  const primary = selectedColor || "#3C80F6";
  const white = "#ffffff";
  const black = "#000000";

  const PaperLightTheme = {
    ...MD3LightTheme,
    colors: {
      primary: primary,
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(240, 219, 255)",
      onPrimaryContainer: "rgb(44, 0, 81)",
      secondary: "#10172A",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(237, 221, 246)",
      onSecondaryContainer: "rgb(33, 24, 42)",
      tertiary: "rgb(128, 81, 88)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(255, 217, 221)",
      onTertiaryContainer: "rgb(50, 16, 23)",
      error: error,
      onError: white,
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: white,
      onBackground: black,
      surface: white,
      onSurface: black,
      surfaceVariant: "rgb(233, 223, 235)",
      onSurfaceVariant: "rgb(74, 69, 78)",
      outline: primary,
      outlineVariant: "rgb(204, 196, 206)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(50, 47, 51)",
      inverseOnSurface: "rgb(245, 239, 244)",
      inversePrimary: "rgb(220, 184, 255)",
      elevation: {
        level0: "transparent",
        level1: "rgb(248, 242, 251)",
        level2: "rgb(244, 236, 248)",
        level3: "rgb(240, 231, 246)",
        level4: "rgb(239, 229, 245)",
        level5: "rgb(236, 226, 243)",
      },
      surfaceDisabled: "rgba(29, 27, 30, 0.12)",
      onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
      backdrop: "rgba(51, 47, 55, 0.4)",
    },
  };

  const PaperDarkTheme = {
    ...MD3DarkTheme,

    colors: {
      primary: primary,
      onPrimary: white,
      primaryContainer: "rgb(95, 43, 146)",
      onPrimaryContainer: "rgb(240, 219, 255)",
      secondary: "rgb(208, 193, 218)",
      onSecondary: "rgb(54, 44, 63)",
      secondaryContainer: "rgb(77, 67, 87)",
      onSecondaryContainer: "rgb(237, 221, 246)",
      tertiary: "rgb(243, 183, 190)",
      onTertiary: "rgb(75, 37, 43)",
      tertiaryContainer: "rgb(101, 58, 65)",
      onTertiaryContainer: "rgb(255, 217, 221)",
      error: "rgb(255, 180, 171)",
      onError: "rgb(105, 0, 5)",
      errorContainer: "rgb(147, 0, 10)",
      onErrorContainer: "rgb(255, 180, 171)",
      background: "rgb(29, 27, 30)",
      onBackground: "rgb(231, 225, 229)",
      surface: black,
      onSurface: white,
      surfaceVariant: "rgb(74, 69, 78)",
      onSurfaceVariant: "rgb(204, 196, 206)",
      outline: primary,
      outlineVariant: "rgb(74, 69, 78)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(231, 225, 229)",
      inverseOnSurface: "rgb(50, 47, 51)",
      inversePrimary: "rgb(120, 69, 172)",
      elevation: {
        level0: "transparent",
        level1: "rgb(39, 35, 41)",
        level2: "rgb(44, 40, 48)",
        level3: "rgb(50, 44, 55)",
        level4: "rgb(52, 46, 57)",
        level5: "rgb(56, 49, 62)",
      },
      surfaceDisabled: "rgba(231, 225, 229, 0.12)",
      onSurfaceDisabled: "rgba(231, 225, 229, 0.38)",
      backdrop: "rgba(51, 47, 55, 0.4)",
    },
  };

  const getPaperTheme = (colorScheme: any) => {
    return colorScheme === "dark" ? PaperDarkTheme : PaperLightTheme;
  };

  const [paperTheme, setPaperTheme] = useState(getPaperTheme(colorScheme));

  useEffect(() => {
    setPaperTheme(getPaperTheme(colorScheme));
    SystemUI.setBackgroundColorAsync(colorScheme === "dark" ? black : white);
  }, [colorScheme, selectedColor]);

  return { paperTheme, colorScheme, PaperLightTheme, PaperDarkTheme };
};

export default usePaperTheme;

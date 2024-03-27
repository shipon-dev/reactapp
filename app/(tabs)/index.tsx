import { StyleSheet, View } from "react-native";

import {
  Button,
  Text,
  useTheme,
  Dialog,
  Portal,
  TextInput,
} from "react-native-paper";
import { useState } from "react";
import ColorSwitch from "@/components/colorSwitch";

export default function TabOneScreen() {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(true);

  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Display Large</Text>
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          left={<TextInput.Icon icon="eye" />}
          right={<TextInput.Affix text="/100" />}
        />
      </View>
      <Button mode="text">Text</Button>
      <Button mode="outlined" loading>
        outlined
      </Button>
      <Button mode="contained">contained</Button>
      <Button mode="elevated">elevated</Button>
      <Button mode="contained-tonal">contained-tonal</Button>
      <Button mode="contained" disabled>
        contained-tonal
      </Button>
      <Button mode="contained" rippleColor={theme.colors.error}>
        compact
      </Button>
      <Button mode="contained" onPress={hideDialog}>
        Button
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
            <Button onPress={() => console.log("Ok")}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <ColorSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

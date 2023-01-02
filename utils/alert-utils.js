import { Alert } from "react-native";

export const showAlert = (msg, title = "Error") =>
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

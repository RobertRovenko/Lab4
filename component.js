import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ViewContent,
  Image,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
} from "react-native";

const ImageSwitch = ({ viewToRender }) => {
  switch (viewToRender) {
    case 1:
      return (
        <View>
          <Image style={styles.img} source={require("./assets/icon.png")} />
        </View>
      );
    case 2:
      return <View></View>;
  }
};

export { ImageSwitch };

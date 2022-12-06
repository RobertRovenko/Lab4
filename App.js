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
  ActivityIndicator,
  Alert,
} from "react-native";
import { ImageSwitch } from "./component";

export default function App() {
  const [modal, setmodal] = useState(false);
  const [nameInput, setnameInput] = useState("Guest");
  const [isLoading, setIsLoading] = useState(false);

  const createAlert = () => {
    Alert.alert("Sorry!", "There are no more articles to load!", [
      { text: "go back", onPress: () => setIsLoading(false) },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container2}>
        <Text style={styles.title}> Hello {nameInput}</Text>
        <TouchableHighlight
          onPress={() => {
            setmodal(true);
          }}
          underlayColor="purple"
        >
          <View>
            <Image style={styles.img} source={require("./assets/icon.png")} />

            <Modal visible={modal} transparent={true}>
              <View style={[styles.typeview, { backfaceVisibility: "hidden" }]}>
                <TextInput
                  placeholder="name:"
                  onChangeText={(newTextValue) => setnameInput(newTextValue)}
                  style={{ marginTop: 20 }}
                ></TextInput>
                <Button
                  style={{ margin: 50 }}
                  title="DONE"
                  onPress={() => setmodal(false)}
                ></Button>
              </View>
            </Modal>
          </View>
        </TouchableHighlight>
      </View>
      <Text style={styles.header}>Today:s higlights</Text>
      <ScrollView>
        <View style={{ backgroundColor: "#ffca56", padding: 20, margin: 20 }}>
          <Text style={{ fontSize: 20 }}>First Article</Text>
          <Articles></Articles>
        </View>
        <View style={{ backgroundColor: "#ffca56", padding: 20, margin: 20 }}>
          <Text style={{ fontSize: 20 }}>Second Article</Text>
          <Articles></Articles>
        </View>
        <View style={{ backgroundColor: "#ffca56", padding: 20, margin: 20 }}>
          <Text style={{ fontSize: 20 }}>Third Article</Text>
          <Articles></Articles>
        </View>
        <View style={{ backgroundColor: "#ffca56", padding: 20, margin: 20 }}>
          <Text style={{ fontSize: 20 }}>Fourth Article</Text>
          <Articles></Articles>
        </View>
        <TouchableHighlight
          onPress={createAlert}
          onPressIn={() => setIsLoading(true)}
          underlayColor="lightblue"
          style={styles.btn}
        >
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={{ color: "#682bf7", fontWeight: "bold" }}>
              LOAD MORE
            </Text>
            <ActivityIndicator
              animating={isLoading}
              size="small"
              color="#0000ff"
              style={{}}
            />
          </View>
        </TouchableHighlight>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Articles = ({}) => {
  return (
    <Text>
      BLwehwuhiwuehiuhfweiuhfi uhwuie
      fiuwehfuiwehfiwuhefuihwfiwieufhiwuefhiuwehfiuwhefi iuweh iufhwi uhfui
      wueih fwhe ifhiwe fewfw efw ewefwefwe fewf wefwefwe uw ehufiuw ehifu
      whiefu wiefhw efw efw efw rger rg ergerhg hergeh rbguh berg er ghe iruhgie
      uhiruhg iuerhi efhwk ejfkjw kejh kwe jhfkjhw khhwk jehf kjweh fjw ehwk
      jehfkw jhk
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  container2: {
    justifyContent: "space-between",
    marginTop: 50,
    flexDirection: "row",
    fontSize: 50,
    height: 150,
    backgroundColor: "purple",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    paddingTop: "15%",
    paddingLeft: 20,
  },
  header: {
    fontSize: 30,
    padding: 20,
  },
  img: {
    marginRight: 40,

    width: 100,
    top: 25,
    borderRadius: 50,
    height: 100,
  },
  btn: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    margin: 50,
    padding: 40,
    borderRadius: 100,
  },
  button: {
    width: 100,
    height: 100,
    paddingRight: 100,
  },
  typeview: {
    alignSelf: "center",
    backgroundColor: "white",
    height: 100,
    width: 250,
    marginTop: "50%",
    borderColor: "black",
    alignItems: "center",
    alignContent: "center",
  },
});

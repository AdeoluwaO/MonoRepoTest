import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "ui";
import { TestText } from "components";
import {  } from 'components';
import { sampleUserData } from "utils";
import {  } from 'utils';


export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      {/* shared component */}
      <TestText text='MonoRepo Test' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
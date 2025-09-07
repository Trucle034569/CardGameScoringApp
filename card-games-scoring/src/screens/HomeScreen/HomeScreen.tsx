import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation.types";
import BoyArt from "../../../assets/boy-clipart.svg";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <BoyArt width={120} style={{ height: "100%" }} />
      <Button title="Go to Game" onPress={() => navigation.navigate("Game")} />
    </View>
  );
}

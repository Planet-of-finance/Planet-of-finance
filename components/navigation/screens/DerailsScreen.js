import * as React from "react";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
       
      </View>
    </SafeAreaView>
  );
}

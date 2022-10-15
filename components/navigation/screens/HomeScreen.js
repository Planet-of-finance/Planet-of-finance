import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [ChercheView, setChercheView] = useState(false);
  const [content, setcontent] = useState({});
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const DATA = [
    {
      title: "First Item",
    },
    {
      title: "First Item",
    },
    {
      title: "First Item",
    },
    {
      title: "First Item",
    },
    {
      title: "First Item",
    },
    {
      title: "First Item",
    },
    {
      title: "First Item",
    },
  ];
   const Item = ({ title }) => (
    <View className="flex flex-row  w-2/5 p-2   justify-center items-center">
                        <Image
                          className="w-5 h-5"
                          source={require("../../../assets/germany.png")}
                        />
                        <Text className="text-lg ">{el.title}</Text>
                      </View>
   );
  return (
    <SafeAreaView className="bg-white h-screen flex-1">
      {/* //header */}
      <View className="bg-blue-900 pt-6">
        <View className="flex-row justify-center items-center	pb-11 mx-1 space-x-2">
          <Image
            className="mt-5"
            source={require("../../../assets/titre.png")}
          />
        </View>
      </View>
      <View>
        <Text className="text-4xl italic font-bold	text-center text-blue-900">
          Total Assets managed by members
        </Text>
        <View className="flex-row justify-center items-center	pb-11 mx-1 space-x-2">
          <Text className=" text-white bg-[#f9be34] rounded-2xl h-14 w-[50px] justify-center p-2 text-3xl font-mono font-bold	text-center ">
            1
          </Text>
          <Text className="text-white bg-[#f9be34] rounded-2xl h-14 w-[50px] justify-center p-2 text-3xl font-mono font-bold	text-center ">
            8
          </Text>
          <Text className="text-white bg-[#f9be34] rounded-2xl h-14 w-[50px] justify-center p-2 text-3xl font-mono font-bold	text-center ">
            9
          </Text>
          <Text className="text-white bg-[#f9be34] rounded-2xl h-14 w-[50px] text-center p-2  text-3xl font-mono font-bold">
            7
          </Text>
          <Text className="text-white bg-[#f9be34] rounded-2xl h-14 w-[50px] justify-center p-2 text-3xl font-mono font-bold	text-center ">
            7
          </Text>
          <Text className="text-4xl italic font-bold	text-center text-blue-900">
            Billion $
          </Text>
        </View>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="always"
        className="h-screen w-screen"
      >
        {/* chercheBar */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row  flex-1 space-x-2  bg-slate-200 text-xs  rounded p-2">
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              placeholder="Professionnal,country,asset under management"
              keyboardType="default"
            ></TextInput>
          </View>
          <View className="flex flex-row gap-2 items-center p-4">
            <View className="bg-[#051f4d] rounded h-8 w-8 justify-center items-center">
              <Entypo
                name="sound-mix"
                size={24}
                color="white"
                selectionColor="blue"
                onPress={() => setChercheView(!ChercheView)}
              />
            </View>

            <View className="bg-[#051f4d] rounded h-8 w-8 justify-center items-center">
              <MaterialIcons name="reply" size={24} color="white" />
            </View>
          </View>
        </View>
        <View>
          {ChercheView ? (
            <View>
              <Text className="text-left font-extrabold text-blue-900	">
                Country
              </Text>
              <View className=" space-x-2  p-1   justify-center items-center">
                <TextInput
                  className="bg-slate-100 text-xs border-2 w-5/6 border-slate-300 rounded-xl"
                  placeholder="Search ...."
                  keyboardType="default"
                ></TextInput>
              </View>
              <View>
                <View>
                  <ScrollView
                    scrollEnabled={true}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps="always"
                    className=" h-32   "
                    contentContainerStyle={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {DATA.map((el) => (
                      <Item title={el.title} />
                      
                    ))}
                  </ScrollView>
                  <Text className="text-left font-extrabol text-blue-900">
                    Asset under management
                  </Text>
                </View>
                <View className="flex flex-row ">
                  <View className="p-10 pr-20">
                    <Text>USD 100 Millio</Text>
                    <Text>USD 100 Millio</Text>
                    <Text>USD 100 Millio</Text>
                  </View>
                  <View className="p-10  pl-20">
                    <Text>USD 100 Millio</Text>
                    <Text>USD 100 Millio</Text>
                    <Text>USD 100 Millio</Text>
                  </View>
                </View>
              </View>
              <View className="p-4">
                <Button
                  className="bg-slate-900"
                  title="Search"
                  onPress={() => setChercheView(false)}
                />
              </View>
            </View>
          ) : null}
        </View>
        <View className=" items-center mt-5">
          <View className="bg-slate-300 w-11/12 h-52  m-2 rounded-2xl border-solid border-4 border-[#ffc107]">
            <Image
              className="w-[100%] h-full"
              source={require("../../../assets/Untitled.png")}
            />
          </View>
          <View className="bg-slate-300 w-11/12 h-52  m-2 rounded-2xl border-solid border-4 border-[#ffc107]">
            <Image
              className="w-[100%] h-full"
              source={require("../../../assets/Untitled.png")}
            />
          </View>
          <View className="bg-slate-300 w-11/12 h-52  m-2 rounded-2xl border-solid border-4 border-[#ffc107]">
            <Image
              className="w-[100%] h-full"
              source={require("../../../assets/Untitled.png")}
            />
          </View>
          <View className="bg-slate-300 w-11/12 h-52  m-2 rounded-2xl border-solid border-4 border-[#ffc107]">
            <Image
              className="w-[100%] h-full"
              source={require("../../../assets/Untitled.png")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { FocusedStatusBar } from "../../shared/components";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faDownload, faIcons } from "@fortawesome/free-solid-svg-icons";
import { LineChart } from "react-native-chart-kit";
import TicketCard from "./components/TicketCard";

const Tickets = () => {
  //   const [scroolPosition, setScroolPosition] = useState(0);

  //   const handleScroll = (e) => {
  //     if (e.nativeEvent.contentOffset.y > 0) {
  //       setScroolPosition(1);
  //     } else {
  //       setScroolPosition(0);
  //     }
  //   };

  const data = {
    labels: ["18-12", "19-12", "20-12", "21-12", "22-12", "23-12", "24-12"],
    datasets: [
      {
        data: [200, 400, 208, 550, 800, 909, 400, 220],
        strokeWidth: 1, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `#4ABFD9`,
    labelColor: (opacity = 1) => `#000`,
    strokeWidth: 0, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
      <View className="flex flex-col h-full">
        <View className="bg-white mt-[20px] mx-[10px]  rounded-2xl mb-4">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={assets.header}
              resizeMode="stretch"
              className={`w-full  h-[100px] rounded-lg`}
            ></Image>
            <View className="absolute bottom-[-12px] w-[100%]">
              <Pressable
                placeholder=""
                style={{
                  shadowColor: "#565958",

                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 7,
                }}
                onChangeText={() => { }}
                className="bg-white rounded-3xl w-[80%] m-auto "
              >
                <Text
                  className="text-sm px-4 py-2 text-light-gray"
                  style={{ fontFamily: FONTS.light }}
                >
                  Select locals
                </Text>
              </Pressable>
              <View className="absolute top-2 right-[45]">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size={20}
                  color={"#ACBBB6"}
                />
              </View>
            </View>
            <View className="absolute top-[-12px] right-[-5] min-w-[150px]">
              <Pressable
                placeholder=""
                style={{
                  shadowColor: "#565958",

                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 7,
                }}
                onChangeText={() => { }}
                className="bg-white rounded-3xl ml-auto "
              >
                <Text
                  className="text-sm px-4 py-2 text-light-gray"
                  style={{ fontFamily: FONTS.light }}
                >
                  Add by code
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <ScrollView>
          <View className="bg-white mb-[20px] mx-[13px] mt-5 rounded-2xl grow pb-16">
            <View className="flex flex-col items-center w-full">
              <View className="w-full px-6 pt-6">
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.extraMedium,
                    }}
                  >
                    View summary
                  </Text>
                </View>
              </View>
              <View className="bg-white rounded-2xl w-full px-4 py-4">
                <View className="bg-gray  mx-[12px] rounded-2xl">
                  <View className="flex flex-row w-full">
                    <View className="p-4 pr-0 flex flex-col w-[23%] mr-2">
                      <View className="">
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                        >
                          Total
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                          className="border-b-[0.6px] pb-2 mb-2"
                        >
                          34.622,34€
                        </Text>
                      </View>
                      <View className="">
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                        >
                          Gross margin
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.small,
                          }}
                          className="border-b-[0.6px] pb-2 mb-2"
                        >
                          3.462,23€
                        </Text>
                      </View>
                      <View className="">
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                        >
                          IVA 21%
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                          className="pb-2"
                        >
                          600,88€
                        </Text>
                      </View>
                    </View>
                    <ScrollView
                      horizontal={true}
                      removeClippedSubviews={true}
                      className="p-4"
                    >
                      <LineChart
                        data={data}
                        width={280}
                        height={220}
                        verticalLabelRotation={30}
                        chartConfig={chartConfig}
                        style={{ padding: 4 }}
                        bezier
                      />
                    </ScrollView>
                  </View>
                </View>
              </View>
              <View className="w-full px-6 pt-6">
                <View className="flex flex-row">
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.extraMedium,
                    }}
                  >
                    Monthly orders
                  </Text>
                  <Pressable className="flex flex-row ml-auto bg-light-blue rounded-lg px-2 py-1">
                    <Text
                      className="text-white mr-2 "
                      style={{ fontSize: SIZES.base }}
                    >
                      Download Statement
                    </Text>
                    <FontAwesomeIcon
                      icon={faDownload}
                      size={12}
                      color={"#fff"}
                    />
                  </Pressable>
                </View>
                <TicketCard />
                <TicketCard />
                <TicketCard />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-0  w-full bg-white h-[65px]  rounded-t-xl px-4 py-2" style={{
        shadowColor: "#565958",

        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      }}>
        <View className="flex flex-row items-center justify-around h-full pb-6 mt-2">
          <Pressable onPress={() => { }} className="">
            <View className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faIcons}
                size={20}
                color={"#000"}
              />
              <Text className="mt-1" style={{
                fontFamily: FONTS.light,
                fontWeight: "700",
                fontSize: SIZES.base
              }}>

                TICKETS
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => { }} className="">
            <View className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faIcons}
                size={20}
                color={"#000"}
              />
              <Text style={{
                fontFamily: FONTS.light,
                fontWeight: "700",
                fontSize: SIZES.base
              }}
                className="mt-1">
                RESTAURANT
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => { }} className="">
            <View className="flex flex-col justify-center items-center bg-light-red h-[70px] w-[70px] rounded-full">
              <FontAwesomeIcon
                icon={faIcons}
                size={20}
                color={"#fff"}
              />
              <Text
                className="mt-1 text-white"
                style={{
                  fontFamily: FONTS.light,
                  fontWeight: "700",
                  fontSize: SIZES.base
                }}>
                PRODUCTS
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => { }} className="">
            <View className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faIcons}
                size={20}
                color={"#000"}
              />
              <Text
                className="mt-1"
                style={{
                  fontFamily: FONTS.light,
                  fontWeight: "700",
                  fontSize: SIZES.base
                }}>
                PROFILE
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => { }} className="">
            <View className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faIcons}
                size={20}
                color={"#000"}
              />
              <Text
                className="mt-1"
                style={{
                  fontFamily: FONTS.light,
                  fontWeight: "700",
                  fontSize: SIZES.base
                }}>
                SETTINGS
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tickets;

import React, { useState } from 'react'
import { View, SafeAreaView, TextInput, Image, Text, Pressable, StyleSheet, Button, ScrollView } from 'react-native';
import { FocusedStatusBar } from "../../shared/components";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";

const Dashboard = () => {

    const navigation = useNavigation();

    const [scroolPosition, setScroolPosition] = useState(0);

    const data = {
        labels: ["18-12", "19-12", "20-12", "21-12", "22-12", "23-12", "24-12"],
        datasets: [
            {
                data: [200, 400, 208, 550, 800, 909, 400, 220],
                strokeWidth: 1 // optional
            }
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
        useShadowColorFromDataset: false ,// optional
        propsForBackgroundLines: {
            strokeWidth: 0
        }

    };

    const handleScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 0) {
            setScroolPosition(1);
        } else {
            setScroolPosition(0);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <View
                    className="bg-white mt-[15px] mx-[10px] rounded-2xl mb-4"
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Image source={scroolPosition === 0 ? assets.header : assets.header2} resizeMode="stretch" className={`w-full ${scroolPosition === 0 ? 'h-[100px]' : 'h-[50px]'}  rounded-lg`} >
                        </Image>
                    </View>
                </View>
                <ScrollView onScroll={handleScroll}>
                    <View
                        className="bg-white mb-[20px] mx-[13px] rounded-2xl grow pb-16"
                    >
                        <View
                            className="flex flex-col items-center w-full"
                        >
                            <View
                                className="bg-white rounded-2xl w-full px-6 pt-6"
                            >
                                <View>
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>
                                        View summary
                                    </Text>
                                </View>


                            </View>
                            <View
                                className="bg-white rounded-2xl w-full px-4 py-4"
                            >
                                <View

                                    className="bg-gray  mx-[12px] rounded-2xl"
                                >
                                    <View
                                        className="flex flex-row w-full"
                                    >
                                        <View className="p-4 pr-0 flex flex-col w-[23%]">
                                            <View className="">
                                                <Text style={{ fontFamily: FONTS.light, fontSize: SIZES.small }}>
                                                    Total
                                                </Text>
                                                <Text style={{ fontFamily: FONTS.light, fontSize: SIZES.small }} className="border-b-[0.6px] pb-2 mb-2">
                                                    34.622,34€
                                                </Text>
                                            </View>
                                            <View className="">
                                                <Text style={{ fontFamily: FONTS.light, fontSize: SIZES.small }}>
                                                    Gross margin
                                                </Text>
                                                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.small }} className="border-b-[0.6px] pb-2 mb-2">
                                                    3.462,23€
                                                </Text>
                                            </View>
                                            <View className="">
                                                <Text style={{ fontFamily: FONTS.light, fontSize: SIZES.small }}>
                                                    IVA 21%
                                                </Text>
                                                <Text style={{ fontFamily: FONTS.light, fontSize: SIZES.small }} className="pb-2">
                                                    600,88€
                                                </Text>
                                            </View>
                                        </View>
                                        <ScrollView horizontal={true} removeClippedSubviews={true} className="p-4" >
                                            <LineChart
                                                data={data}
                                                width={280}
                                                height={220}
                                                verticalLabelRotation={30}
                                                chartConfig={chartConfig}
                                                style={{ padding: 4}}
                                                bezier
                                            />
                                        </ScrollView>


                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            className="flex flex-col items-center w-full"
                        >
                            <View
                                className="bg-white rounded-2xl w-full px-6 pt-6"
                            >
                                <View>
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>
                                        Clients
                                    </Text>
                                </View>



                            </View>
                            <View
                                className="bg-white rounded-2xl w-full px-4 py-4"
                            >
                                <View

                                    className="bg-gray  mx-[12px] rounded-2xl "
                                >
                                    <TextInput
                                        placeholder="BOSCAR CLIENT"
                                        style={{ flex: 1 }}
                                        onChangeText={() => { }}
                                        className="bg-white rounded-lg px-2 py-1 m-4"
                                    />

                                    <View className="flex flex-row flex-wrap m-2 mt-0 justify-around ">
                                        <View className="bg-white w-[30%] px-2 py-2 rounded-lg " style={{
                                            fontSize: SIZES.small,
                                        }}>
                                            <Text className="text-dark-gray-2 mb-4 " style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Company or Legal Name
                                            </Text>
                                            <Text className="text-dark-gray-2" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Legal Address 1
                                            </Text>
                                            <Text className="text-dark-gray-2" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Legal Address 2
                                            </Text>
                                            <Text className="mt-2" style={{
                                                fontFamily: FONTS.bold,


                                            }}>
                                                FIN
                                            </Text>
                                        </View>
                                        <View className="bg-white w-[30%] px-2 py-2 rounded-lg ">
                                            <Text className="text-dark-gray-2 mb-4" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Company or Legal Name
                                            </Text>
                                            <Text className="text-dark-gray-2" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Legal Address 1
                                            </Text>
                                            <Text className="text-dark-gray-2" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Legal Address 2
                                            </Text>
                                            <Text className="mt-2" style={{
                                                fontFamily: FONTS.bold,

                                            }}>
                                                FIN
                                            </Text>
                                        </View>
                                        <View className="bg-white w-[30%] px-2 py-2 rounded-lg   bg-light-pink ">
                                            <Text className="text-dark-gray-2 mb-4" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Company or Legal Name
                                            </Text>
                                            <Text className="text-dark-gray-2" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Legal Address 1
                                            </Text>
                                            <Text className="text-dark-gray-2" style={{
                                                fontSize: SIZES.small,
                                            }}>
                                                Legal Address 2
                                            </Text>
                                            <Text className="mt-2" style={{
                                                fontFamily: FONTS.bold,

                                            }}>
                                                FIN
                                            </Text>
                                        </View>

                                    </View>

                                </View>
                                <View className="pt-8 flex justify-center items-center">
                                    <Pressable onPress={() => {
                                        navigation.navigate("NewClient")
                                    }} className="bg-light-blue w-[240px] rounded-lg px-8 py-4">
                                        <View className="flex flex-row justify-center items-center">
                                            <Text className="text-white text-center" style={{ fontSize: SIZES.extraMedium, fontFamily: FONTS.bold }}> ADD NEW CLIENT </Text>
                                        </View>
                                    </Pressable>
                                </View>
                                <View className="pt-4 flex justify-center items-center">
                                    <Pressable onPress={() => {
                                        navigation.navigate("NewFranchise")
                                    }} className="bg-light-blue w-[240px] rounded-lg px-8 py-4">
                                        <View className="flex flex-row justify-center items-center">
                                            <Text className="text-white text-center" style={{ fontSize: SIZES.extraMedium, fontFamily: FONTS.bold }}> ADD NEW FRACHISE </Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>


            </View>

        </SafeAreaView>
    )
}

export default Dashboard
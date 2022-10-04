import React, { useState } from 'react'
import { View, SafeAreaView, TextInput, Image, Text, Pressable, StyleSheet, Button, ScrollView } from 'react-native';
import { FocusedStatusBar } from "../../components";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Dashboard = () => {
    
    const navigation = useNavigation();

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
        backgroundGradientFrom: "#f7f7f700",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#f7f7f700",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `#000`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <View

                    className="bg-white my-[20px] mx-[13px] rounded-2xl"
                >


                </View>
                <View

                    className="bg-white my-[20px] mx-[13px] rounded-2xl"
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Image source={assets.header} resizeMode="cover" className="w-full rounded-lg" >
                        </Image>
                    </View>
                </View>
                <ScrollView>
                    <View
                        className="bg-white my-[20px] mx-[13px] rounded-2xl grow pb-16"
                    >
                        <View
                            className="flex flex-col items-center w-full"
                        >
                            <View
                                className="bg-white rounded-2xl w-full px-6 pt-6"
                            >
                                <View>
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium }}>
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
                                        <View className="p-4 pr-0 flex flex-col w-[35%]">
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
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium }}>
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
                                            onChangeText={() => {}}
                                            className="bg-white rounded-lg px-2 py-1 m-4"
                                 />

                                 <View className="flex flex-row m-2 justify-between pb-6">
                                 <ScrollView horizontal={true} removeClippedSubviews={true} >
                                 <View className="bg-white p-4 rounded-lg ml-3 mr-4 " style={{
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
                                    <View className="bg-white p-4 rounded-lg  mr-4">
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
                                    <View className="bg-white p-4 rounded-lg  mr-4 bg-light-pink">
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
                                    </ScrollView>
                                    
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
                                    navigation.navigate("NewClient")
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
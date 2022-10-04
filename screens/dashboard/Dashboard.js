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
                        className="bg-white my-[20px] mx-[13px] rounded-2xl grow "
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
                                        View summary
                                    </Text>
                                </View>


                            </View>
                            <View
                                className="bg-white rounded-2xl w-full px-4 py-4"
                            >



                            </View>
                        </View>
                    </View>

                </ScrollView>


            </View>

        </SafeAreaView>
    )
}

export default Dashboard
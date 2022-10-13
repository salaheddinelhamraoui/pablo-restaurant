import { View, Text, SafeAreaView, ScrollView, Pressable, Image } from 'react-native';
import HeaderBanner from "../../components/HeaderBanner";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronUp, faClose } from "@fortawesome/free-solid-svg-icons";
import BottomNavigation from "../../components/BottomNavigation";
import TablesCard from "./components/TablesCard";
import { useState } from 'react';

const EditRestaurant = () => {

    const [scroolPosition, setScroolPosition] = useState(0);

    const handleScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 0) {
            setScroolPosition(1);
        } else {
            setScroolPosition(0);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <HeaderBanner scroolPosition={scroolPosition} />
                <ScrollView className="mb-16" onScroll={handleScroll}>
                    <View className="bg-white rounded-2xl px-4 py-4 m-4">
                        <View className="bg-gray  mx-[2px] rounded-2xl">
                            <View className="p-4 flex flex-row w-full">
                                <View className=" pr-0 flex flex-col w-[27%] mr-3">
                                    <View className="">
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.small,
                                            }}
                                        >
                                            Local Name 1
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.small,
                                            }}
                                            className="border-b-[0.2px] pb-2 mb-2"
                                        >
                                            Local Name 2
                                        </Text>
                                    </View>
                                    <View className="">
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.small,
                                            }}
                                        >
                                            Address 1
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.small,
                                            }}
                                            className="border-b-[0.2px] pb-2 mb-2"
                                        >
                                            Address 2
                                        </Text>
                                    </View>
                                    <View className="">
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.small,
                                            }}
                                        >
                                            CIF/VAT/FIN
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.small,
                                            }}
                                            className="pb-2"
                                        >
                                            Tables NNN
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    className="px-1 w-[60%] bg-white rounded-lg flex items-center justify-center"
                                >
                                    <Text className="text-center" style={{
                                        fontFamily: FONTS.light,
                                        fontSize: SIZES.base,
                                    }}>
                                        POSSIBLE MAP WITH ADDRESSES?
                                    </Text>

                                </View>
                                <View className="absolute right-2 top-[50%]">
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        size={20}
                                        color={"#ACBBB6"}
                                    />
                                </View>
                            </View>
                        </View>
                        <View className="mt-6 mb-4">
                            <Text
                                style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.extraMedium,
                                }}
                            >
                                Interior
                            </Text>
                            <TablesCard />
                        </View>
                        <View className="mt-6 mb-4">
                            <Text
                                style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.extraMedium,
                                }}
                            >
                                Terraza
                            </Text>
                            <TablesCard />
                        </View>
                        <View className="pt-8 flex justify-center items-center">
                            <Pressable onPress={() => {
                            }} className="bg-light-blue w-[190px] rounded-lg px-8 py-4">
                                <View className="flex flex-row justify-center items-center">
                                    <Text className="text-white text-center" style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}> ADD NEW ZONE </Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <BottomNavigation />
        </SafeAreaView>
    )
}

export default EditRestaurant
import { View, Text, SafeAreaView, Pressable, ScrollView, ImageBackground } from 'react-native';
import HeaderBanner from "../../components/HeaderBanner";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import BottomNavigation from "../../components/BottomNavigation";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Menu from "./components/Menu";


const DATA = [
    {
        sectionTitle: 'TAPAS',
        sectionImage: assets.tapas,
    },
    {
        sectionTitle: 'BEBIDAS',
        sectionImage: assets.BEBIDAS,
    },
    {
        sectionTitle: 'BURGUERS',
        sectionImage: assets.BURGUERS,
    },
    {
        sectionTitle: 'PIZZAS',
        sectionImage: assets.PIZZAS,
    },
    {
        sectionTitle: 'SANDWICHES',
        sectionImage: assets.SANDWICHES,
    },
    {
        sectionTitle: 'POSTRES',
        sectionImage: assets.POSTRES,
    },
    {
        sectionTitle: 'COCTELES',
        sectionImage: assets.COCTELES,
    }
]

const EditCategories = () => {

    const [scroolPosition, setScroolPosition] = useState(0);

    const handleScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 0) {
            setScroolPosition(1);
        } else {
            setScroolPosition(0);
        }
    }

    const [activeTab, setActiveTab] = useState('menu');


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <HeaderBanner scroolPosition={scroolPosition} />
                <View
                    style={{ flex: 1 }}
                    className="mt-2"
                >
                    <View
                        className="bg-white mb-[20px] mx-[13px] rounded-2xl grow pb-16"
                    >
                        <View
                            className="flex flex-col items-center w-full"
                            style={{ flex: 1 }}
                        >
                            <View
                                className="bg-white rounded-2xl w-full px-6 pt-6"
                                style={{ flex: 1 }}
                            >
                                <View className="flex fixed top-0 left-0 right-0 flex-row items-between justify-around pb-2">
                                    <Pressable onPress={() => { setActiveTab('menu') }} className={`${activeTab === 'menu' ? 'bg-red' : 'bg-gray'} w-[65px] h-[65px] rounded-full flex  justify-center items-center`}>
                                        <View className="flex flex-col justify-center items-center">
                                            <assets.menu width={22} height={22} color={activeTab === 'menu' ? '#fefefe' : '#565958'} />
                                            {scroolPosition === 0 && (
                                                <Text className={`${activeTab === 'datos' ? "text-dark-gray-2" : "text-white"} text-center mt-1`} style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}> CARTA </Text>
                                            )}
                                        </View>
                                    </Pressable>
                                    <Pressable onPress={() => { setActiveTab('datos') }} className={`${activeTab === 'datos' ? 'bg-red' : 'bg-gray'} w-[65px] h-[65px] rounded-full flex  justify-center items-center`}>
                                        <View className="flex flex-col justify-center items-center">
                                            <assets.chart width={22} height={22} />
                                            {
                                                scroolPosition === 0 && (<Text className={`${activeTab === 'datos' ? "text-white" : "text-dark-gray-2"} text-center mt-1`} style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}> DATOS </Text>)
                                            }
                                        </View>
                                    </Pressable>
                                </View>
                                <ScrollView onScroll={handleScroll}
                                    style={{ flex: 1 }}
                                    className="w-full mt-4"
                                >
                                    {activeTab === 'menu' && (
                                        <Menu data={DATA} />
                                    )}
                                    {activeTab === 'datos' && (
                                        <Text>datos</Text>
                                    )}
                                </ScrollView>
                            </View>

                        </View>
                    </View>

                </View >
            </View>
            <BottomNavigation />
        </SafeAreaView>
    )
}

export default EditCategories
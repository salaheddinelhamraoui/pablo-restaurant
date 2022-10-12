import { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput, Image, Text, Pressable, StyleSheet, Button, ScrollView, Keyboard } from 'react-native';
import { FocusedStatusBar } from "../../components";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import Profile from './components/Profile';
import Settings from './components/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'


const NewFranchise = () => {

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [scroolPosition, setScroolPosition] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handleScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 0) {
            setScroolPosition(1);
        } else {
            setScroolPosition(0);
        }
    }

    const [activeTab, setActiveTab] = useState('profile');

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <View
                    style={{ flex: 1 }}
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
                                    <Pressable onPress={() => { setActiveTab('profile') }} className={`${activeTab === 'profile' ? 'bg-red' : 'bg-gray'} w-[65px] h-[65px] rounded-full flex  justify-center items-center`}>
                                        <View className="flex flex-col justify-center items-center">
                                            <FontAwesomeIcon icon={faUser} size={20} color={activeTab === 'profile' ? '#fefefe' : '#565958'} />
                                            <Text className={`${activeTab === 'settings' ? "text-dark-gray-2" : "text-white"} text-center mt-1`} style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}> PROFILE </Text>
                                        </View>
                                    </Pressable>
                                    <Pressable onPress={() => { setActiveTab('settings') }} className={`${activeTab === 'settings' ? 'bg-red' : 'bg-gray'} w-[65px] h-[65px] rounded-full flex  justify-center items-center`}>
                                        <View className="flex flex-col justify-center items-center">
                                            <FontAwesomeIcon icon={faGear} size={20} color={activeTab === 'settings' ? '#fefefe' : '#565958'} />
                                            <Text className={`${activeTab === 'settings' ? "text-white" : "text-dark-gray-2"} text-center mt-1`} style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}> SETTINGS </Text>
                                        </View>
                                    </Pressable>
                                </View>
                                <ScrollView onScroll={handleScroll}
                                    style={{ flex: 1 }}
                                >
                                    {activeTab === 'profile' && (
                                        <Profile />
                                    )}
                                    {activeTab === 'settings' && (
                                        <Settings />
                                    )}
                                </ScrollView>
                            </View>

                        </View>
                    </View>

                </View >
                {
                    !isKeyboardVisible && <View className="absolute bottom-2  right-2 left-2 bg-white h-[70px] rounded-lg" style={[
                        {
                            shadowColor: "#565958",

                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7,
                        }
                    ]}>
                        <View className="flex flex-row justify-around items-center h-full">
                            <Pressable onPress={() => {

                            }} className="bg-light-red w-[40%] rounded-lg">
                                <View className="flex flex-col justify-center items-center py-2">
                                    <assets.cancel width={25} height={25} />
                                    <Text className="text-white text-center mt-1" style={{ fontSize: SIZES.small, fontFamily: FONTS.bold }}> CANCELAR </Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => {

                            }} className="bg-green w-[40%] rounded-lg">
                                <View className="flex flex-col justify-center items-center py-2">
                                    <assets.accept width={25} height={25} />
                                    <Text className="text-white text-center mt-1" style={{ fontSize: SIZES.small, fontFamily: FONTS.bold }}> ACEPTAR </Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                }

            </View >

        </SafeAreaView >
    )
}

export default NewFranchise
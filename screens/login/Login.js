import React from 'react';
import { View, SafeAreaView, TextInput, Image, Text, Pressable } from 'react-native';
import { FocusedStatusBar } from "../../components";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
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
                        <Image
                            source={assets.recurso}
                            resizeMode="contain"
                            className="w-[95px] h-[95px] mx-[44px] my-[32px]"
                        />
                        <Text className="font-GilroyExtraBold break-words mr-[44px] text-dark-gray-2" style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
                            PANEL DE {"\n"}CONTROL
                        </Text>

                    </View>
                </View>
                <View
                    className="bg-white my-[20px] mx-[13px] rounded-2xl grow "
                >
                    <View
                        className="flex flex-col items-center w-full"
                    >
                        <View
                            className="bg-white rounded-2xl w-full px-8 py-12"
                        >
                            <TextInput
                                placeholder="Correo electrónico"
                                onChangeText={() => { }}
                                className="border rounded-lg px-[12px] py-[12px] w-full"
                                style={{ fontSize: SIZES.medium }}
                            />
                            <TextInput
                                placeholder="Contraseña"
                                onChangeText={() => { }}
                                className="border rounded-lg px-[12px] py-[12px] w-full mt-8"
                                style={{ fontSize: SIZES.medium }}
                                secureTextEntry={true}

                            />

                            <View className="pt-8 flex justify-center items-center">
                                <Pressable onPress={() => {
                                    navigation.navigate("Dashboard")
                                }} className="bg-light-blue w-[150px] rounded-lg px-8 py-4">
                                    <View className="flex flex-row justify-center items-center">
                                        <Image
                                            source={assets.vector}
                                            resizeMode="contain"
                                            className="w-6 h-6"
                                        />
                                        <Text className="text-white text-center" style={{ fontSize: SIZES.large }}> Entrar </Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View className="pt-8 flex justify-center items-center">
                                <Pressable onPress={() => {
                                    navigation.navigate("Tickets")
                                }} className=" w-[250px] rounded-lg px-8 py-4">
                                    <View className="flex flex-row justify-center items-center">
                                        <Text className="text-black text-center" style={{ fontSize: SIZES.large }}> fr  </Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
}


export default Login;

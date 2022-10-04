import { View, SafeAreaView, TextInput, Image, Text, Pressable, StyleSheet, Button, ScrollView } from 'react-native';
import { FocusedStatusBar } from "../../components";
import { COLORS, FONTS, SIZES, assets } from "../../constants";

const NewClient = () => {
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
                                <View className="flex flex-row items-between justify-around">
                                <Pressable onPress={() => {}} className="bg-red w-[100px] h-[100px] rounded-full flex  justify-center items-center">
                                    <View className="flex flex-col justify-center items-center">
                                    <Image source={assets.user} resizeMode="cover" className="w-8 h-8 rounded-lg" >
                                    </Image>
                                        <Text className="text-white text-center mt-1" style={{ fontSize: SIZES.medium, fontFamily: FONTS.light}}> PROFILE </Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => {}} className="bg-gray w-[100px] h-[100px] rounded-full flex  justify-center items-center">
                                    <View className="flex flex-col justify-center items-center">
                                    <Image source={assets.settings} resizeMode="cover" className="w-8 h-8 rounded-lg" >
                                    </Image>
                                        <Text className="text-dark-gray-2 text-center mt-1" style={{ fontSize: SIZES.medium, fontFamily: FONTS.light}}> SETTINGS </Text>
                                    </View>
                                </Pressable>
                                </View>
                                <View className="flex flex-col mt-8">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>Email</Text>
                                    <TextInput
                                            placeholder=""
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                </View>
                                <View className="flex flex-col mt-2">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>Phone *</Text>
                                    <TextInput
                                            placeholder=""
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                </View>
                                <View className="flex flex-col mt-2">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>Fiscale Name *</Text>
                                    <TextInput
                                            placeholder=""
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                </View>
                                <View className="flex flex-col mt-2">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>Sole Administrator</Text>
                                    <TextInput
                                            placeholder="Name"
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                    />
                                    <TextInput
                                            placeholder="Surnames"
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                    />
                                </View>
                                <View className="flex flex-col mt-2">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>NIF / CIF *</Text>
                                    <TextInput
                                            placeholder=""
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                </View>
                                <View className="flex flex-col mt-2">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>VAT *</Text>
                                    <TextInput
                                            placeholder=""
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                </View>
                                <View className="flex flex-col mt-2">
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium}}>Local Address *</Text>
                                    <TextInput
                                            placeholder="Street"
                                            style={{ flex: 1 }}
                                            onChangeText={() => {}}
                                            className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                <View className="flex flex-row gap-4">
                                <TextInput
                                            placeholder="Zip"
                                            onChangeText={() => {}}
                                            className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                 <TextInput
                                            placeholder="City"
                                            onChangeText={() => {}}
                                            className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                 <TextInput
                                            placeholder="Country"
                                            onChangeText={() => {}}
                                            className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                                 />
                                </View>
                                </View>
                            </View>
                          
                        </View>
                    </View>

                </ScrollView>

                
            </View>

        </SafeAreaView>
  )
}

export default NewClient
import { View, Text, Image, Pressable } from 'react-native'
import { assets, FONTS } from '../constants'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeaderBanner = ({ scroolPosition }) => {
    return (
        <View className="bg-white mt-[20px] mx-[10px]  rounded-2xl mb-4">
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Image source={scroolPosition === 0 ? assets.header : assets.header2} resizeMode="stretch" className={`w-full ${scroolPosition === 0 ? 'h-[100px]' : 'h-[50px]'}  rounded-lg`} ></Image>
                {scroolPosition === 0 && (
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
                )}

                {scroolPosition === 0 && <View className="absolute top-[-12px] right-[-5] min-w-[150px]">
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
                </View>}
                {scroolPosition === 1 && <View className="absolute top-[6px] right-[25]">
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
                            <View className="absolute ">
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    size={14}
                                    color={"#ACBBB6"}
                                />
                            </View>
                        </Text>
                    </Pressable>
                </View>}
            </View>
        </View>
    )
}

export default HeaderBanner
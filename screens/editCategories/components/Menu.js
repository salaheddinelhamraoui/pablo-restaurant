import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { FONTS, SIZES, assets } from "../../../constants";

const Menu = ({ data }) => {
    return (
        <View className="flex flex-row flex-wrap gap-4 w-full">
            {data && data.map((category) => {

                return <View className="w-[44%]">
                    <ImageBackground source={category.sectionImage} className="h-[125px]" resizeMode="cover" imageStyle={{ borderRadius: 16 }} >
                        <View style={{
                            height: "100%",
                            width: "100%",
                            position: 'absolute',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: 16
                        }} />
                        <View className="flex justify-center items-center w-full py-3" style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderTopLeftRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopEndRadius: 16,
                        }}>
                            <Text className="text-white" style={{
                                fontFamily: FONTS.light,
                            }}>{category.sectionTitle}</Text>
                            <View className="absolute top-0 right-0 bg-light-red px-2 py-2 rounded-lg">
                                <assets.close_2 width={12} height={12} />
                            </View>

                        </View>
                        <View className="absolute bottom-0 right-0" style={{
                            borderBottomRightRadius: 16,
                        }}>
                            <ImageBackground source={assets.blur} className="w-[35px] h-[40px] flex justify-center items-center" resizeMode="cover">
                                <assets.pencil width={16} height={16} />
                            </ImageBackground>
                        </View>
                    </ImageBackground>
                </View>
            })}
            <View className="w-[44%] flex items-center justify-center">
                <TouchableOpacity className="bg-light-blue flex items-center justify-center rounded-full h-[100px] w-[100px]">
                    <Text
                        className="text-white"
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                        }}>ADD</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu
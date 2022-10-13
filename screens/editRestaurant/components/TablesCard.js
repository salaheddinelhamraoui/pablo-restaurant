import { View, Text, TouchableOpacity } from 'react-native'
import { FONTS, SIZES, assets } from "../../../constants"

const TablesCard = ({ }) => {
    return (
        <View>
            <View className="flex flex-row flex-wrap gap-4 mt-4 items-center justify-center">
                <TouchableOpacity className="bg-gray px-8 py-4 rounded-lg" >
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.extraExtraLarge,
                    }}>1</Text>
                    <View className="absolute -top-3 -right-2 bg-light-red px-2 py-2 rounded-lg">
                        <assets.close_2 width={12} height={12} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray px-8 py-4 rounded-lg ">
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.extraExtraLarge,
                    }}>2</Text>
                    <View className="absolute -top-3 -right-2 bg-light-red px-2 py-2 rounded-lg">
                        <assets.close_2 width={12} height={12} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray px-8 py-4 rounded-lg ">
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.extraExtraLarge,
                    }}>3</Text>
                    <View className="absolute -top-3 -right-2 bg-light-red px-2 py-2 rounded-lg">
                        <assets.close_2 width={12} height={12} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="bg-dark-blue px-8 py-4 rounded-lg ">
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.extraExtraLarge,
                    }} className="text-white">4</Text>
                    <View className="absolute -top-3 -right-2 bg-light-red px-2 py-2 rounded-lg">
                        <assets.close_2 width={12} height={12} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray px-8 py-4 rounded-lg ">
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.extraExtraLarge,
                    }}>5</Text>
                    <View className="absolute -top-3 -right-2 bg-light-red px-2 py-2 rounded-lg">
                        <assets.close_2 width={12} height={12} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="bg-light-blue flex items-center justify-center rounded-full h-[70px] w-[70px]">
                    <Text
                        className="text-white"
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.extraMedium,
                        }}>ADD</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TablesCard
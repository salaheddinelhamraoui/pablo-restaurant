import { View, Text, SafeAreaView } from 'react-native';
import HeaderBanner from "../../components/HeaderBanner";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, assets } from "../../constants";

const EditCategories = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <HeaderBanner />
                <Text>Categories</Text>
            </View>
        </SafeAreaView>
    )
}

export default EditCategories
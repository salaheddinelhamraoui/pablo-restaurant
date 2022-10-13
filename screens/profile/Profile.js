import { View, Text, SafeAreaView } from 'react-native';
import HeaderBanner from "../../components/HeaderBanner";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import BottomNavigation from "../../components/BottomNavigation";

const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <HeaderBanner />
                <Text>Profile</Text>
            </View>
            <BottomNavigation />
        </SafeAreaView>
    )
}

export default Profile
import { View, Text, TextInput } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native';
import { COLORS, FONTS, SIZES, assets } from "../../../constants";
import { useState } from "react"

const Profile = () => {

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    return (
        <View>
            <View className="flex flex-col mt-8">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Email</Text>
                <TextInput
                    placeholder=""
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Phone *</Text>
                <TextInput
                    placeholder=""
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Fiscale Name *</Text>
                <TextInput
                    placeholder=""
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Sole Administrator</Text>
                <TextInput
                    placeholder="Name"
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
                <TextInput
                    placeholder="Surnames"
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>NIF / CIF *</Text>
                <TextInput
                    placeholder=""
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>VAT *</Text>
                <TextInput
                    placeholder=""
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Local Address *</Text>
                <TextInput
                    placeholder="Street"
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
                <View className="flex flex-row gap-4">
                    <TextInput
                        placeholder="Zip"
                        onChangeText={() => { }}
                        className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                    />
                    <TextInput
                        placeholder="City"
                        onChangeText={() => { }}
                        className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                    />
                    <TextInput
                        placeholder="Country"
                        onChangeText={() => { }}
                        className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                    />
                </View>
            </View>
            <View className="flex flex-col mt-2">
                <View className="flex flex-row justify-center items-center">
                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Fiscal Address *</Text>
                    <View className="ml-auto mb-2 flex flex-row" >
                        <Text className="mt-auto mr-2" style={{ fontFamily: FONTS.bold, fontSize: SIZES.small }}>
                            Same as Local?
                        </Text>
                        <ToggleSwitch
                            isOn={isSwitchOn}
                            onColor="#4ABFD9"
                            offColor="#565958"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="small"
                            onToggle={() => setIsSwitchOn(!isSwitchOn)}
                        />
                    </View>
                </View>
                <TextInput
                    placeholder="Street"
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
                <View className="flex flex-row gap-4">
                    <TextInput
                        placeholder="Zip"
                        onChangeText={() => { }}
                        className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                    />
                    <TextInput
                        placeholder="City"
                        onChangeText={() => { }}
                        className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                    />
                    <TextInput
                        placeholder="Country"
                        onChangeText={() => { }}
                        className="bg-gray w-[28%] rounded-lg px-2 py-1 mt-2 mb-4"
                    />
                </View>
            </View>
            <View className="flex flex-col mt-2">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>IBAN *</Text>
                <TextInput
                    placeholder=""
                    style={{ flex: 1 }}
                    onChangeText={() => { }}
                    className="bg-gray rounded-lg px-2 py-1 mt-2 mb-4"
                />
            </View>
        </View>
    )
}

export default Profile
import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { COLORS, FONTS, SIZES, assets, } from "../../../constants";
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCloudArrowUp, faClose } from '@fortawesome/free-solid-svg-icons';
import ToggleSwitch from 'toggle-switch-react-native';


const Settings = () => {

    const [veganoState, setVeganoState] = useState(false);
    const [vegetarianoState, setVegetarianoState] = useState(false);
    const [noPicantesState, setNoPicantesState] = useState(false);

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result.uri);
        console.log(result);
    }
    return (
        <View>
            <View className="flex flex-col mt-8">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Banner *</Text>
                <Pressable
                    className="bg-gray flex flex-col items-center justify-center rounded-lg px-2 py-4 mt-2 mb-4"
                    onPress={pickDocument}
                >
                    <FontAwesomeIcon icon={faCloudArrowUp} size={30} color={'#B1ADAD'} />
                    <Text className="mt-2 text-light-gray">
                        Reccomendation: 1950 X 900 px
                    </Text>
                </Pressable>
            </View>
            <View className="flex flex-col mb-6">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Tips %</Text>
                <View className="mt-2 flex flex-row justify-between">
                    <Pressable className="bg-gray py-8 px-auto w-[30%] rounded-lg">
                        <Text className="text-center" style={{ fontSize: SIZES.extraMedium, fontFamily: FONTS.light }}>1 %</Text>
                    </Pressable>
                    <Pressable className="bg-gray py-8 px-auto w-[30%] rounded-lg">
                        <Text className="text-center" style={{ fontSize: SIZES.extraMedium, fontFamily: FONTS.light }}>1,5 %</Text>
                    </Pressable>
                    <Pressable className="bg-gray py-8 px-auto w-[30%] rounded-lg">
                        <Text className="text-center" style={{ fontSize: SIZES.extraMedium, fontFamily: FONTS.light }}>2 %</Text>
                    </Pressable>
                </View>
            </View>
            <View className="flex flex-col mb-6">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Nutritional conditions</Text>
                <View className="mt-2 flex flex-row justify-between flex-wrap bg-gray  px-2 rounded-lg pb-3">

                    <View className="flex flex-row mt-3">
                        <ToggleSwitch
                            isOn={veganoState}
                            onColor="#4ABFD9"
                            offColor="#565958"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="small"
                            onToggle={() => setVeganoState(!veganoState)}
                        />
                        <Text className="ml-1 text-center" style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}>VEGANO</Text>
                    </View>
                    <View className="flex flex-row mt-3">
                        <ToggleSwitch
                            isOn={vegetarianoState}
                            onColor="#4ABFD9"
                            offColor="#565958"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="small"
                            onToggle={() => setVegetarianoState(!vegetarianoState)}
                        />
                        <Text className="ml-1 text-center" style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}>VEGETARIANO</Text>
                    </View>
                    <View className="flex flex-row mt-3">
                        <ToggleSwitch
                            isOn={noPicantesState}
                            onColor="#4ABFD9"
                            offColor="#565958"
                            label=""
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="small"
                            onToggle={() => setNoPicantesState(!noPicantesState)}
                        />
                        <Text className="ml-1 text-center" style={{ fontSize: SIZES.small, fontFamily: FONTS.light }}>NO PICANTES</Text>
                    </View>

                </View>
            </View>
            <View className="flex flex-col mb-1">
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraMedium }}>Franchise/Chain</Text>
                <View className="mt-2 bg-gray py-3 px-4 rounded-lg">
                    <TextInput
                        placeholder="____________"
                        onChangeText={() => { }}
                        className="bg-white rounded-lg px-2 pt-5 pb-2 "
                        style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}
                    />
                </View>
            </View>
            <View className="flex flex-col">
                <View className="flex flex-row bg-gray py-3 px-4 rounded-lg">
                    <View className="bg-white p-4 rounded-lg w-[42%]">
                        <Text className="text-dark-gray-2 mb-2" style={{
                            fontSize: SIZES.base,
                        }}>
                            Company or Legal Name
                        </Text>
                        <Text className="text-dark-gray-2" style={{
                            fontSize: SIZES.base,
                        }}>
                            Legal Address 1
                        </Text>
                        <Text className="text-dark-gray-2" style={{
                            fontSize: SIZES.base,
                        }}>
                            Legal Address 2
                        </Text>
                        <Text className="mt-2" style={{
                            fontFamily: FONTS.bold,

                        }}>
                            FIN
                        </Text>
                    </View>
                    <View className="ml-2 w-[56%]">
                        <Text className="text-dark-gray-2 px-2 mb-2 " style={{ fontSize: SIZES.medium }}>
                            The local selected is already connected to this franchise
                        </Text>
                        <Pressable className="flex flex-row bg-dark-red py-1 px-auto rounded-lg w-[100px] ml-2">
                            <View className="rounded-full bg-light-red w-4 h-4 ml-2 mr-2">
                                <FontAwesomeIcon icon={faClose} size={17} color={'#fff'} />
                            </View>
                            <Text className="text-center text-white" style={{ fontSize: SIZES.medium, fontFamily: FONTS.bold }}>Remove</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Settings
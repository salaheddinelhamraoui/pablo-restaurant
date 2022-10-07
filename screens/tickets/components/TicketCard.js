import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { FONTS, SIZES } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TicketCard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TouchableOpacity
      className="bg-gray mt-4 rounded-lg px-4 py-2"
      onPress={() => setCollapsed(!collapsed)}
    >
      <View className="flex flex-col">
        <View className="flex flex-row">
          <View className="flex flex-col">
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
              }}
            >
              Order #Order-id
            </Text>
            <Text
              style={{
                fontFamily: FONTS.light,
                fontSize: SIZES.small,
              }}
              className="mt-1"
            >
              Legal Address
            </Text>
          </View>
          <View className="ml-auto mr-4 flex flex-col ">
            <Text
              style={{
                fontFamily: FONTS.light,
                fontSize: SIZES.small,
              }}
              className="text-right"
            >
              24/02/2022
            </Text>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
              }}
              className="text-right"
            >
              12 : 23
            </Text>
          </View>
        </View>
        {collapsed && (
          <View className="flex flex-col mt-4">
            <View className="flex flex-row">
              <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
              >
                Order #Order-id
              </Text>
            </View>
          </View>
        )}
        <View className="flex flex-row mt-6">
          <View className="flex flex-col">
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
              }}
            >
              PROPINA (TIP)
            </Text>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
              }}
            >
              TOTAL
            </Text>
          </View>
          <View className="flex flex-col ml-auto mr-4">
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
              }}
              className="text-right"
            >
              0,00
            </Text>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
              }}
              className="text-right"
            >
              22,00
            </Text>
          </View>
        </View>
      </View>
      <View className="absolute right-3 top-[50%]">
        {collapsed ? (
          <FontAwesomeIcon icon={faChevronUp} size={16} color={"#000"} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} size={16} color={"#000"} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;

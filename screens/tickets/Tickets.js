import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView,
  useWindowDimensions
} from "react-native";
import { FocusedStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { LineChart } from "react-native-chart-kit";
import TicketCard from "./components/TicketCard";
import BottomNavigation from "./../../components/BottomNavigation";
import HeaderBanner from "../../components/HeaderBanner";

const Tickets = () => {
  const windowWidth = useWindowDimensions().width;
  const [openedTicket, setOpenedTicket] = useState(0);

  const [scroolPosition, setScroolPosition] = useState(0);


  const data = {
    labels: ["18-12", "19-12", "20-12"],
    datasets: [
      {
        data: [200, 220, 208],
        strokeWidth: 1, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `#4ABFD9`,
    labelColor: (opacity = 1) => `#000`,
    strokeWidth: 0, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
  };


  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > 0) {
      setScroolPosition(1);
    } else {
      setScroolPosition(0);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
      <View className="flex flex-col h-full">
        <HeaderBanner scroolPosition={scroolPosition} />
        <ScrollView onScroll={handleScroll}>
          <View className="bg-white mb-[20px] mx-[13px] mt-5 rounded-2xl grow pb-16">
            <View className="flex flex-col items-center w-full">
              <View className="w-full px-6 pt-6">
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.extraMedium,
                    }}
                  >
                    View summary
                  </Text>
                </View>
              </View>
              <View className="bg-white rounded-2xl w-full px-4 py-4">
                <View className="bg-gray  mx-[12px] rounded-2xl">
                  <View className="flex flex-row w-full">
                    <View className="p-4 pr-0 flex flex-col w-[25%] mr-2">
                      <View className="">
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                        >
                          Total
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                          className="border-b-[0.6px] pb-2 mb-2"
                        >
                          34.622,34€
                        </Text>
                      </View>
                      <View className="">
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                        >
                          Gross margin
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.small,
                          }}
                          className="border-b-[0.6px] pb-2 mb-2"
                        >
                          3.462,23€
                        </Text>
                      </View>
                      <View className="">
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                        >
                          IVA 21%
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.small,
                          }}
                          className="pb-2"
                        >
                          600,88€
                        </Text>
                      </View>
                    </View>
                    <View
                      className="p-4 w-full"
                    >
                      <LineChart
                        data={data}
                        height={190}
                        width={windowWidth / 2.1}
                        verticalLabelRotation={15}
                        chartConfig={chartConfig}
                        style={{ padding: 4, borderRadius: 16 }}
                        bezier
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="w-full px-6 pt-6">
                <View className="flex flex-row">
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.extraMedium,
                    }}
                  >
                    Monthly orders
                  </Text>
                  <Pressable className="flex flex-row ml-auto bg-light-blue rounded-lg px-2 py-1">
                    <Text
                      className="text-white mr-2 "
                      style={{ fontSize: SIZES.base }}
                    >
                      Download Statement
                    </Text>
                    <FontAwesomeIcon
                      icon={faDownload}
                      size={12}
                      color={"#fff"}
                    />
                  </Pressable>
                </View>
                <TicketCard openedTicket={openedTicket} setOpenedTicket={setOpenedTicket} ticketId={0} />
                <TicketCard openedTicket={openedTicket} setOpenedTicket={setOpenedTicket} ticketId={1} />
                <TicketCard openedTicket={openedTicket} setOpenedTicket={setOpenedTicket} ticketId={2} />
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
      <BottomNavigation />


    </SafeAreaView>
  );
};

export default Tickets;

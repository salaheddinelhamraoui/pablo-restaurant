import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";
import { FONTS, SIZES, assets } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronUp, faClose } from "@fortawesome/free-solid-svg-icons";

const TicketCard = ({ openedTicket, setOpenedTicket, ticketId }) => {


  return (
    <TouchableOpacity
      className={`bg-gray mt-4 rounded-lg px-4 py-2 mb-2 z-8 ${openedTicket === ticketId ? 'mb-6' : ''}`}
      onPress={() => {
        setOpenedTicket(ticketId);
      }}
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
            {
              openedTicket === ticketId && <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
                className="mt-1"
              >
                Company or Legal Name
              </Text>
            }
            {
              openedTicket === ticketId && <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
                className="mt-1"
              >
                CIF (Financial Identification Number)
              </Text>
            }
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
        {openedTicket === ticketId && (
          <View className="flex flex-col mt-4">
            <View className="flex flex-row justify-between mr-4">
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
                className="w-[6%]"
              >
                6X
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
                className="w-[40%]"
              >
                Coca-Colla Zero
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
              >
                1,90
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
              >
                11,40
              </Text>
            </View>
            <View className="flex flex-row justify-between mr-4">
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
                className="w-[6%]"
              >
                2X
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
                className="w-[40%]"
              >
                Nachos con queso
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
              >
                6,20
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
              >
                12,40
              </Text>
            </View>
            <View className="flex flex-row justify-between mr-4 mt-2">
              <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
                className="w-[6%]"
              >
                #1
              </Text>
              <View className="flex flex-col w-[40%]">
                <Text
                  style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.small,
                  }}
                >
                  + Extra#1
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.small,
                  }}
                >
                  + Extra#2
                </Text>
              </View>
              <View className="flex flex-col">
                <Text
                  style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.small,
                  }}
                >
                  +0,50
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.small,
                  }}
                >
                  +1.00
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                }}
              >
                {"        "}
              </Text>
            </View>
          </View>
        )}
        <View className="flex flex-row mt-6">
          <View className="flex flex-col">
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
              }}
            >
              PROPINA (TIP)
            </Text>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
              }}
            >
              TOTAL
            </Text>
            {openedTicket === ticketId &&
              <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
              >
                IVA 21%
              </Text>
            }
            {openedTicket === ticketId &&
              <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
              >
                IVA 10%
              </Text>
            }
          </View>
          <View className="flex flex-col ml-auto mr-4">
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
              }}
              className="text-right"
            >
              0,00
            </Text>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
              }}
              className="text-right"
            >
              22,00
            </Text>
            {openedTicket === ticketId &&
              <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
                className="text-right"
              >
                0,00
              </Text>
            }
            {openedTicket === ticketId &&
              <Text
                style={{
                  fontFamily: FONTS.light,
                  fontSize: SIZES.small,
                }}
                className="text-right"
              >
                2,16
              </Text>
            }
          </View>
        </View>
      </View>
      <View className="absolute right-3 top-[50%]">
        {openedTicket === ticketId ? (
          <FontAwesomeIcon icon={faChevronUp} size={16} color={"#000"} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} size={16} color={"#000"} />
        )}
      </View>
      {
        openedTicket === ticketId &&
        <View className="absolute -bottom-8 bg-red right-4 rounded-b-lg left-8 z-1 px-4 py-1">
          <View className="flex flex-row items-center">

            <Pressable onPress={() => { }} className="">
              <View className="flex flex-col justify-center items-center border border-white mr-2  w-[25px] h-[25px] rounded-full">
                <FontAwesomeIcon icon={faClose} size={16} color={'#fff'} />
              </View>
            </Pressable>
            <Text className="text-white" style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,
            }}>
              Cancel and refund
            </Text>
          </View>
        </View>
      }
    </TouchableOpacity>
  );
};

export default TicketCard;

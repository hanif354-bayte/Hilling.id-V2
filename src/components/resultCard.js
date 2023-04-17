import React from 'react';
import { useSelector } from 'react-redux';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () =>{
    const ticket = useSelector((state) => state.ticket)

    return(
        <View className="flex-1 pb-20">
            <View className="w-11/12 flex-col bg-white self-center my-6 p-3">
                <View className="flex-row py-3 items-center justify-around">
                    <Text>({ ticket.location })</Text>
                    <Text>-</Text>
                    <Text>({ ticket.destination })</Text>
                </View>
                <View className="flex-row py-3 items-center justify-around">
                    <MaterialIcons name="airplanemode-active" size={24} color="green" />
                    <Text className="text-lg font-medium">Majapahit Air</Text>
                    <Text className="text-blue-800">({ ticket.date })</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;
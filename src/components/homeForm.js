import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { setForm } from '../redux/futures/ticket'
import { getMyIP } from '../redux/futures/info';

const Forms = () =>{
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const ticket = useSelector(state => state.ticket)
    const info = useSelector(state => state.info)

    return(
        <View
            onLayout={() => dispatch(getMyIP())} 
            className="items-start px-8 bg-white rounded-xl py-5 shadow-2xl">
            <Text className="text-xl font-semibold pt-3 pb-2">IP Saya: { info.ip }</Text>
            <Text className="text-xl font-semibold pt-3 pb-2">Lokasi Keberangkatan</Text>
            <View className="flex-row rounded-md border border-slate-700 p-2 w-full items-center">
                <FontAwesome5 name="plane-departure" size={20} color="green" />
                <TextInput 
                    value={ticket.location}
                    onChangeText={(value) => dispatch(setForm({key: 'location', value}))}
                    className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Masukkan Lokasi Keberangkatan"/>
            </View>

            <Text className="text-xl font-semibold pt-3 pb-2">Lokasi Tujuan</Text>
            <View className="flex-row rounded-md border border-slate-700 p-2 w-full items-center">
                <FontAwesome5 name="plane-arrival" size={20} color="green" />
                <TextInput 
                    value={ticket.destination}
                    onChangeText={(value) => dispatch(setForm({key: 'destination', value}))}
                    className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Masukkan Lokasi Tujuan"/>
            </View>

            <Text className="text-xl font-semibold pt-3 pb-2">Tanggal Keberangkatan</Text>
            <View className="flex-row rounded-md border border-slate-700 p-2 w-full items-center">
                <FontAwesome5 name="calendar-alt" size={20} color="green" />
                <TextInput 
                    value={ticket.date}
                    onChangeText={(value) => dispatch(setForm({key: 'date', value}))}
                    className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Masukkan Tanggal Keberangkatan"/>
            </View>

            <View className="w-full py-6">
                <TouchableOpacity className="w-full bg-orange-600 rounded-md justify-center items-center self-center py-3" onPress={() => navigation.navigate('Result')}>
                    <Text className="text-white font-bold text-xl">
                        Cari
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Forms;
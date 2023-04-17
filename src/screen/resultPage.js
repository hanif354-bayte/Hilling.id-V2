import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {Card} from '../components';
import {clearForm} from '../redux/futures/ticket'

const Result = ({navigation}) =>{
    const dispatch = useDispatch()
    const developer = useSelector((state) => state.developer)
    const ticket = useSelector((state) => state.ticket)

    return(
        <View className="bg-slate-100 flex-1">
            <View className="bg-lime-600 h-1/6 w-full items-center">
                <View className="flex-row w-11/12 justify-between pt-6 items-center">
                    <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate('Home')
                            dispatch(clearForm())
                        }}>
                        <FontAwesome5 className="" name="long-arrow-alt-left" size={30} color="white"/>
                    </TouchableOpacity>
                    <Text className="text-2xl text-white font-bold">
                        Hiling.id
                    </Text>
                    <FontAwesome5 name="user-alt" size={25} color="white" />
                </View>
                <View className="items-center pt-2">
                    <Text className="text-white font-normal text-base">
                        Hasil Pencarian Penerbangan 
                    </Text>
                    <Text className="text-white font-normal text-base">
                        ({ ticket.date })
                    </Text>
                </View>
            </View>
            
            <ScrollView contentContainerStyle={{flexGrow: 1}}keyboardShouldPersistTaps='handled'>
                <Card/>
            </ScrollView>
            <View className="bottom-0 absolute w-full bg-slate-100">
                <Text className="self-center py-8">
                    Copyright { developer.name } ©️{ developer.nim }
                </Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

export default Result;
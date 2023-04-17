import React from 'react';
import { useSelector } from 'react-redux'
import {View, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Forms} from '../components';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () =>{
    const developer = useSelector((state) => state.developer);

    return(
        <View className="bg-slate-100 flex-1">
            <View className="z-10 bg-lime-600 h-2/4 w-full items-center">
                <View className="flex-row w-11/12 justify-between pt-6 items-center">
                    <FontAwesome5 className="" name="bars" size={33} color="white" />
                    <Text className="text-2xl text-white font-bold translate-y-5">
                        Hiling.id
                    </Text>
                    <FontAwesome5 name="user-alt" size={25} color="white" />
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="z-20 h-full w-10/12 absolute justify-center self-center">
                <Forms/>
            </KeyboardAvoidingView>
            <Text className="bottom-0 absolute self-center pb-8">
                Copyright { developer.name } ©️{ developer.nim }
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Home;
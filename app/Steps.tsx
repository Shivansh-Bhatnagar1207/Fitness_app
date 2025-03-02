import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Steps() {
  return (
    <SafeAreaView>
     <ScrollView>
        <View className='h-screen'>
            <View className='bg-primary aspect-square h-42 mx-auto flex justify-center items-center m-20 border-accent border-dashed border-2 rounded-lg'>
            <Text className='font-bold text-2xl text-clip'>Connect to a smart device</Text>
            </View>
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}
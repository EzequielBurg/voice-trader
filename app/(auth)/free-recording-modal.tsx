import { CloseIcon } from '@/assets/icons/CloseIcon';
import { RecordLargeIcon } from '@/assets/icons/RecordLargeIcon';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function FreeRecordingModalScreen() {
  function handleBackNavigation() {
    router.back()
  }

  return (
    <LinearGradient
      colors={['#0067E5', '#4D95ED']}
      locations={[0.7, 0.99]}
      className='flex-1 items-center py-28 px-6 h-screen'
    >
      <View className="flex-1 justify-start h-full">
        <View className="flex-row justify-between w-full items-center">
          <RecordModeSelector />
          <TouchableOpacity className='p-1 rounded-full bg-gray-voice-100' onPress={handleBackNavigation}>
            <CloseIcon />
          </TouchableOpacity>
        </View>

        <View className='h-full gap-10 mt-[30%] items-center'>
          <Text className="text-white text-3xl mb-5 font-semibold">Olá!</Text>
          <Link href="/(auth)/guided-recording-modal">
            <RecordLargeIcon />
          </Link>
          <Text className="text-white text-3xl max-w-64 font-semibold flex-1 flex-row text-center">
            Toque para gravar e transcrever
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
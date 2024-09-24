import { CloseIcon } from '@/assets/icons/CloseIcon';
import { PulsingRecordLargeIcon } from '@/assets/icons/PulsingRecordLargeIcon';
import { Input } from '@/components/Input';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function GuidedRecordingModalScreen() {
  function handleBackNavigation() {
    router.back()
  }

  return (
    <View className='flex-1 py-28 px-6 h-screen items-center bg-white'>
      <View className="flex-row justify-between w-full items-center">
        <RecordModeSelector />

        <TouchableOpacity className='p-1 rounded-full bg-gray-voice-100' onPress={handleBackNavigation}>
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <View className='h-full gap-10 mt-[30%] items-center'>
        <TouchableOpacity>
          <PulsingRecordLargeIcon />
        </TouchableOpacity>

        <View className='flex flex-col h-full flex-1 gap-3'>
          <Input placeholder='Digite aqui' />

          <Text className='text-black-voice text-lg'>Pergunta 1</Text>
          <Text className='text-black-voice text-lg'>Pergunta 2</Text>
          <Text className='text-black-voice text-lg'>Pergunta 2</Text>
          <Text className='text-black-voice text-lg'>Pergunta 2</Text>
          <Text className='text-black-voice text-lg'>Pergunta 2</Text>
        </View>

      </View>
    </View>
  );
}

import { PulsingRecordLargeIcon } from '@/assets/icons/PulsingRecordLargeIcon';
import { CloseAnyRecordingModal } from '@/components/CloseAnyRecordingModal';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function GuidedRecordingModalScreen() {
  return (
    <View className='flex-1 py-28 px-6 h-screen items-center bg-white'>
      <View className="flex-row justify-between w-full items-center">
        <RecordModeSelector />
        <CloseAnyRecordingModal />
      </View>

      <View className='h-full gap-8 mt-[30%] items-center'>
        <TouchableOpacity>
          <PulsingRecordLargeIcon />
        </TouchableOpacity>

        <View className='flex flex-col h-full px-1.5 flex-1 gap-3'>
          <Text className='text-black-voice text-lg font-semibold'>Será uma compra ou uma venda?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Para quem será destinado?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Qual é o produto?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Há alguma especificação. Se sim, qual?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Qual a quantidade?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Qual o valor unitário?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Qual o valor total?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Qual a forma de pagamento?</Text>
          <Text className='text-black-voice text-lg font-semibold'>Há alguma observação a ser feita? Se sim, qual?</Text>
        </View>

      </View>
    </View>
  );
}

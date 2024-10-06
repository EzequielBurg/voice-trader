import { PulsingRecordLargeIcon } from '@/assets/icons/PulsingRecordLargeIcon';
import { CloseAnyRecordingModal } from '@/components/CloseAnyRecordingModal';
import { RecordModeSelector } from '@/components/RecordModeSelector';
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function GuidedRecordingModalScreen() {
  return (
    <View className='flex-1 py-28 px-6 h-screen items-center bg-white'>
      <View className="flex-row justify-between w-full items-center">
        <RecordModeSelector />
        <CloseAnyRecordingModal />
      </View>

      <View className='h-full gap-8 mt-[20%] items-center'>
        <TouchableOpacity>
          <PulsingRecordLargeIcon />
        </TouchableOpacity>

        <View className='flex flex-col h-full px-1.5 flex-1 gap-3 items-center'>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Será uma compra ou uma venda?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Para quem será destinado?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Qual é o produto?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Há alguma especificação. Se sim, qual?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Qual a quantidade?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Qual o valor unitário?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Qual o valor total?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Qual a forma de pagamento?</Text>
          </View>
          <View className='flex-row items-center gap-2'>
            <MaterialIcons name='tips-and-updates' size={20} color={colors['blue-voice'][600]} />
            <Text className='text-black-voice text-lg'>Há alguma observação a ser feita? Se sim, qual?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

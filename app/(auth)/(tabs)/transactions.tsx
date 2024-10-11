import { BuySellSelector } from '@/components/BuySellSelector';
import { LineDivider } from '@/components/LineDivider';
import { AntDesign } from '@expo/vector-icons';
import clsx from 'clsx';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

type PeriodType = '1d' | '7d' | '15d' | '1m' | '6m' | '1a' | 'custom';

export default function TransactionsScreen() {
  const [currPeriod, setCurrPeriod] = useState<PeriodType>('1d')

  return (
    <View className='flex-1 h-screen px-8 py-4'>
      <BuySellSelector />
      <LineDivider />
      <View className='flex-1 flex-row gap-1'>
        <View className='h-11 px-3 border border-gray-voice-100 flex-row items-center justify-center rounded-xl'>
          <Text className='text-black-voice font-semibold text-sm'>Períodos</Text>
        </View>
        <View className='flex-row max-h-10 justify-between items-center flex-1 bg-gray-voice-100 rounded-lg p-[3px]'>
          <Pressable onPress={() => setCurrPeriod('1d')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === '1d',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === '1d',
              'text-black-voice': currPeriod !== '1d',
            })}>
              1D
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrPeriod('7d')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === '7d',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === '7d',
              'text-black-voice': currPeriod !== '7d',
            })}>
              7D
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrPeriod('15d')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === '15d',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === '15d',
              'text-black-voice': currPeriod !== '15d',
            })}>
              15D
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrPeriod('1m')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === '1m',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === '1m',
              'text-black-voice': currPeriod !== '1m',
            })}>
              1M
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrPeriod('6m')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === '6m',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === '6m',
              'text-black-voice': currPeriod !== '6m',
            })}>
              6M
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrPeriod('1a')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === '1a',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === '1a',
              'text-black-voice': currPeriod !== '1a',
            })}>
              1A
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrPeriod('custom')} className={clsx('p-2 rounded-lg flex items-center justify-center', {
            'bg-white': currPeriod === 'custom',
          })}>
            <Text className={clsx('text-sm font-semibold', {
              'text-blue-voice-600': currPeriod === 'custom',
              'text-black-voice': currPeriod !== 'custom',
            })}>
              <AntDesign name='swap' size={15} />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

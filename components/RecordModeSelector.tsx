import { RecordShortIcon } from "@/assets/icons/RecordShortIcon";
import clsx from "clsx";
import { useSegments } from 'expo-router';
import { Text, View } from "react-native";

export function RecordModeSelector() {
  const segments = useSegments()

  const isModal = (segments[0]?.includes('modal'))

  return (
    <View className="flex-row items-center max-w-36 gap-1">
      <View className="rounded-full justify-center items-center w-14 h-14 bg-white">
        <RecordShortIcon />
      </View>
      <View>
        <Text className={clsx("font-semibold text-base", { "text-blue-voice-200": isModal, "text-white": !isModal })}>
          Gravação Guiada Ativa
        </Text>
        <Text className={clsx("text-sm", { "text-black-voice": isModal, "text-white": !isModal })}>
          Clique para alterar
        </Text>
      </View>
    </View>
  )
}

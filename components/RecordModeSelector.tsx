import { RecordShortIcon } from "@/assets/icons/RecordShortIcon";
import clsx from "clsx";
import { Link, useSegments } from 'expo-router';
import { Text, View } from "react-native";

export function RecordModeSelector() {
  const segments = useSegments()

  const notWhite = (segments[1]?.includes('guided') || segments[1]?.includes('typed'))

  return (
    <>
      <Link href='/(auth)/recording-mode-modal'>
        <View className="flex-row items-center max-w-36 gap-3">
          <View className="rounded-full justify-center items-center w-14 h-14 bg-white">
            <RecordShortIcon />
          </View>
          <View>
            <Text className={clsx("font-semibold text-base", { "text-blue-voice-200": notWhite, "text-white": !notWhite })}>
              Gravação Guiada Ativa
            </Text>
            <Text className={clsx("text-sm", { "text-black-voice": notWhite, "text-white": !notWhite })}>
              Clique para alterar
            </Text>
          </View>
        </View>
      </Link>
    </>
  )
}

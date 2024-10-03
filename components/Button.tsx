import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function Button({children, ...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity className="flex flex-row justify-center rounded-lg bg-blue-voice-600 py-3 px-10" {...rest}>
      <Text className="text-white font-semibold text-xl">{children}</Text>
    </TouchableOpacity>
  )
}

import { TextInput, TextInputProps } from "react-native";

export function Input({...rest}: TextInputProps) {
  return (
    <TextInput
      // onChangeText={}
      placeholderTextColor='#9E9E9E'
      className="border border-[#9E9E9E] flex placeholder:font-semibold w-max h-11 rounded-lg p-3"
      {...rest}
    />
  )
}

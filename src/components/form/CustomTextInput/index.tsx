import { Text, TextInput, View } from "react-native";

function CustomTextInput({ field, form }: any) {
  const { name, onBlur, onChange, value } = field;
  const { errors, touched, setFieldTouched } = form;

  const hasError = errors[name]?.length > 0 && touched[name];

  return (
    <View style={{marginVertical:5}} >
      <TextInput
        testID={name}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        onPressIn={()=>{
          setFieldTouched(name)
        }}
        placeholder={name}
        value={value}
        onChangeText={(text) => onChange(name)(text)} />
      {hasError && <Text style={{color:"red"}} >Error: {errors[name]}</Text>}
    </View>
  )
}

export { CustomTextInput }

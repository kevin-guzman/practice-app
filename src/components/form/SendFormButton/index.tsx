import { Button, View } from "react-native";

function SendFormButton({ field, form }: any) {
  const { value } = field;
  const { errors} = form;

  return (
    <View style={{marginVertical:5}} >
      <Button 
        title="Register" 
        disabled={Object.keys(errors).length > 0} 
        onPress={()=>{form.handleSubmit(value)}}/>
    </View>
  )
}

export { SendFormButton }

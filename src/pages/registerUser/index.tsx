import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import { ResgisterUserForm } from './RegisterUserForm';

function ResgisterUser({}){
  return(
    <SafeAreaView>
      <Text>Register user</Text>
      <ResgisterUserForm/>
    </SafeAreaView>
  )
}

export {ResgisterUser}
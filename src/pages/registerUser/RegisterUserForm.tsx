import { Field, Form, Formik, useFormikContext } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import {
  Text, TextInput, View,
} from 'react-native';
import { useRegisterUser } from './useRegisterUser';
import { CustomTextInput } from '../../components/form/CustomTextInput';
import { SendFormButton } from '../../components/form/SendFormButton';

function ResgisterUserForm({ }) {
  const { formSchema, initialValues, onSubmit } = useRegisterUser()
  // const { values } = useFormikContext();

  return (
    <View>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          isValid,
          values,
          setFieldValue,
          setFieldTouched,
          errors,
          touched,
        }) => (
          <Fragment>
            <Field
              component={CustomTextInput}
              name="name"
            />
  
            <Field
            component={CustomTextInput}
            name="age"
            />

            <Field 
              component={SendFormButton}
            />

          </Fragment>
        )}


      </Formik >
    </View >
  )
}


export { ResgisterUserForm }
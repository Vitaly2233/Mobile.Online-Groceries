import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Btn from './Btn';
import Input from './Input';

const SignUpForm = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [secureEntry, setSecureEntry] = useState(true);

  console.log(errors);

  const handleError = () => {
    console.log('handle');
  };

  return (
    <View>
      <Text style={styles.categoryText}>Sign Up</Text>
      <Text style={styles.transparentText}>
        Enter yout credentials to continue
      </Text>
      <Text style={styles.inputName}>Username</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onInputChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={''}
          />
        )}
        name="username"
      />
      <Text style={styles.inputName}>Email</Text>
      <Controller
        control={control}
        defaultValue={''}
        rules={{
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onInputChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={''}
            iconName={
              !errors.email &&
              getValues('email') &&
              getValues('email').length > 0
                ? 'check'
                : null
            }
          />
        )}
        name="email"
      />
      <Text style={styles.inputName}>Password</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onInputChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={''}
            iconName={'hide'}
            secureTextEntry={secureEntry}
            iconPress={() => setSecureEntry(!secureEntry)}
          />
        )}
        name="password"
      />
      <Text style={[styles.transparentText, {fontSize: 14}]}>
        By continuing you agree to our Terms of Service and Privacy Policy.
      </Text>
      <Btn
        text={'Sign Up'}
        onClick={handleSubmit(handleError, handleError)}
        buttonStyle={styles.loginBtn}
      />
      <View style={styles.buttomTextWrapper}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <Text
          onPress={() => {
            navigation.navigate('LogIn');
          }}
          style={[styles.bottomText, styles.lightText]}>
          Log in
        </Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  categoryText: {
    color: '$mainDark',
    fontSize: 26,
    fontFamily: '$mediumFont',
  },
  transparentText: {
    color: '$gray',
    fontSize: 16,
    fontFamily: '$regularFont',
    marginVertical: 10,
  },
  inputName: {
    marginTop: 30,
    color: '$gray',
    fontSize: 16,
    fontFamily: '$mediumFont',
  },
  forgotText: {
    fontSize: 14,
    fontFamily: '$mediumFont',
    alignSelf: 'flex-end',
    color: '$mainDark',
    marginVertical: 10,
  },
  loginBtn: {
    marginVertical: 25,
  },
  buttomTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: 14,
    fontFamily: '$mediumFont',
    color: '$mainDark',
  },
  lightText: {
    color: '$lightGreen',
  },
});

export default SignUpForm;

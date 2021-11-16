import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Input from './Input';
import Btn from './Btn';

const LogInForm = ({navigation}) => {
  const {
    control,
    handleSubmit: handleLogin,
    formState: {errors},
  } = useForm();

  const login = () => {};

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Text style={styles.categoryText}>Loging</Text>
      <Text style={styles.transparentText}>Enter your emails and password</Text>
      <Text style={styles.inputName}>Email</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:
            /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onInputChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={''}
          />
        )}
        name="email"
      />
      <Text style={styles.inputName}>password</Text>
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
        name="password"
      />
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <Btn
        text={'Log In'}
        onClick={handleLogin(login)}
        buttonStyle={styles.loginBtn}
      />
      <View style={styles.buttomTextWrapper}>
        <Text style={styles.bottomText}>Don't hane an account? </Text>
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={[styles.bottomText, styles.lightText]}>
          Signup
        </Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  inputName: {
    marginTop: 30,
    color: '$gray',
    fontSize: 16,
    fontFamily: '$mediumFont',
  },
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

export default LogInForm;

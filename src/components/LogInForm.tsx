import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Input from './Input';
import Btn from './Btn';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';

import {login} from '../actions/user';
import {User} from '../models';

const LogInForm = observer(() => {
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

  const handleLogin = async (data: User) => {
    if (data.email && data.password) {
      await login(data.email, data.password);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.categoryText}>Loging</Text>
      <Text style={styles.transparentText}>Enter your emails and password</Text>
      <Text style={styles.inputName}>Email</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onChangeText={onChange}
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
      <Text style={styles.inputName}>password</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={''}
            iconName={'hide'}
            secureTextEntry={secureEntry}
          />
        )}
        name="password"
      />
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <Btn
        text={'Log In'}
        onClick={handleSubmit(handleLogin)}
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
});

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


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const WelcomeScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <View style={{backgroundColor: '#f8edeb',height:'100%'}}>
    <View style={styles.RegisterBox}>
      {/* Image after the form */}
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 25,
          color: '#4c956c',
          marginTop:20
        }}>
        AddRupee
      </Text>

      <Image
        source={require('../images/welcomeimg.png')}
        style={styles.welcomeImg}
      />
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.paragraph}>
        Create an account to use the Features
      </Text>
      <Text style={styles.paragraph}> of this App</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('EmpRegister')}
        style={styles.button} >
        <Text style={{ fontSize: 20, color: '#fff' }}>Sign Up</Text>
      </TouchableOpacity>

      <Text
      onPress={() => props.navigation.navigate('EmpLogin')}
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: 'red',
          marginTop: 30,
        }}>
        Login
      </Text>

      
      {/* <Text style={{ marginTop: 10, textAlign: 'center' }}>
        Started as Employee ?{' '}
        <TouchableOpacity>
          <Text
            style={{ color: '#3E9D7C' }}
            onPress={() => props.navigation.navigate('EmpRegister')}> EmpLogin
            Sign Up
          </Text>
        </TouchableOpacity>
      </Text> */}
  
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterBox: {
    marginTop: 20,
    marginLeft: 20,
   
  },

  welcomeImg: {
    height: 350,
    width: '90%',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 25,
  },
  heading: {
    marginTop: 80,
    marginBottom:20,
    fontSize: 30,
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    height: 50,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10, 
    marginLeft:20
  },
});

export default WelcomeScreen;
 
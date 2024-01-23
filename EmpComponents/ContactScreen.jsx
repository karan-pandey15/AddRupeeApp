import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [Branch, setBranch] = useState('');
  const [Tl, setTl] = useState('');
  const [userType, setUserType] = useState(''); // to track selected user type

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        
          <Image
            source={require('../images/bankImg.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Support</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={setName}
                  value={name}
                  placeholder="Enter FullName"
                />

                <View style={styles.phoneContainer}>
                  <Text style={styles.countryCode}>+91</Text>
                  <TextInput
                    style={styles.phoneInput}
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType="numeric"
                    maxLength={10}
                    placeholder="Enter Phone No"
                  />
                </View>

                <TextInput
                  style={styles.issueinput}
                  onChangeText={setName}
                  value={name}
                  placeholder="Describe Your Problem"
                />
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
              </TouchableOpacity>

              <Text style={{textAlign:'center',marginTop:20}}> OR </Text>

              <View style={styles.containersec}>
                <View style={styles.firstBox}>
                  <Text style={styles.txt}>+91 8887796224</Text>
                </View>
                <View style={styles.secBox}>
                  <Text style={styles.txt}> support@addrupee.com</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8edeb',
  },
  imageContainer: {
    height: 320,
    width: '90%',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 15, 
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  scrollContainer: {
    height: '200%',
    width: '100%', 
  },
  textContainer: {
    padding: 20,
  },
  text: {
    color: '#023e8a',
    marginTop: 10,
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  containersec: {
    flexDirection: 'column',
    width: '100%',
    borderColor: 'gray',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBox: {
    height: 50,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#3E9D7C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  secBox: {
    height: 50,
    width: '80%',
    marginTop: 10,
    backgroundColor: '#3E9D7C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
 
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '95%',
  },
  inputContainer: {
    marginTop: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '95%',
  },
  phoneInput: {
    flex: 1,
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  issueinput: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    height: 100,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    height: 45,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    marginLeft:15,
    borderRadius: 10,
  },
});

export default ContactScreen;

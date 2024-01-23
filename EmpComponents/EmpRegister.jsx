

//   **************** Employee Signup Form ************************

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

// const EmployeeRegister = (props) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const [Branch, setBranch] = useState('');
//     const [Tl, setTl] = useState('');

//     const handleRegister = async () => {
//         try {
//             const payload = {
//                 name,
//                 email,
//                 password,
//                 phone,
//                 Branch,
//                 Tl,
//             };

//             const response = await fetch('https://api.addrupee.com/api/emp_register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (response.ok) {
//                 console.log('Registration successful!');
//                 props.navigation.navigate('EmpLogin');

//             } else {
//                 console.error('Registration failed:', response.status, response.statusText);
//             }
//         } catch (error) {
//             console.error('An unexpected error occurred:', error.message);
//         }
//     };

//     return (
//         <ScrollView style={styles.RegisterBox}>
//             <Image
//                 source={require('../Images/logo/user.jpeg')}
//                 style={styles.logoImg}
//             />
//             <Text style={styles.heading}>Sign Up Now</Text>
//             <Text style={styles.paragraph}>Please fill the fields and create an account</Text>

//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={setName}
//                     value={name}
//                     placeholder="Enter FullName"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={setPhone}
//                     value={phone}
//                     keyboardType='numeric'
//                     placeholder="Enter Phone No"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={setEmail}
//                     value={email}
//                     placeholder="Enter Email"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={setPassword}
//                     value={password}
//                     secureTextEntry={true}
//                     placeholder="Enter Password"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={setTl}
//                     value={Tl}
//                     placeholder="Select Tl Name"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={setBranch}
//                     value={Branch}
//                     placeholder="Select Branch Name"
//                 />
//             </View>

//             <TouchableOpacity style={styles.button} onPress={handleRegister}>
//                 <Text style={{ fontSize: 20, color: "#fff" }}>Register</Text>
//             </TouchableOpacity>

//             <Text style={{ marginTop: 10, textAlign: 'center' }}>
//                 Already have an account ? <TouchableOpacity onPress={() => props.navigation.navigate('EmpLogin')}>
//                     <Text style={{ color: "#3E9D7C" }}>Sign In</Text>
//                 </TouchableOpacity>
//             </Text>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     RegisterBox: {
//         marginTop: 20,
//         marginLeft: 20
//     },
//     logoImg: {
//         height: 80,
//         width: 80,
//         borderRadius: 50,
//         marginLeft: 140,
//     },
//     heading: {
//         marginTop: 15,
//         fontSize: 20,
//         color: "#111",
//         textAlign: 'center',
//         fontWeight: "bold"
//     },
//     paragraph: {
//         fontSize: 12,
//         textAlign: 'center',
//         margin: 5
//     },
//     input: {
//         height: 50,
//         borderColor: 'gray',
//         borderWidth: 0.5,
//         marginBottom: 8,
//         marginTop: 8,
//         paddingHorizontal: 10,
//         borderRadius: 10,
//         width: '95%'
//     },
//     inputContainer: {
//         marginTop: 20
//     },
//     button: {
//         height: 60,
//         width: 340,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         marginLeft: 20,
//         backgroundColor: '#3E9D7C',
//         color: "#fff",
//         borderRadius: 10
//     },
// });

// export default EmployeeRegister;




//   **************** Employee Signup Form ************************



import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';


import { RadioButton } from 'react-native-paper';

const EmployeeRegister = (props) => {
  const [tlName, setTlName] = useState(' ');

  const [Branch, setBranch] = useState('Select Branch Name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  // const [Branch, setBranch] = useState('');
  const [Tl, setTl] = useState('');
  const [userType, setUserType] = useState(''); // to track selected user type

  const [selectedValue, setSelectedValue] = useState('no');
  const [role, setRole] = useState('');

  const [secretKey, setSecretKey] = useState('')



  const handleRadioChange = (value) => {
    setSelectedValue(value);
    // Reset input fields when changing selection
    setTlName('');
    setBranch('');
  };

  const handleRoleChange = (value) => {
    setRole(value);
    // Reset input fields when changing role
    setTlName('');
    setBranch('');
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      const payload = {
        name,
        email,
        password,
        phone,
        Branch,
        Tl,
        userType, // include userType in the payload
      };

      const response = await fetch(
        'https://api.addrupee.com/api/emp_register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log('Registration successful!');
        props.navigation.navigate('EmpLogin');
      } else {
        console.error(
          'Registration failed:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  };

  return (
    <View style={{ backgroundColor: '#f8edeb', height: '100%' }}>
      <ScrollView style={styles.RegisterBox}>


        <Image source={require('../images/welcomeimg.png')} style={styles.logoImg} />
        <Text style={styles.heading}>Sign Up Now</Text>
        <Text style={styles.paragraph}>
          Please fill the fields and create an account
        </Text>

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
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
          />

          <View>
            <Text>Are you someone from Addrupee?</Text>
            <RadioButton.Group onValueChange={handleRadioChange} value={selectedValue}>
              <View   >
                <RadioButton.Item label="Yes" value="yes" />
                <RadioButton.Item label="No" value="no" />
              </View>
            </RadioButton.Group>

            {selectedValue === 'yes' && (
              <View>

                <SafeAreaView>
                  <View style={styles.container}>
                    <Picker
                      style={styles.picker}
                      selectedValue={role}
                      onValueChange={handleRoleChange}>
                      <Picker.Item label="Select Your Role" />
                      <Picker.Item label="AQM" value="AQM" />
                      <Picker.Item label="TL" value="TL" />
                      <Picker.Item label="HR" value="HR" />
                    </Picker>
                  </View>
                  {role === 'TL' && (
                    <View>
                      <TextInput
                        style={styles.input}
                        onChangeText={setSecretKey}
                        value={secretKey}
                        placeholder="Secret Key"
                      />
                      <SafeAreaView>
                        <View style={styles.container}>
                          <Picker
                            style={styles.picker}
                            selectedValue={tlName}
                            onValueChange={itemValue => setTlName(itemValue)}>
                            <Picker.Item label="Select Your Name" />
                            <Picker.Item label="CHAHAT SHARMA" value="CHAHAT SHARMA" />
                            <Picker.Item label="RAJENDRA SINGH" value="RAJENDRA SINGH" />
                            <Picker.Item label="FAIZAN KHAN" value="FAIZAN KHAN" />
                            <Picker.Item label="BHAGWAN SINGH" value="BHAGWAN SINGH" />
                            <Picker.Item label="SACHING KUMAR" value="SACHIN KUMAR" />
                            <Picker.Item label="DEEPAK KUMAR" value="DEEPAK KUMAR" />
                          </Picker>
                        </View>

                        <View style={styles.container}>
                          <Picker
                            style={styles.picker}
                            selectedValue={Branch}
                            onValueChange={itemValue => setBranch(itemValue)}>
                            <Picker.Item label="Select Branch Name" />
                            <Picker.Item label="Addrupee Noida" value="Noida" />
                          </Picker>
                        </View>
                      </SafeAreaView>

                      <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder="Create Password"
                      />

                      <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder="Confirm Password"
                      />

                      <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
                      </TouchableOpacity>
                    </View>
                  )}

                  {role === 'HR' && (
                    <View>
                      <TextInput
                        style={styles.input}
                        onChangeText={setSecretKey}
                        value={secretKey}
                        placeholder="Secret Key"
                      />
                      <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder="Create Password"
                      />

                      <TextInput
                        style={styles.input}
                        onChangeText={setBranch}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder="Confirm Password"
                      />

                      <View style={styles.container}>

                        <Picker
                          style={styles.picker}
                          selectedValue={Branch}
                          onValueChange={itemValue => setBranch(itemValue)}>
                          <Picker.Item label="Select Branch Name" />
                          <Picker.Item label="Addrupee Noida" value="Noida" />

                        </Picker>
                      </View>
                      <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  )}

                  {role === 'AQM' && (
                    <View>

                      <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder="Create Password"
                      />

                      <TextInput
                        style={styles.input}
                        onChangeText={setBranch}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder="Confirm Password"
                      />
                      <SafeAreaView>
                        <View style={styles.container}>
                          <Picker
                            style={styles.picker}
                            selectedValue={tlName}
                            onValueChange={itemValue => setTlName(itemValue)}>
                            <Picker.Item label="Select Tl Name" />
                            <Picker.Item label="CHAHAT SHARMA" value="CHAHAT SHARMA" />
                            <Picker.Item label="RAJENDRA SINGH" value="RAJENDRA SINGH" />
                            <Picker.Item label="FAIZAN KHAN" value="FAIZAN KHAN" />
                            <Picker.Item label="BHAGWAN SINGH" value="BHAGWAN SINGH" />
                            <Picker.Item label="SACHING KUMAR" value="SACHIN KUMAR" />
                            <Picker.Item label="DEEPAK KUMAR" value="DEEPAK KUMAR" />

                          </Picker>
                        </View>

                        <View style={styles.container}>

                          <Picker
                            style={styles.picker}
                            selectedValue={Branch}
                            onValueChange={itemValue => setBranch(itemValue)}>
                            <Picker.Item label="Select Branch Name" />
                            <Picker.Item label="Addrupee Noida" value="Noida" />

                          </Picker>
                        </View>
                      </SafeAreaView>


                      <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
                      </TouchableOpacity>

                    </View>
                  )}
                </SafeAreaView>

                {/* <SafeAreaView>
                  <View style={styles.container}>
                    <Picker
                      style={styles.picker}
                      selectedValue={tlName}
                      onValueChange={itemValue => setTlName(itemValue)}>
                      <Picker.Item label="Select Tl Name" />
                      <Picker.Item label="CHAHAT SHARMA" value="CHAHAT SHARMA" />
                      <Picker.Item label="RAJENDRA SINGH" value="RAJENDRA SINGH" />
                      <Picker.Item label="FAIZAN KHAN" value="FAIZAN KHAN" />
                      <Picker.Item label="BHAGWAN SINGH" value="BHAGWAN SINGH" />
                      <Picker.Item label="SACHING KUMAR" value="SACHIN KUMAR" />
                      <Picker.Item label="DEEPAK KUMAR" value="DEEPAK KUMAR" />

                    </Picker>
                  </View>

                  <View style={styles.container}>

                    <Picker
                      style={styles.picker}
                      selectedValue={Branch}
                      onValueChange={itemValue => setBranch(itemValue)}>
                      <Picker.Item label="Select Branch Name" />
                      <Picker.Item label="Addrupee Noida" value="Noida" />

                    </Picker>
                  </View>
                </SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={!showPassword}
                  placeholder="Create Password"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setBranch}
                  value={Branch}
                  secureTextEntry={!showPassword}
                  placeholder="Confirm Password"
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
                </TouchableOpacity>
                 */}
              </View>
            )}


            {selectedValue === 'no' && (
              <View>

                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={!showPassword}
                  placeholder="Create Password"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setBranch}
                  value={Branch}
                  secureTextEntry={!showPassword}
                  placeholder="Confirm Password"
                />

                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Text style={{ marginLeft: 10, marginBottom: 20, fontWeight: 'bold' }}>
                    {showPassword ? 'Hide' : 'Show'} Password
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
        </TouchableOpacity> */}

        <Text style={{ marginTop: 10, textAlign: 'center' }}>
          Already have an account ?{' '}
          <TouchableOpacity onPress={() => props.navigation.navigate('EmpLogin')}>
            <Text style={{ color: '#3E9D7C' }}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterBox: {
    marginTop: 20,
    marginLeft: 20,
  },
  logoImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 140,
  },
  heading: {
    marginTop: 15,
    fontSize: 20,
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'center',
    margin: 5,
  },
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 12,
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
  countryCode: {
    marginRight: 10,
    fontSize: 16,
    color: 'gray',
  },
  phoneInput: {
    flex: 1,
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  button: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  picker: { flex: 1 },
});

export default EmployeeRegister;



import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const EmployeeLogin = (props) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    // Navigation hook
    const navigation = useNavigation();

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to handle input changes
    const handleInputChange = (name, value) => {
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const { email, password } = loginData; // Destructure email and password from loginData

            const response = await fetch('https://api.addrupee.com/api/emp_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const responseData = await response.json();

            if (response.ok && responseData.Status === 'Success') {
                const userType = responseData.userType;

                // Navigate to different pages based on userType
                if (userType === 'Employee') {
                    await AsyncStorage.setItem('employeeEmail', email);
                    navigation.navigate('EmpDashboard');
                } else if (userType === 'Team Leader') {
                    await AsyncStorage.setItem('TL_Name', responseData.name);
                    navigation.navigate('Tldashboard');
                } else if (userType === 'Admin') {
                    navigation.navigate('Admindashboard');
                } else {
                    // Handle other user types or scenarios
                    Alert.alert('Unknown user type or scenario');
                }
            } else {
                // Handle unsuccessful Sign In
                Alert.alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during Sign In:', error);
            // Handle error and provide user feedback
            Alert.alert('An error occurred during Sign In');
        }
    };


    return (
        <View style={{ backgroundColor: '#f8edeb', height: '100%' }}>
            <ScrollView style={styles.RegisterBox}>

                <Image source={require('../images/welcomeimg.png')} style={styles.logoImg} />
                <Text style={styles.heading}>LogIn Now</Text>
                <Text style={styles.paragraph}>
                    Please Enter Your Email & Password For Login
                </Text>

                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        value={loginData.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        placeholder="Enter Email"
                    />



                    <TextInput
                        style={styles.input}
                        value={loginData.password}
                        onChangeText={(text) => handleInputChange('password', text)}
                        secureTextEntry={!showPassword}
                        placeholder="Enter Password"
                    />


                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Text style={{ marginLeft: 10 }}>
                            {showPassword ? 'Hide' : 'Show'} Password
                        </Text>
                    </TouchableOpacity>




                </View>

                <TouchableOpacity style={styles.button}
                    // onPress={() => props.navigation.navigate('EmpDashboard')}  
                    onPress={handleSubmit}
                >
                    <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 15, textAlign: 'center', color: "#111", fontSize: 16 }}>
                    Or Login With
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                    <TouchableOpacity style={{ marginRight: 25 }}>
                        <Image
                            source={require('../images/googlePng.png')}
                            style={styles.SocialImg}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../images/fb.png')}
                            style={styles.SocialImg}
                        />
                    </TouchableOpacity>
                </View>
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
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 0,
        width: '95%',
        marginTop: 20
    },
    inputContainer: {
        marginTop: 50,
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
    SocialImg: {
        height: 100,
        width: 100,
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 40
    },

});

export default EmployeeLogin;


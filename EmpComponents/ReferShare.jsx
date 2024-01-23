import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import React from 'react';
import Share from 'react-native-share'; 

export default function ReferShare() {
    const share = async () => {
        const options = {
            message:
                'Addrupee is Distributor of secured and un secured loans. We have wide range of loans products like Personal Loans, Business Loan, Home Loan, Loans against Property, OD against Property, and Loan for Purchase of Commercial Property, Lease Rental Discounting, and Business Loans etc. ',
            url: 'https://addrupee.com/',
            email: 'support@addrupee.com',
            subject: 'AddRupee (Your Trusted Loan Partner',
            recipient: '+91 9569125048',
        };

        try {
            const res = await Share.open(options);
            console.log(res);
        } catch (err) {
            console.log(err);
        }

        // Share.open(options)
        //   .then(res => console.log(res))
        //   .catch(err => console.log(err));
    };

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    marginTop:40,
                    color: '#3E9D7C',
                    textAlign: 'center',
                    fontWeight:'bold',
                    marginBottom:10
                }}>
                Share With Friends 
            </Text>
            <Text 
             style={{
                color: '#111',
                textAlign: 'center', 
                fontWeight:'600'
            }}>
                "Because Your Friends Deserves to 
            </Text>
            <Text 
             style={{
                marginBottom:10,
                color: '#111',
                textAlign: 'center', 
                fontWeight:'600'
            }}>
              Live Life Better"
            </Text>
            <Image style={{width:400}} source={require("../images/shareImg.png")} />
            <View style={{ marginHorizontal: 40 }}>
                <TouchableOpacity style={styles.button} title="Share" onPress={share}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Share Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    button: {
      height: 60,
      width: 340,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100, 
      backgroundColor: '#3E9D7C',
      color: '#fff',
      borderRadius: 10,
    }, 
  });
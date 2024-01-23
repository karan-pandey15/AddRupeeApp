import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tldashboard = (props) => {
    const [pendingData, setPendingData] = useState([]);
    const [approvedData, setApprovedData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("from1to31");       
  
    async function getTlname() {
        try {
          const storedData = await AsyncStorage.getItem("TL_Name");
          
          if (storedData) {
            // Assuming the email is directly stored as a string
            Tl_Name = storedData.trim(); // Trim any leading or trailing whitespaces
            return Tl_Name;
          } else {
            console.log("No Tlname stored");
            return null;
          }
        } catch (error) {
          console.error("Error retrieving Tlname:", error);
          return null;
        }
      }
      getTlname();
   

    const fetchPendingData = async () => {
        const Status = "Pending";
    
        let data = await fetch(
          `https://api.addrupee.com/api/getpendingtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
    
        let result = await data.json();
        setPendingData(result);  
        
      };
    
      const fetchApprovedData = async () => {
        const Status = "Disbursed";
        let data = await fetch(
          `https://api.addrupee.com/api/approved-data/${Tl_Name}?Status=${Status}&filter=${selectedFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
    
        let result = await data.json();
        setApprovedData(result); 
      };

      useEffect(() => { 
        fetchPendingData();
        fetchApprovedData(); 
      }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upperContainer} >
                    <View style={styles.parentContainer}>
                        <View style={styles.container1}>
                            <Text style={styles.textStyle}>PENDING</Text>
                            <Text style={styles.valueStyle}>{pendingData.length}</Text>

                        </View>
                        <View style={styles.container2}>
                            <Text style={styles.textStyle} >DISBURSED</Text>
                            <Text style={styles.valueStyle}>{approvedData.length}</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.containerBox}>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}>
                            <View >
                                <Image
                                    source={require('../images/bankImg.png')}
                                    style={styles.cardImg} />
                                <Text
                                    style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                    Personal Loan
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/Homeloan.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Home Loan
                            </Text>
                        </TouchableOpacity>
                        <View />

                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/businessLoan.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Business Loan
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/loanAp.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Loan Against Property
                            </Text>
                        </TouchableOpacity>
                        <View />
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/loanappImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                OD/OC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/loanappImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Credit Card
                            </Text>
                        </TouchableOpacity>
                        <View />

                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/bankImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Health Insurance
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/bankImg.png')}
                                style={styles.cardImg}
                            />
                              <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                General Insurance
                            </Text>
                        </TouchableOpacity>
                        <View />
                    </View>
                    <View style={styles.gap}></View>
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
        backgroundColor: '#46A081',
    },
    upperContainer: {
        height: 220,
        width: '100%',
        alignItems: 'center',
        marginTop: 40
    },
    parentContainer: {
        height: 120,
        width: 350,
        flexDirection: 'row',
    },
    container1: {
        flex: 1,
        backgroundColor: "#17A2B8",
        borderRadius: 5,
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: "#fff"
    },
    container2: {
        flex: 1,
        backgroundColor: "#17A2B8",
        borderRadius: 5,
        padding: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#FFF"
    },
    textStyle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    valueStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20
    },
    scrollContainer: {
        // height: '100%',
        width: '100%',
        backgroundColor: '#f8edeb',
        elevation: 50,
        borderTopLeftRadius: 90,  // Adjust the value as needed
        borderTopRightRadius: 90,
        padding: 10
    },
    containerBox: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 24,
    },
    cardBox: {
        width: '48%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#f8edeb',
        shadowOpacity: 0.1,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 50,
    },
    cardImg: {
        width: 100,
        height: 80,
        marginTop: 5
    },
    gap: {
        marginBottom: 100
    }
});

export default Tldashboard;

import React, { useEffect ,useState} from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native"; 
import { useNavigation } from "@react-navigation/native"
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
// import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
// import karanimg from "../images/usering.png"


const DrawerList = [
    { label: 'AddLeads', navigateTo: 'EmpForm' },
    { label: 'Profile', navigateTo: 'EmpDashboard' },
    { label: 'Help & Support', navigateTo: 'Help' },
    { label: 'Loan Terms', navigateTo: 'TermsAndConditions' }, 
    { label: 'Refer Friend', navigateTo: 'ReferShare' }, 
]

const DrawerLayout = ({ label, navigateTo }) => {
    const navigation = useNavigation();
    return (
        <DrawerItem
            label={label}
            onPress={() => navigation.navigate(navigateTo)}
        >

        </DrawerItem>
    )
}

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
        return <DrawerLayout
            key={i}
            label={el.label}
            navigateTo={el.navigateTo}
        />
    })
}

function DrawerContent(props) {
    const navigation = useNavigation();

    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios
            .get("https://api.addrupee.com/api/get_user_data")
            .then((res) => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name);
                    setEmail(res.data.email);
                } else {
                    setAuth(false);
                    setMessage(res.data.Error);
                    // Redirect to login page if not authenticated
                   
                    navigation.navigate("/EmpLogin")
                }
            })
            .catch((err) => {
                console.log(err);
                // Redirect to login page if there's an error
                navigation.navigate("/EmpLogin")
            });
    }, []);

    const handleLogout = () => {
        axios
            .get("https://api.addrupee.com/api/emp_logout")
            .then((res) => {
                // location.reload(true);
                if (res.data.Status === "Success") {
                    // Clear local storage
                    AsyncStorage.clear();
                    navigation.navigate("/EmpLogin")
                }
            })
            .catch((err) => console.log(err));
    };
 
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView  {...props} >
                <View  >
                    <TouchableOpacity activeOpacity={0.8} >
                        <View style={{ flexDirection: 'row',backgroundColor:'#17A2B8',height:140  }}>

                            <Image
                                source={require('../images/userimage.png')}
                                style={{ height: 100, width: 100, marginTop: 5,borderRadius:50 }}
                            />

                            <View style={{ marginLeft: 10, flexDirection: 'column',marginTop:15  }} >
                                {/* <Title style={{fontWeight:'bold'}} >{}</Title>
                                 <Text style={{fontWeight:600}}  numberOfLines={1} >
                                        pandeykaran1515@gmail.com
                                 </Text> */}
                                {auth ? (
                                    <View style={{ marginLeft: 10, flexDirection: "column" }}>
                                        <Text style={{ color: "#fff",fontSize:20,fontWeight:'bold',marginTop:8 }}>Welcome</Text>
                                        <Text style={{ color: "#fff",fontSize:15,fontWeight:'bold' }}>{name}</Text>
                                        <Text style={{ color: "#fff",fontSize:11,fontWeight:'400' }}>{email}</Text>
                                    </View>
                                ) : null}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <DrawerItems />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{   backgroundColor:'#17A2B8', color:'#fff'   }} >
                <TouchableOpacity
                style={{height:50}}
                onPress={() => props.navigation.navigate('EmpLogin')}
                >
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold',marginLeft:20,marginTop:10}}>Sign Out</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default DrawerContent;
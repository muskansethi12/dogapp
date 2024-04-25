import React from "react";
import { useState } from "react";
import { View,TextInput,TouchableOpacity,Text, StyleSheet, Alert } from "react-native";

const Contact=()=>{

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [dob, setDob] = useState('');
    const [dobError, setDobError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');



    const validateEmail = () => {
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
      };

      const validateDob = () => {
     
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dob.match(dobRegex)) {
            setDobError("Please enter a valid date of birth (YYYY-MM-DD)");
        } else {
            setDobError('');
        }
    };

      const validatePassword=()=>{
        if(password.length<8){
            setPasswordError("Password should be atleast 8 characters long ")

        }
        else{
            setPasswordError('')
        }
      }

      const handleSubmit=()=>{
        validateEmail();
        validateDob();
        validatePassword();


        if (!emailError && !dobError && !passwordError) {
            setEmail('');
            setDob('');
            setPassword('');
            Alert.alert("Form submitted successfully");
            console.log(email,dob,password,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        }
        else{
            Alert.alert("Please enter valid details")
        }
    };


    return(

        <View>
            <Text style={{fontSize:30,textAlign:'center',margin:20,marginBottom:40,color:'black'}} >Contact Us </Text>
        <View style={styles.inputContainer}>
            <Text style={styles.txt}>Email:</Text>
            <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={(text)=>setEmail(text)}></TextInput>
            {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}
        </View >
        <View style={styles.inputContainer}>
            <Text style={styles.txt}>Date of birth:</Text>
            <TextInput style={styles.input} placeholder="Enter your Dob" value={dob} onChangeText={(text)=>setDob(text)}></TextInput>
            {dobError !== '' && <Text style={styles.error}>{dobError}</Text>}
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.txt}>Password:</Text>
            <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={(text)=>setPassword(text)}  secureTextEntry={true}></TextInput>
            {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}
        </View>
        <TouchableOpacity onPress={handleSubmit} style={{margin:18,borderWidth:1,borderRadius:20,padding:10,width:290,marginLeft:40}}>
            <Text style={{fontSize:20,textAlign:'center',color:'black'}}>Submit</Text>
        </TouchableOpacity>
        </View>
    );
      };
 
 export default Contact;


const styles= StyleSheet.create({
    inputContainer:{
        margin:10,
        padding:6,
        alignItems:'center'
       
    },

    input:{
        padding:6,
        fontSize:16,
        borderWidth:0.5,
        borderRadius:20,
        width:250,
        textAlign:'center',
        margin:10

    },
    txt:{
        fontSize:20
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5
    }
})

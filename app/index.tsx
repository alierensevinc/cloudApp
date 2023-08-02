import React, {useState} from 'react';
import {Alert, Button, SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import {supabase} from '@/app/config/initSupabase';
import loginStyle from "./styles/loginStyle";

const Index = () => {
    const [email, setEmail] = useState('sevinc.aeren@gmail.com');
    const [password, setPassword] = useState('123456');
    const [loading, setLoading] = useState(false);

    const onSignInPress = async () => {
        setLoading(true);
        const {error} = await supabase.auth.signInWithPassword({email, password});
        if (error) Alert.alert('Error signing in', error.message);
        else Alert.alert('Sign up successful');
        setLoading(false);
    }

    const onSignUpPress = async () => {
        setLoading(true);
        const {error} = await supabase.auth.signUp({email, password});
        if (error) Alert.alert('Error signing up', error.message);
        else Alert.alert('Sign up successful');
        setLoading(false);
    }

    return (
        <SafeAreaView style={loginStyle.container}>
            <Spinner visible={loading}/>

            <Text style={loginStyle.header}>My Cloud</Text>

            <TextInput
                autoCapitalize="none"
                placeholder="john@doe.com"
                value={email}
                onChangeText={setEmail}
                style={loginStyle.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={loginStyle.inputField}
            />

            <TouchableOpacity onPress={onSignInPress} style={loginStyle.button}>
                <Text style={{color: '#fff'}}>Sign in</Text>
            </TouchableOpacity>
            <Button onPress={onSignUpPress} title="Create Account" color={'#fff'}/>
        </SafeAreaView>
    )
}

export default Index;
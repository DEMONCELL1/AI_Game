import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Login = ({ navigation, login, isAuthenticated, error }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin1234');

  const handleLogin = () => {
    login(username, password);
  };

  useEffect(() => {
    if(isAuthenticated) {
      navigation.navigate("Game");
    }
  }, [isAuthenticated])
  
  useState
  return (
    <View style={styles.container}>
      <Text style={styles.logo}><Icon name="gamepad" size={50} color="#fb5b5a" /> Coin Pick</Text>
      <View style={styles.inputView}>
        <Icon name="user" size={20} color="#FFFFFF" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" size={20} color="#FFFFFF" style={styles.icon} />
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    paddingLeft: 20,
  },
  inputText: {
    flex: 1,
    height: 50,
    color: 'white',
  },
  icon: {
    marginRight: 10,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    textAlign:'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { login })(Login);

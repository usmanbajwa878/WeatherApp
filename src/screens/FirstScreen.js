import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native';
import COLORS from '../constants/Colors';

const FirstScreen = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '300',
            marginTop: 5,
          }}>
          Get Insights on Weather
        </Text>
      </View>
      <View style={{marginTop: 50}}>
        <Image
        resizeMode="contain"
          style={{width: 300, height: 300}}
          source={require('../../assets/Icons/shower.png')}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          height: 200,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderRadius: 20,
        }}>
        <TouchableOpacity onPress={()=>props.navigation.push('HomeScreen')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Get Insights</Text>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../assets/Icons/arrow.png')}
          />
        </TouchableOpacity>
        <View
          style={{alignSelf: 'center', flexDirection: 'row', marginTop: 90}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '300'}}>
            Get Updated Weather at Your Hands? No Try This...{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.BACKGROUND_HOME,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: COLORS.CTA,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.CTA,
    marginHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
    flexDirection: 'row',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
    width: '60%',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default FirstScreen;

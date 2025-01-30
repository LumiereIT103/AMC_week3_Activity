import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [name, onChangeTextName] = React.useState('Name ');
  const [age, onChangeNumberAge] = React.useState('Age ');
  const [address, onChangeTextAddress] = React.useState('Address ');
  const [school, onChangeTextSchool] = React.useState('School ');
  const [course, onChangeTextCourse] = React.useState('Course ');
    const [email, onChangeTextEmail] = React.useState('Email ');
    const [contact, onChangeNumberContact] = React.useState('Contact ');
    const [multiline, onChangeTextMultiLine] = React.useState('  About Me :');
   
 


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
          placeholder=""
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumberAge}
          value={age}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextSchool}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextCourse}
          value={course}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeTextEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumberContact}
          value={contact}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={100}
          onChangeText={text => onChangeTextMultiLine(text)}
          value={multiline}
          style={styles.container}
          placeholder="Please input Information about you"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   container: {
    borderBottomColor: '#000',
    borderWidth: 1,

    margin: 10 ,
  },
  textInput: {
    padding: 6,
  },

});


export default TextInputExample;
import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
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
        <View style={styles.container}>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://www.thewowstyle.com/wp-content/uploads/2015/04/Jesus_christ-6.jpg' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeTextName} value={name} placeholder="Name" />
          </View>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.B_CVNGr4SKZSH3IYbATzsQHaGo?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeNumberAge} value={age} placeholder="Age" keyboardType="numeric" />
          </View>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.L2fq0qAUs7g33BppOyOwYAHaLH?w=480&h=720&rs=1&pid=ImgDetMain' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeTextAddress} value={address} placeholder="Address" />
          </View>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://i.pinimg.com/originals/92/98/f0/9298f08f3cf353378eada4870e178f38.jpg' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeTextSchool} value={school} placeholder="School" />
          </View>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://thumbs.dreamstime.com/b/oil-painting-jesus-recovered-lost-sheep-carrying-arms-oil-painting-jesus-recovered-lost-sheep-carrying-310431466.jpg' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeTextCourse} value={course} placeholder="Course" />
          </View>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://i.pinimg.com/736x/61/5d/1b/615d1b09f5a63da675abd506776e8d03.jpg' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeTextEmail} value={email} placeholder="Email" />
          </View>
          <View style={styles.row}>         
          <Image source={{ uri: 'https://i.pinimg.com/originals/6d/91/e6/6d91e610672b00e0cc2fd1706c6c9430.jpg' }} style={styles.image} />
          <TextInput style={styles.input} onChangeText={onChangeNumberContact} value={contact} placeholder="Contact" keyboardType="numeric" />
          </View>        
          <View style={styles.row}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.wS48VVSodTJ9QD5crXiu-AHaEK?rs=1&pid=ImgDetMain' }} style={styles.image} />
            <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={100}
          onChangeText={text => onChangeTextMultiLine(text)}
          value={multiline}
          style={styles.containerBox}
          placeholder="Please input Information about you"
        />          
           </View>  
          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    
    
  },
  containerBox: {
    borderBottomColor: '#000',
    borderWidth: 1,
    marginLeft:10,
    paddingRight:159,
  },
  image: {
    width: 40,
    height: 40,
    marginTop:12,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingRight: 60,
    width: '80%',
  },
  row:{
    flexDirection: 'row',
    alignItems:'flex-start',
  }
});

export default TextInputExample;

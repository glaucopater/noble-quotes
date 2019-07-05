import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      author: 'a',
      quote: 'b',
      image: 'https://api.adorable.io/avatars/194/abott@adorable.png',
    };
    this.onPress = this.onPress.bind(this);
  }

  randInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  onPress() {
    this.updateQuote();
  }

  updateQuote() {
    const quotes = require('./quotes.json');
    console.log(quotes);
    const { quote, author, image } = quotes[this.randInt(0, quotes.length)];
    this.setState({ quote, author, image });
  }

  componentDidMount() {
    this.updateQuote();
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onPress}
        underlayColor={'none'}>
        <ImageBackground style={styles.background}>
          <View>
            <Image style={styles.avatar} source={{ uri: this.state.image }} />
            <Text style={styles.paragraph}>"{this.state.quote}"</Text>
            <Text style={styles.paragraph}>{this.state.author} </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  background: {
    height: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    height: 200,
    width: 200,    
    alignSelf: 'center',
  },
});

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

const baseImagePath = './assets/avatars/';

import { AVATARS } from "./avatars";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      author: 'a',
      quote: 'b',
      image: 'gigio.jpg',
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
    const authors = require('./authors.json');
    const { quote, author } = quotes[this.randInt(0, quotes.length)];
    const { image } = authors.filter(a => a.name === author)[0];
    const newQuote = { quote, author, image };
    this.setState(newQuote);
  }

  componentDidMount() {
    this.updateQuote();
  }

  render() {
    const avatar = this.state.image
      ? `${baseImagePath}${this.state.image}`
      : '';
    console.log(this.state, avatar, typeof avatar);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onPress}
        underlayColor={'none'}>
        <ImageBackground style={styles.background}>
          <View>
            <Image
              style={styles.avatar}
              source={{
                uri: AVATARS[this.state.author.toLowerCase()],
              }}
            />
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
    fontStyle: 'italic'
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

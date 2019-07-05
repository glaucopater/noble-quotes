import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { Base64 } from "./utils";
import { AVATARS } from "./avatars";
import { styles } from "./styles";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      quote: ""
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
    const quotes = require("./quotes.json");
    const { quote, author } = quotes[this.randInt(0, quotes.length)];
    const newQuote = { quote, author };
    this.setState(newQuote);
  }

  componentDidMount() {
    this.updateQuote();
  }

  render() {
    const avatar = this.state.image
      ? `${baseImagePath}${this.state.image}`
      : "";

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onPress}
        underlayColor={"none"}
      >
        <ImageBackground style={styles.background}>
          <View>
            <Image
              style={styles.avatar}
              source={{
                uri: AVATARS[this.state.author.toLowerCase()]
              }}
            />
            <Text style={styles.paragraph}>
              "{Base64.atob(this.state.quote)}"
            </Text>
            <Text style={styles.paragraph}>{this.state.author} </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

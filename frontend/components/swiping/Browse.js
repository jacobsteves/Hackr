import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text,
  Picker,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import styles from '../../stylesheets/BrowseStyles';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathonId : "0",
      swipeeId: "0",
    };
  }

  onPressAccept() {
    console.log('Accepted ' + this.state.swipeeId);
  }

  onPressDeny() {
    console.log('Denied ' + this.state.swipeeId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker selectedValue={this.state.hackathonId}
          onValueChange={(itemValue, itemIndex) => this.setState({hackathonId: itemValue})}>
          <Picker.Item label="DeltaHacks IV" value="09" />
          <Picker.Item label="Hack the North" value="1000000" />
        </Picker>

        <View style={styles.line}/>
        <Text
          style={[styles.name, styles.centerText]}
          numberOfLines={2}
          minimumFontScale={0.01}>Shaughnessy Cudmore-Keating</Text>
          <View style={styles.line}/>
        <ScrollView>
            <Text
              style={styles.header}>
              Bio</Text>
          <Text
            style={styles.bio}>Haha my name is Jane :)</Text>

          <Text
              style={styles.header}>
              Skills</Text>
          <Text
            style={styles.bio}>I know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :DI know C#, PHP, and JavaScript very well!!!
            Hahaha you should just match with me... I probably accepted
            you already HAHAHA!!! :D</Text>

          <Text
              style={styles.header}>
              Up for all nighters?</Text>
          <Text
            style={styles.bio}>Yep</Text>

          <Text
              style={styles.header}>
              Seriousness</Text>
          <Text
            style={styles.bio}>6</Text>
        </ScrollView>

        <View style={[styles.inline]}>
            <TouchableHighlight
              onPress = {() => this.onPressDeny()}
              style={[styles.highlight]}>
              <Image
                resizeMode='contain'
                style={[]}
                source={require('../../images/cross.png')}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress = {() => this.onPressAccept()}
              style={[styles.highlight]}>
              <Image
                resizeMode='contain'
                style={[]}
                source={require('../../images/checkmark.png')}/>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

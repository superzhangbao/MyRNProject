/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
 *方式二：ES5
 */
//var HelloComponent=React.createClass({
//    render() {
//        return <Text style={{fontSize:60,backgroundColor:'red'}}>Hello</Text>;
//    }
//})
//module.exports = HelloComponent;

/*
 *方式一：ES6
 *推荐
 */
export default class HelloComponent extends Component {
    render() {
        return <Text style={{fontSize:20,backgroundColor:'blue'}}>Hello{this.props.name}</Text>;
    }
}

/*
 *方式三：函数式
 *无状态，不能使用this
 */
//function HelloComponent(props) {
//    return <Text style={{fontSize:40,backgroundColor:'yellow'}}>Hello.{props.name}</Text>;
//}
//module.exports=HelloComponent;
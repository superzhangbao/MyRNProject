import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import setup from './setup'
// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('MyProject', () => setup);
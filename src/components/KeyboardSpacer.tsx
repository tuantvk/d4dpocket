import React, { Component } from 'react';
import {
  Keyboard,
  LayoutAnimation,
  View,
  ViewProps,
  Dimensions,
  Platform,
  StyleSheet,
  EmitterSubscription,
  KeyboardEvent,
  LayoutAnimationConfig,
} from 'react-native';

// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
const defaultAnimation: LayoutAnimationConfig = {
  duration: 500,
  create: {
    duration: 300,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 200,
  },
};

type IProps = {
  topSpacing: number;
  onToggle(keyboardState: boolean, keyboardSpace: number): void;
} & ViewProps;

interface IState {
  keyboardSpace: number;
  isKeyboardOpened: boolean;
}

export default class KeyboardSpacer extends Component<IProps, IState> {
  static defaultProps = {
    topSpacing: 0,
  };

  state = {
    keyboardSpace: 0,
    isKeyboardOpened: false,
  };
  _listeners: EmitterSubscription[] = [];

  componentDidMount() {
    const updateListener =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const resetListener =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    this._listeners = [
      Keyboard.addListener(updateListener, this.updateKeyboardSpace),
      Keyboard.addListener(resetListener, this.resetKeyboardSpace),
    ];
  }

  componentWillUnmount() {
    this._listeners.forEach((listener) => listener.remove());
  }

  updateKeyboardSpace = (event: KeyboardEvent) => {
    if (!event.endCoordinates) {
      return;
    }

    let animationConfig = defaultAnimation;
    if (Platform.OS === 'ios') {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity
      );
    }
    LayoutAnimation.configureNext(animationConfig);

    // get updated on rotation
    const screenHeight = Dimensions.get('window').height;
    // when external physical keyboard is connected
    // event.endCoordinates.height still equals virtual keyboard height
    // however only the keyboard toolbar is showing if there should be one
    const keyboardSpace =
      screenHeight - event.endCoordinates.screenY + this.props.topSpacing;
    this.setState(
      {
        keyboardSpace,
        isKeyboardOpened: true,
      },
      () => this.props?.onToggle(true, keyboardSpace)
    );
  }

  resetKeyboardSpace = (event: KeyboardEvent) => {
    let animationConfig = defaultAnimation;
    if (Platform.OS === 'ios') {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity
      );
    }
    LayoutAnimation.configureNext(animationConfig);

    this.setState(
      {
        keyboardSpace: 0,
        isKeyboardOpened: false,
      },
      () => this.props?.onToggle(false, 0)
    );
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { height: this.state.keyboardSpace },
          this.props.style,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

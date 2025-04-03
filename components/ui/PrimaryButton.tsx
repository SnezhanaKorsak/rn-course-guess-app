import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  Text,
  View,
  ViewStyle,
  StyleProp
} from 'react-native';

import { Colors } from '../../theme/colors';

type Props = PressableProps & {
  style?: StyleProp<ViewStyle>;
}

export const PrimaryButton = ({ children, style, ...rest }: PropsWithChildren<Props>) => {
  return (
    <View style={styles.buttonOverContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed, style] : [styles.buttonInnerContainer, style]}
        android_ripple={{ color: Colors.primaryButton }}
        {...rest}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOverContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
});
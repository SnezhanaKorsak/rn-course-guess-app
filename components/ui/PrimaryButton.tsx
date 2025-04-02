import React, { PropsWithChildren } from 'react';
import { StyleSheet, Pressable, PressableProps, Text, View } from 'react-native';

import { Colors } from '../../theme/colors';

export const PrimaryButton = ({ children, ...rest }: PropsWithChildren<PressableProps>) => {
  return (
    <View style={styles.buttonOverContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
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
    flex: 1,
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
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
});
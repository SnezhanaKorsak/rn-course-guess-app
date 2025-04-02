import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import { Colors } from '../../theme/colors';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
}

export const InstructionText = ({ children, style }: Props) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent,
    fontSize: 24,
  },
});
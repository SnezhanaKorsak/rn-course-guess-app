import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../theme/colors';

type Props = {
  children: React.ReactNode;
}

export const NumberContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent,
    padding: 12,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'open-sans-bold',
    color: Colors.accent,
  }
});
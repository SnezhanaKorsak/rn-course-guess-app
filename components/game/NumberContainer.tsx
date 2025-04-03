import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../theme/colors';

type Props = {
  children: React.ReactNode;
}
const deviceWidth = Dimensions.get('window').width;

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
    padding: deviceWidth < 380 ? 12 : 24,
    marginHorizontal: 0,
    marginVertical: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: deviceWidth < 450 ? 28 :36,
    fontFamily: 'open-sans-bold',
    color: Colors.accent,
  }
});
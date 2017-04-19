import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerCard}>
      {props.children}
    </View>
  );
};

const styles = {
  containerCard: {
    borderBottomWidth: 0,
    padding: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
};

export {CardSection};

import React from 'react'
import { Icon } from '@rneui/themed';
import { View, StyleSheet, Text } from 'react-native';

interface IconProps{
    name: string;
    label: string;
}

const IconLabel: React.FC<IconProps> = ({ name, label}) => {
  return (
    <View style={styles.container}>
        <Icon
            name={name}
            type="ionicon"
            size={14}
            style={styles.iconStyle}
        />
          <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginRight: 10,
      alignItems: 'center',
    },
    labelStyle: {
      fontSize: 12,
      color: 'black'
    },
    iconStyle: {
      marginRight: 2,
    },
  });

export default IconLabel
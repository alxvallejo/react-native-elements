import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import colors from '../config/colors';

const List = props => {
  const { children, containerStyle, ...attributes } = props;
  return (
    <View
      style={[styles.listContainer, containerStyle && containerStyle]}
      {...attributes}
    >
      {children}
    </View>
  );
};

List.propTypes = {
  children: PropTypes.any,
  containerStyle: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: colors.white,
  },
});

export default List;

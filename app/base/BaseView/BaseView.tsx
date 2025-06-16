import React from 'react';
import { View, ViewStyle } from 'react-native';

type BaseViewProps = {
  backgroundColor?: ViewStyle['backgroundColor'];
  flexDirection?: ViewStyle['flexDirection'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flex?: ViewStyle['flex'];
  paddingHorizontal?: ViewStyle['paddingHorizontal']
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

const BaseView: React.FC<BaseViewProps> = ({
  backgroundColor,
  flexDirection,
  justifyContent,
  alignItems,
  flex,
  paddingHorizontal,
  children,
  style,
}) => {
  const dynamicStyle: ViewStyle = {
    backgroundColor,
    flexDirection,
    justifyContent,
    alignItems,
    flex,
    paddingHorizontal
  };

  return <View style={[dynamicStyle, style]}>{children}</View>;
};

export default BaseView;

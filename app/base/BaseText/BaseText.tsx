import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type BaseTextProps = TextProps & {
  color?: TextStyle["color"];
  fontSize?: TextStyle["fontSize"];
  fontWeight?: TextStyle["fontWeight"];
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const BaseText: React.FC<BaseTextProps> = ({
  color,
  fontSize,
  fontWeight,
  style,
  children,
  ...rest
}) => {
  return (
    <Text style={[{ color, fontSize, fontWeight }, style]} {...rest}>
      {children}
    </Text>
  );
};

export default BaseText;

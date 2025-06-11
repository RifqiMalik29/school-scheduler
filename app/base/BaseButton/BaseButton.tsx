import React from "react";
import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle
} from "react-native";
import { BaseButtonStyles } from ".";

type BaseButtonProps = {
  title: string;
  onPress?: () => void;
  type?: "primary" | "secondary";
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const BaseButton = ({
  title,
  onPress,
  type = "primary",
  containerStyle,
  textStyle,
}: BaseButtonProps) => {
  const isPrimary = type === "primary";
  const styles = BaseButtonStyles.default;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        containerStyle,
      ]}
    >
      <Text
        style={[
          styles.baseText,
          isPrimary ? styles.primaryText : styles.secondaryText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BaseButton;

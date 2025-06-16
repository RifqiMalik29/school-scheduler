import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const tabs = ['Due Date', 'Classes', 'Priority'];

const SegmentedControl = () => {
  const [active, setActive] = useState('Due Date');

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = active === tab;

        const showDivider =
          (active === 'Due Date' && index === 2) || // Tengah
          (active === 'Priority' && index === 1) || // Sebelum Priority
          (active === 'Classes' && (index === 1 || index === 2)); // Di antara Due date–Classes dan Classes–Priority

        return (
          <React.Fragment key={tab}>
            {showDivider && <View style={styles.divider} />}

            <Pressable
              onPress={() => setActive(tab)}
              style={[
                styles.tabButton,
                isActive && styles.activeTab,
              ]}
            >
              <Text style={[styles.neutralText, isActive ? styles.activeText : styles.inactiveText]}>
                {tab}
              </Text>
            </Pressable>
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1E1E2F',
    borderRadius: 999,
    alignItems: 'center',
  },
  tabButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 999,
  },
  activeTab: {
    backgroundColor: '#80B3FF', // blue-400
  },
  activeText: {
    color: 'black',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#D1D5DB', // gray-300
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: '#6B7280', // gray-500
    marginHorizontal: 8,
  },
  neutralText: {
    fontSize: 14,
  }
});

export default SegmentedControl;

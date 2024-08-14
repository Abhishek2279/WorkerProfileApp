import React, {memo} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors, Matrics} from '../../constants';
import {HeaderProps} from '../../interface/common';
import Carousel from '../molecules/Carousel';

const Header: React.FC<HeaderProps> = ({
  categories,
  search,
  setSearch,
  selected,
  setSelected,
}) => {
  return (
    <View style={styles.container}>
      <Carousel
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Search workers..."
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Matrics.mvs(16),
    paddingBottom: Matrics.mvs(16),
    backgroundColor: Colors.white,
  },
  searchBar: {
    height: Matrics.mvs(48),
    borderColor: Colors.grey,
    borderWidth: Matrics.mvs(1),
    borderRadius: Matrics.mvs(8),
    paddingHorizontal: Matrics.mvs(10),
    marginBottom: Matrics.mvs(10),
    fontSize: Matrics.mvs(16),
  },
});

export default memo(Header);

import React, {memo} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors, Matrics} from '../../constants';
import {CarouselProps} from '../../interface/common';
import {CarouselItem} from '../../types/common';

const Carousel: React.FC<CarouselProps> = ({
  categories,
  selected,
  setSelected,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}>
      {categories.map((item: CarouselItem) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setSelected(item.name)}
          style={[styles.item, selected === item.name && styles.selectedItem]}>
          <View style={styles.imgCon}>
            <Text style={styles.icon}>{item.icon}</Text>
          </View>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
    paddingVertical: Matrics.mvs(10),
    gap: Matrics.mvs(12),
  },
  item: {
    alignItems: 'center',
    padding: Matrics.mvs(12),
  },
  imgCon: {
    alignItems: 'center',
    borderWidth: Matrics.mvs(1),
    borderColor: Colors.pink,
    borderRadius: Matrics.mvs(100),
    width: Matrics.mvs(42),
    height: Matrics.mvs(42),
    justifyContent: 'center',
  },
  selectedItem: {
    borderWidth: Matrics.mvs(1),
    borderColor: Colors.blue,
    borderRadius: Matrics.mvs(12),
  },
  icon: {
    fontSize: Matrics.mvs(33),
  },
  name: {
    fontSize: Matrics.mvs(12),
    marginTop: Matrics.mvs(5),
  },
});

export default memo(Carousel);

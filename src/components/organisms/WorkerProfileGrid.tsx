import React, {memo} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Colors, Matrics} from '../../constants';
import {Images} from '../../Assets';
import {WorkerProfileGridProps} from '../../interface/common';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;

const WorkerProfileGrid: React.FC<WorkerProfileGridProps> = ({profiles}) => {
  const renderItem = ({item}) => (
    <View style={styles.profileCard}>
      <View>
        <Image source={Images[item.profileImage]} style={styles.profileImage} />
        <Image source={Images[item.country]} style={styles.country} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <FlatList
      data={profiles}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: Matrics.mvs(8),
  },
  profileCard: {
    width: ITEM_WIDTH,
    margin: Matrics.mvs(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: Matrics.mvs(ITEM_WIDTH - 30),
    height: Matrics.mvs(ITEM_WIDTH - 30),
    borderRadius: Matrics.mvs(100),
    marginBottom: 8,
  },
  name: {
    fontSize: Matrics.mvs(16),
    fontWeight: 'bold',
    color: Colors.black,
  },
  country: {
    width: Matrics.mvs(30),
    height: Matrics.mvs(30),
    borderRadius: Matrics.mvs(100),
    position: 'absolute',
    right: Matrics.mvs(8),
    top: Matrics.mvs(8),
  },
});

export default memo(WorkerProfileGrid);

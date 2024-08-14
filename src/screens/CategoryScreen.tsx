import React, {memo, useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import workerProfiles from '../data/workerProfiles';
import categories from '../data/categories';
import {Colors} from '../constants';
import {WorkerProfile} from '../interface/common';
import Header from '../components/atoms/Header';
import WorkerProfileGrid from '../components/organisms/WorkerProfileGrid';

const CategoryScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProfiles = useMemo(
    () =>
      workerProfiles.filter(profile => {
        const matchesSearchQuery = profile.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory
          ? profile?.category?.toLowerCase() === selectedCategory?.toLowerCase()
          : true;
        return matchesSearchQuery && matchesCategory;
      }),
    [searchQuery, selectedCategory],
  );

  const handleCategorySelection = (category: string) => {
    if (selectedCategory?.toLowerCase() === category?.toLowerCase()) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        categories={categories}
        search={searchQuery}
        setSearch={setSearchQuery}
        selected={selectedCategory}
        setSelected={handleCategorySelection}
      />
      <WorkerProfileGrid profiles={filteredProfiles as WorkerProfile[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default memo(CategoryScreen);

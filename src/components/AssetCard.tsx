import * as React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, Pressable } from 'react-native';

interface AssetCardInterface {
  iconName: string;
  rateColor: string;
  rateBackgroundColor: string;
  assetType: string;
  assetName: string;
  rate: number | string;
  iconColor: string;
}

const AssetCard: React.FC<AssetCardInterface> = ({
  iconName,
  rateColor,
  assetName,
  rateBackgroundColor,
  assetType,
  rate,
  iconColor,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#f3f6f7' : 'white',
        },
        styles.assetCard,
      ]}
    >
      <Icon
        name={iconName}
        color={iconColor}
        type={'font-awesome-5'}
        size={36}
        style={{
          color: '#86a2b8',
          backgroundColor: 'white',
          width: 52,
          height: 52,
          justifyContent: 'center',
          borderRadius: 14,
          marginLeft: '10%',
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 5,
          },
          shadowOpacity: 0.09,
          shadowRadius: 3.0,
          elevation: 11,
          marginVertical: '10%',
        }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          marginHorizontal: '0%',
          flex: 2,
        }}
      >
        <Text style={{ fontWeight: '700', fontSize: 18, color: '#0f1f3b' }}>{assetName}</Text>
        <Text style={{ color: '#86a2b8', marginVertical: '5%', top: '6%' }}>{assetType} Asset</Text>
      </View>
      <View
        style={{
          backgroundColor: `${rateBackgroundColor}`,
          justifyContent: 'center',
          marginRight: '8%',
          height: '38%',
          width: '18%',
          borderRadius: 9,
        }}
      >
        <Text style={{ alignSelf: 'center', fontWeight: '700', color: `${rateColor}` }}>
          {rate}%
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  assetCard: {
    width: '100%',
    height: '26%',
    marginTop: '3%',
    borderWidth: 1,
    borderColor: '#f3f6f7',
    borderStyle: 'solid',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AssetCard;

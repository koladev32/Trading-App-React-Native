import React from 'react';
import {Badge, Button, Header, Icon} from 'react-native-elements';
import Layout from '../components/Layout';
import { View, StyleSheet, Text } from 'react-native';
import AssetCard from '../components/AssetCard';

export default function HomeScreen() {
  return (
    <Layout>
      <Header
        containerStyle={{
          backgroundColor: '#f8fafb',
          borderBottomColor: '#f8fafb',
          borderBottomWidth: 0.5,
        }}
      >
        <View>
          <Text
            style={{
              color: '#0f1f3b',
              fontSize: 20,
              fontWeight: '700',
              width: '300%',
              marginLeft: '12%',
            }}
          >
            Hi, Kolawole
          </Text>
          <Text
            style={{
              color: '#86a2b8',
              fontSize: 16,
              width: '300%',
              marginLeft: '12%',
              marginTop: '3%',
            }}
          >
            Welcome back to Coin up
          </Text>
        </View>
          <View></View>
          <View style={{
              backgroundColor: 'white',
              width: 42,
              height: 42,
              borderRadius: 14,
              alignSelf: 'flex-end'
          }}>
              <Icon name={'notifications'}
              color={'#86a2b8'}
              style={{
                  color: '#86a2b8',
                  width: 42,
                  height: 42,
                  justifyContent: 'center',
              }}/>
              <Badge
                  status="success"
                  containerStyle={{ position: 'absolute', top: '25%', right: '28%' }}
                  badgeStyle={{backgroundColor: '#138dff'}}
              />
          </View>
      </Header>
      <View style={styles.container}>
        <View style={styles.portfolioRecap}>
          <View
            style={{
              flex: 1.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '7%',
              marginTop: '3%',
              marginBottom: '2%',
            }}
          >
            <Text style={{ color: '#86a2b8', fontWeight: '700', fontSize: 16, top: '2%' }}>
              Portfolio Value
            </Text>
            <Icon name={'trending-up'} color={'#138dff'} size={25} style={styles.iconStyleTrend} />
          </View>
          <Text
            style={{ color: '#0f1f3b', fontWeight: '700', fontSize: 28, marginHorizontal: '6%' }}
          >
            $12,0643,082.<Text style={{ color: '#86a2b8', fontSize: 18 }}>50</Text>
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '7%',
              marginVertical: '2%',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name={'arrow-drop-up'}
                color={'#2ec187'}
                size={14}
                style={styles.iconStyle}
                backgroundColor={'#e5f9f0'}
              />
              <Text style={{ color: '#2ec187' }}>$1,280.48 (820%)</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={'access-time'} color={'#dbdfea'} size={14} style={styles.iconStyle} />
              <Text style={{ color: '#86a2b8' }}>January 11, 2021</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2.3,
              alignSelf: 'center',
              justifyContent: 'space-around',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '16%',
                marginRight: '15%',
                top: '20%',
              }}
            >
              <Icon name={'ethereum'} size={24} type={'font-awesome-5'} />
              <Icon
                name={'bitcoin'}
                color={'#f7a034'}
                size={24}
                type={'font-awesome-5'}
                containerStyle={{ marginHorizontal: '11%' }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  top: '9%',
                  marginHorizontal: '4%',
                  color: '#86a2b8',
                }}
              >
                3+
              </Text>
            </View>
            <Button
              title="Sell"
              type="solid"
              containerStyle={{ width: '22%', marginHorizontal: '2%' }}
              buttonStyle={{ backgroundColor: '#ffedec', borderRadius: 14, height: '95%' }}
              titleStyle={{ color: '#f37575' }}
            />
            <Button
              title="Buy"
              type="solid"
              containerStyle={{ width: '22%', marginHorizontal: '2%', left: '10%',
                  shadowColor: '#138dff',
                  shadowOffset: {
                      width: 2,
                      height: 5,
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 10.00,
                  elevation: 16,
              }}
              buttonStyle={{ backgroundColor: '#138dff', borderRadius: 14, height: '95%' }}
              titleStyle={{ color: '#fff' }}
            />
          </View>
        </View>

        <View style={styles.assetsView}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '4%',
              justifyContent: 'space-between',
              marginTop: '2%',
              marginBottom: '1%',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#0f1f3b' }}>
              Explore Product
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#138dff', top: '1.5%' }}>
              View all
            </Text>
          </View>

          <View style={styles.assetCardContainer}>
            <AssetCard
              iconName={'bitcoin'}
              rateColor={'#2ec187'}
              rateBackgroundColor={'#e5f9f0'}
              assetType={'Crypto'}
              assetName={'Bitcoin'}
              rate={'+1.18'}
              iconColor={'#f7a034'}
            />
            <AssetCard
              iconName={'ethereum'}
              rateColor={'#2ec187'}
              rateBackgroundColor={'#e5f9f0'}
              assetType={'Crypto'}
              assetName={'Ethereum'}
              rate={'+2.18'}
              iconColor={'#000'}
            />
            <AssetCard
              rateColor={'#f37575'}
              rateBackgroundColor={'#ffedec'}
              assetType={'Stock'}
              assetName={'Facebook'}
              rate={'-1.10'}
              iconColor={'#4267B2'}
              iconName={'facebook'}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  portfolioRecap: {
    flex: 2,
    backgroundColor: '#fff',
    margin: '3%',
    borderRadius: 14,
  },
  assetsView: {
    flex: 3.5,
    backgroundColor: '#fff',
    marginBottom: '2%',
  },
  iconStyle: {
    margin: '2%',
    borderRadius: 7,
    top: '3%',
  },
  iconStyleTrend: {
    borderRadius: 100 / 2,
    borderWidth: 0.8,
    borderStyle: 'solid',
    width: 28,
    height: 28,
    borderColor: '#f3f6f7',
  },
  notificationIcon: {
    backgroundColor: '#fff',
  },

  assetCardContainer: {
    marginHorizontal: '3%',
    borderRadius: 14,
    flex: 1,
  },
});

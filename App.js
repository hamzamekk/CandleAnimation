import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

export default () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(3000),
        Animated.timing(AnimatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(AnimatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };
  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: AnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['yellow', '#F8AE39'],
        }),
      }}>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          transform: [
            {
              scale: AnimatedValue.interpolate({
                inputRange: [0, 0.9, 1],
                outputRange: [0, 10, 10],
              }),
            },
          ],
        }}>
        <EmptyCircle />
      </Animated.View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <CandleTwo />
        <CandleOne />
      </View>
      <View
        style={{
          backgroundColor: '#673C63',
          width: '100%',
          height: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      />
    </Animated.View>
  );
};

const EmptyCircle = () => {
  return (
    <Svg width={100} height={100}>
      <Circle stroke={'white'} strokeWidth={2} x={50} y={50} r={'50%'} />
    </Svg>
  );
};

const CandleOne = () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(AnimatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(AnimatedValue, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
      ]),
    ).start();
  };

  return (
    <Animated.View
      style={[
        {alignItems: 'center'},
        ,
        {
          transform: [
            {
              scale: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            },
            {
              translateY: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, -7],
              }),
            },
          ],
        },
      ]}>
      <View style={{height: 20, width: 5, backgroundColor: '#673C63'}} />
      <View
        style={{
          height: 150,
          borderWidth: 5,
          width: 50,
          borderColor: '#673C63',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Animated.View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 5,
              },
              {
                transform: [
                  {
                    translateX: AnimatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, -5],
                    }),
                  },
                ],
              },
            ]}>
            <View
              style={{
                backgroundColor: '#000',
                height: 8,
                width: 8,
                borderRadius: 4,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#000',
                height: 8,
                width: 8,
                borderRadius: 4,
              }}
            />
          </Animated.View>

          <Animated.View
            style={[
              {
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: '#000',
                marginTop: 7,
                marginLeft: 5,
              },
              {
                transform: [
                  {
                    scale: AnimatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 2],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
        <View style={{backgroundColor: '#94C6F2', width: 5}} />
      </View>
    </Animated.View>
  );
};

const CandleTwo = () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(3000),
        Animated.timing(AnimatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(AnimatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };
  return (
    <Animated.View
      style={{
        marginRight: 40,
        alignItems: 'center',
        transform: [
          {
            scaleY: AnimatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.9],
            }),
          },
          {
            scaleX: AnimatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          },
          {
            translateY: AnimatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 7],
            }),
          },
        ],
      }}>
      <Fire />
      <Animated.View
        style={{
          height: 85,
          width: 70,
          borderWidth: 5,
          borderColor: '#673C63',
          backgroundColor: AnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['white', 'rgb(250,169,163)'],
          }),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}>
          <EyeAnimation />
          <EyeAnimation rotate />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const EyeAnimation = ({rotate}) => {
  const AnimatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(AnimatedValue, {
          delay: 2500,
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(AnimatedValue, {
          delay: 1000,
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  return (
    <Animated.View
      style={{
        marginRight: AnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 10],
        }),
        transform: [{scaleX: rotate ? -1 : 1}],
      }}>
      <Animated.View
        style={{
          width: AnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 10],
          }),
          height: AnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [6, 10],
          }),
          borderRadius: AnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 5],
          }),
          backgroundColor: '#000',
          transform: [{rotate: '-30deg'}],
        }}
      />
      <Animated.View
        style={{
          width: 1,
          height: 6,
          backgroundColor: '#000',
          transform: [
            {rotate: '30deg'},
            {
              scale: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ],
        }}
      />
    </Animated.View>
  );
};

const Fire = () => {
  const AnimatedValue = useRef(new Animated.Value(1)).current;

  const FireAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(AnimatedValue, {
          delay: 1000,
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(FireAnimated, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.delay(1000),
        Animated.timing(AnimatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          backgroundColor: '#808080',
          position: 'absolute',
          zIndex: 1,
          opacity: FireAnimated.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
          }),
          transform: [
            {
              translateY: FireAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -60],
              }),
            },
            {
              translateX: FireAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -30],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          backgroundColor: '#808080',
          height: 4,
          width: 30,
          position: 'absolute',
          zIndex: 1,
          left: -10,
          opacity: FireAnimated.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
          }),
          transform: [
            {
              translateX: FireAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -60],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          backgroundColor: 'orange',
          height: 30,
          width: 30,
          borderRadius: 10,
          transform: [
            {
              translateY: AnimatedValue.interpolate({
                inputRange: [0, 0.7, 1],
                outputRange: [10, 0, 0],
              }),
            },
            {
              scale: AnimatedValue.interpolate({
                inputRange: [0, 0.7, 1],
                outputRange: [0, 1, 1],
              }),
            },
          ],
        }}
      />
      <View
        style={{
          height: 10,
          width: 5,
          backgroundColor: '#673C63',
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

import React, {useLayoutEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {$COLORS} from '@utils';

const COORDS = [
  {
    latitude: -23.5640793,
    longitude: -46.6572574,
    title: 'FIAP',
    description: 'Educação que transforma',
  },
  {
    latitude: -23.6102603,
    longitude: -46.6691921,
    title: 'Shopping Ibirapuera',
    description: 'Comprinhas',
  },
  {
    latitude: -22.8473459,
    longitude: -47.0653847,
    title: 'Shopping D. Pedro',
    description: 'Longe Bagarai',
  },
  {
    latitude: -23.5417489,
    longitude: -46.6326566,
    title: 'Shopping D. Pedro',
    description: 'Longe Bagarai',
  },
];

const GOOGLE_MAPS_APIKEY = 'AIzaSyA5u1hrq_s_iChyijheYTrr8hoKJnyrWyQ';

export function Maps() {
  const mapRef = useRef<MapView>(null);

  function fitPadding() {
    mapRef.current?.fitToCoordinates(COORDS, {
      edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
      animated: true,
    });
  }

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      fitPadding();
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: COORDS[0].latitude,
        longitude: COORDS[0].longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {COORDS.map((coord, index) => (
        <Marker
          key={index}
          coordinate={coord}
          title={coord.title}
          description={coord.description}
        />
      ))}
      {COORDS.map((coord, index) => (
        <MapViewDirections
          key={index}
          origin={coord}
          destination={COORDS[index + 1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor={$COLORS.primary}
          strokeWidth={7.5}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

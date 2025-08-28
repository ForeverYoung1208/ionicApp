import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { IonButton } from '@ionic/react';
import { Capacitor } from '@capacitor/core';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useLogger } from '../../logger/useLogger';
import styled from '@emotion/styled';

const MyMap: React.FC = () => {
  const logger = useLogger();
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<GoogleMap | null>(null);
  const startingPosition = {
    lat: 33.6,
    lng: -117.9,
  };
  
  const [manualPosition, setManualPosition] = useState(startingPosition);
  
  const setPositionToCurrentGPSData = useCallback(async () => {
    try {
      if (Capacitor.isNativePlatform()) {
        const permission = await Geolocation.requestPermissions();
        if (permission.location !== 'granted') {
          return;
        }
      }

      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000
      });
      
      logger.add('coordinates set', position.coords, position.coords);
      setManualPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      logger.add('Error getting location', error);
    }
  }, [logger]);

  useEffect(() => {
    if (!mapDivRef.current) return;

    const createMap = async () => {
      const element = mapDivRef.current;
      if (!element) return;
      try {
        mapInstance.current = await GoogleMap.create({
          id: 'my-cool-map',
          element: element,
          config: {
            center: manualPosition,
            zoom: 8,
          },
          apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
        });
        setPositionToCurrentGPSData();
      } catch (error) {
        console.error('Error creating map:', error);
      }
    };
    createMap();

  // no map creation if position changes - no need to add position to dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapDivRef]);
  
  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setCamera({coordinate:manualPosition});
    }
  }, [manualPosition, mapInstance]);

  return (
  <>
    <h2 style={{ marginBottom: '20px', color: '#333' }}>Google Maps Integration</h2>
    <MapWrapper>
      <div
        ref={mapDivRef}
        id="map"
        style={{
          width: '100%',
          height: '400px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          backgroundColor: 'transparent',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
        }}
      ></div>
    </MapWrapper>
    <IonButton onClick={() => setPositionToCurrentGPSData()}>reset coordinates</IonButton>  
    {logger.messages}
  </>
  )
}


const MapWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export default MyMap;
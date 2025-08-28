import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { IonButton } from '@ionic/react';
import React, { useRef, useEffect, useState, useCallback } from 'react';

const MyMap: React.FC = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<GoogleMap | null>(null);
  const [aconsole, setAconsole] = useState<string[]>([]);
  const startingPosition = {
    lat: 33.6,
    lng: -117.9,
  };
  
  
  const [manualPosition, setManualPosition] = useState(startingPosition);
  
  const addToConsole = useCallback((message: string) => {
      setAconsole(prev => [...prev, message]);
  }, [] as Array<string>);
  const setPositionToCurrentGPSData = useCallback(async () => {
    
    try {
      
    const permission = await Geolocation.requestPermissions();
    if (permission.location !== 'granted') {
      console.log('Location permission denied');
      return;
    }
    } catch (error) {
      addToConsole('Error requesting permissions: ' + JSON.stringify(error));
    }    

    const position = await Geolocation.getCurrentPosition();
    setManualPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
    addToConsole('setting position ' + JSON.stringify(position.coords));
  }, [addToConsole]);

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
    <div className="component-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Google Maps Integration</h2>
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
    </div>
      <IonButton onClick={() => setPositionToCurrentGPSData()}>reset coordinates</IonButton>  
      {aconsole.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
  </>
  )
}

export default MyMap;
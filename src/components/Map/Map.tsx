import { GoogleMap } from '@capacitor/google-maps';
import React, { useRef, useEffect } from 'react';

const MyMap: React.FC = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<GoogleMap | null>(null);

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
            center: { lat: 33.6, lng: -117.9 },
            zoom: 8,
          },
          apiKey: 'AIzaSyDkaiDJXshPWCm5YMm8PTVuFUX1CrA3vD4'
        });
      } catch (error) {
        console.error('Error creating map:', error);
      }
    };
    createMap();

    // Cleanup function to destroy the map when component unmounts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
      }
    };
  }, [mapDivRef]);

  return (
    <div className="component-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Google Maps Integration</h2>
      <capacitor-google-map
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
      ></capacitor-google-map>
    </div>
  )
}

export default MyMap;
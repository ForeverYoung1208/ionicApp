import { GoogleMap } from '@capacitor/google-maps';
import { useRef, useEffect } from 'react';

// Define the custom element type
type CapacitorGoogleMapElement = HTMLElement & {
  // Add any custom properties or methods if needed
};

// Type assertion for the JSX element
const GoogleMapComponent = 'capacitor-google-map' as unknown as React.FC<{
  ref?: React.Ref<HTMLElement>;
  style?: React.CSSProperties;
  className?: string;
}>;

const MyMap: React.FC = () => {
  const mapRef = useRef<CapacitorGoogleMapElement>(null);
  const newMapRef = useRef<GoogleMap | null>(null);

  async function createMap() {
    if (!mapRef.current) return;

    try {
      newMapRef.current = await GoogleMap.create({
        id: 'my-cool-map',
        element: mapRef.current,
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
        config: {
          center: {
            lat: 33.6,
            lng: -117.9
          },
          zoom: 8
        }
      });
    } catch (error) {
      console.error('Error creating map:', error);
    }
  }

  useEffect(() => {
    // Cleanup function to destroy the map when component unmounts
    return () => {
      if (newMapRef.current) {
        newMapRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="component-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Google Maps Integration</h2>
      <div style={{ 
        width: '100%', 
        height: '400px', 
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        background: 'transparent'
      }}>
        <GoogleMapComponent 
          ref={mapRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            background: 'transparent'
          }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={createMap}
          style={{
            padding: '10px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
        >
          Load Map
        </button>
      </div>
    </div>
  )
}

export default MyMap;
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AntennesMap = ({ antennes, onAntenneSelect }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <div className="h-96 rounded-2xl overflow-hidden">
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={5}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {antennes.map((a) => (
          <Marker
            key={a.id}
            position={[a.coordinates.lat, a.coordinates.lng]}
            eventHandlers={{
              click: () => onAntenneSelect?.(a.id),
            }}
          >
            <Popup>
              <strong>{a.name}</strong><br />
              {a.school}<br />
              {a.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AntennesMap;

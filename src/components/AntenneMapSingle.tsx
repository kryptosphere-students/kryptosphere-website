import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AntenneMapSingle = ({ antenne }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden h-80">
    <MapContainer
    center={[antenne.coordinates.lat, antenne.coordinates.lng]}
    zoom={10}
    scrollWheelZoom={false}
    className="h-full w-full"
    style={{ height: '100%', width: '100%' }} // ← Required!
    >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[antenne.coordinates.lat, antenne.coordinates.lng]}>
          <Popup>
            <strong>{antenne.city}, {antenne.country}</strong><br />
            {antenne.description}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AntenneMapSingle;


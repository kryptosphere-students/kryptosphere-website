
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface Antenne {
  id: string;
  name: string;
  school: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

interface AntennesMapProps {
  antennes: Antenne[];
  onAntenneSelect?: (antenneId: string) => void;
}

const AntennesMap: React.FC<AntennesMapProps> = ({ antennes, onAntenneSelect }) => {
  return (
    <div className="h-96 rounded-2xl overflow-hidden">
      <MapContainer
        center={[48.8566, 2.3522]} // Centré sur Paris
        zoom={5}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {antennes.map((antenne) => (
          <Marker
            key={antenne.id}
            position={[antenne.coordinates.lat, antenne.coordinates.lng]}
            eventHandlers={{
              click: () => {
                if (onAntenneSelect) {
                  onAntenneSelect(antenne.id);
                }
              }
            }}
          >
            <Popup>
              <div className="text-center">
                <strong className="text-blue-600">{antenne.name}</strong><br />
                <span className="text-slate-600">{antenne.school}</span><br />
                <span className="text-sm text-slate-500">{antenne.description}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AntennesMap;

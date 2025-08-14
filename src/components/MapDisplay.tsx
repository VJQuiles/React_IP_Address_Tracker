import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import type { IPData } from "../services/apiService"

type MapDisplayProps = {
    data: IPData | null
}

export default function MapDisplay({ data }: MapDisplayProps) {
    const champDefault = data ? [data.lat, data.lng] : [39.900833, -75.1675]
    const mapKey = import.meta.env.VITE_MAP_KEY

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <MapContainer center={champDefault} zoom={10} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url={`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${mapKey}`}
                    attribution='<a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                {data && (
                    <Marker position={[data.lat, data.lng]}>
                        <Popup>
                            {data.ip}, {data.location}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}     
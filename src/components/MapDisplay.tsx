import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import type { IPData } from "../services/apiService"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    shadowUrl: markerShadow,
})

type MapDisplayProps = {
    data: IPData | null
}

function FlyToMarker({ position }: { position: [number, number] }) {
    const map = useMap()
    if (position) {
        map.flyTo(position, 15)
    }
    return null
}

export default function MapDisplay({ data }: MapDisplayProps) {
    const champDefault: [number, number] = [39.900833, -75.1675]
    const markerPosition: [number, number] = data ? [data.lat, data.lng] : champDefault
    const mapKey = import.meta.env.VITE_MAP_KEY

    return (
        <div className="map-container">
            <MapContainer
                center={markerPosition}
                zoom={15}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url={`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${mapKey}`}
                    attribution='<a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />


                <Marker position={markerPosition}>
                    <Popup>
                        {data ? `${data.ip}, ${data.location}` : "Home of the Super Bowl Champs 🦅 GO BIRDS!!!"}
                    </Popup>
                </Marker>


                {data && <FlyToMarker position={markerPosition} />}
            </MapContainer>
        </div>
    );
}     
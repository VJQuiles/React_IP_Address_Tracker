import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import type { IPData } from "../services/apiService"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"


const DefaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

type MapDisplayProps = {
    data: IPData | null
}

export default function MapDisplay({ data }: MapDisplayProps) {
    const champDefault: [number, number] = data ? [data.lat, data.lng] : [39.900833, -75.1675]
    const mapKey = import.meta.env.VITE_MAP_KEY

    L.Icon.Default.mergeOptions({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        shadowUrl: markerShadow,
    })

    console.log("Marker position:", champDefault)

    return (
        <div className="map-container">
            <MapContainer
                center={champDefault}
                zoom={15}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url={`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${mapKey}`}
                    attribution='<a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                {data && (
                    <Marker position={[39.9526, -75.1652]} zIndexOffset={1000}>
                        <Popup>
                            Home of the Reigning Super Bowl Champions 🦅
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}     
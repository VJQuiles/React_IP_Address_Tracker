import { Card } from "react-bootstrap"

type MapDisplayProps = {
    data: any
}

export default function MapDisplay({ data }: MapDisplayProps) {
    return (
        <Card>
            <Card.Body>
                {/* Leaflet tags will be used a little later */}
                <div>Hello, Map</div>
            </Card.Body>
        </Card>
    )
}
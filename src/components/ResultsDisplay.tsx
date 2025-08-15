import "../index.css"
import type { IPData } from "../services/apiService"
import { Card } from "react-bootstrap"

type ResultsDisplayProps = {
    data: IPData | null
}

export default function ResultsDisplay({ data }: ResultsDisplayProps) {
    const ip = data?.ip ?? "E.A.G.L.E.S"
    const location = data?.location ?? "Philadelphia, PA"
    const timezone = data?.timezone ?? "UTC -05:00"
    const isp = data?.isp ?? "SB59"

    return (
        <Card className="results-display-card">
            <Card.Body>
                <div className="info-col">
                    <div className="info-title">IP Address</div>
                    <div className="info-value">{ip}</div>
                </div>
                <div className="info-col">
                    <div className="info-title">Location</div>
                    <div className="info-value">{location}</div>
                </div>
                <div className="info-col">
                    <div className="info-title">Timezone</div>
                    <div className="info-value">{timezone}</div>
                </div>
                <div className="info-col">
                    <div className="info-title">ISP</div>
                    <div className="info-value">{isp}</div>
                </div>
            </Card.Body>
        </Card>
    )
}
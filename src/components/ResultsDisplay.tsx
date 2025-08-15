import "../index.css"
import type { IPData } from "../services/apiService"
import { Card } from "react-bootstrap"

type ResultsDisplayProps = {
    data: IPData | null
}

export default function ResultsDisplay({ data }: ResultsDisplayProps) {
    if (!data) {
        return null
    }

    return (
        <Card className="results-display-card">
            <Card.Body>
                <div className="info-col">
                    <div className="info-title">IP Address</div>
                    <div className="info-value">{data.ip}</div>
                </div>
                <div className="info-col">
                    <div className="info-title">Location</div>
                    <div className="info-value">{data.location}</div>
                </div>
                <div className="info-col">
                    <div className="info-title">Timezone</div>
                    <div className="info-value">{data.timezone}</div>
                </div>
                <div className="info-col">
                    <div className="info-title">ISP</div>
                    <div className="info-value">{data.isp}</div>
                </div>
            </Card.Body>
        </Card>
    )
}
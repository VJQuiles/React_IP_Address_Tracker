import "../index.css"
import type { IPData } from "../services/apiService"
import { Card, Row, Col } from "react-bootstrap"

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
                <Row className="text-center">
                    <Col className="info-col">
                        <h6 className="info-title">IP Address</h6>
                        <span className="info-value">{data.ip}</span>
                    </Col>
                    <Col className="info-col">
                        <h6 className="info-title">Location</h6>
                        <span className="info-value">{data.location}</span>
                    </Col>
                    <Col className="info-col">
                        <h6 className="info-title">Timezone</h6>
                        <span className="info-value">{data.timezone}</span>
                    </Col>
                    <Col className="info-col">
                        <h6 className="info-title">ISP</h6>
                        <span className="info-value">{data.isp}</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
import { Card, Row, Col } from "react-bootstrap"
import type { IPData } from "../services/apiService"

type ResultsDisplayProps = {
    data: IPData | null
}

export default function ResultsDisplay({ data }: ResultsDisplayProps) {
    if (!data) {
        return null
    }

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <h6>IP Address</h6>
                        <p>{data.ip}</p>
                    </Col>
                    <Col>
                        <h6>Location</h6>
                        <p>{data.location}</p>
                    </Col>
                    <Col>
                        <h6>Timezone</h6>
                        <p>{data.timezone}</p>
                    </Col>
                    <Col>
                        <h6>ISP</h6>
                        <p>{data.isp}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
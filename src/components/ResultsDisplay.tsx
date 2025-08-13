import { Card } from "react-bootstrap"

type ResultsDisplayProps = {
    data: any
}

export default function ResultsDisplay({ data }: ResultsDisplayProps) {
    if (!data) {
        return null
    }

    return (
        <Card>
            <Card.Body>
                {/* the 4 pieces of data will be displayed here */}
            </Card.Body>
        </Card>
    )
}
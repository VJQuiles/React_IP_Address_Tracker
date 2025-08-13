import type { FormEvent } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"

type SearchFormProps = {
    // data type may have to be changed
    onSearch: (data: any) => void
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // input validation and api call will go here
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Enter an IP Address or Domain"
                />
                {/* ammend button to have the picture */}
                <Button variant="dark" type="submit">Search</Button>
            </InputGroup>
        </Form>
    )
}
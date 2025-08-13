import { useState, type FormEvent } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"

type SearchFormProps = {
    onSearch: (data: any) => void
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [query, setQuery] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!query.trim()) {
            return
        }
        onSearch(query.trim())
        setQuery("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control
                    id="searchBar"
                    type="text"
                    placeholder="Enter an IP Address or Domain"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {/* ammend button to have the picture */}
                <Button variant="dark" type="submit">Search</Button>
            </InputGroup>
        </Form>
    )
}
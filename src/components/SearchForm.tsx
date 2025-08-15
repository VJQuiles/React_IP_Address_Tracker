import { useState, type FormEvent } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"
import arrowIcon from "../assets/icon-arrow.svg"
import "../index.css"

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
        <div className="search-hero">
            <h2 className="search-title">IP Address Tracker</h2>
            <Form onSubmit={handleSubmit} className="search-form" >
                <InputGroup className="search-input-group">
                    <Form.Control
                        className="search-input"
                        type="text"
                        placeholder="Enter an IP Address or Domain"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button
                        className="search-btn"
                        variant="dark"
                        type="submit"
                        aria-label="Search">
                        <img
                            src={arrowIcon}
                            alt="Arrow pointing to the right"
                            aria-hidden="true" />
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}
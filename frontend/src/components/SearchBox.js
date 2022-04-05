import React, { useState } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
      <Form onSubmit={submitHandler} className="d-flex">
        <FormControl
          type="search"
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="me-2"
          aria-label="Search"
        />
        <Button type ='submit' variant="outline-success">Search</Button>
      </Form>
  )
}

export default SearchBox


import React from 'react'
import { useState } from 'react';
import "./FetchData.css"
import {
  Button,
  Form,
  Col, Row
} from "react-bootstrap";

const Forms = (props) => {

    const [userId, setuserid] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
   

    const handleuserId = (event) => {
      setuserid(event.target.value)
    }

    const handleid = (event) => {
      setId(event.target.value)
    }

    const handletitle = (event) => {
      setTitle(event.target.value)
    }

    const handlebody = (event) => {
      setBody(event.target.value)
    }

    const submitClubHandler = (event) => {
      event.preventDefault();
        if (userId === "" ||  title === "" || body === "" ) {
            alert("please fill all the form")
        return
        }

      const submitobj = {
        userId : userId,
        id : id,
        title : title,
        body : body,
      }

      props.newdata(submitobj);

      setuserid("");
      setId("");
      setTitle("");
      setBody("");

    }

  return (
    <div className='Formstyle'>
                <Form onSubmit={submitClubHandler} style={{ margin: "1%" }}>
                  <Row>
                    <Col md={3}>
                      <Form.Group className="mb-3" controlId="userId">
                        <Form.Label>user Id: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter userId"
                          name="userId"
                          value={userId}
                          onChange={handleuserId}
                        />
                        <Form.Text className="text-muted">
                          Please enter Your userID
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={3}>
                      <Form.Group className="mb-3" controlId="id">
                        <Form.Label>Id: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder='Auto Complete'
                          name="id"
                          value={id}
                          onChange={handleid}
                        />
                        <Form.Text className="text-muted">
                          Please enter Your userID
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={3}>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title : </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter title"
                          name="title"
                          value={title}
                          onChange={handletitle}
                        />
                        <Form.Text className="text-muted">
                          Please enter title
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={3}>
                      <Form.Group className="mb-3" controlId="body">
                        <Form.Label>body: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter text in body"
                          name="body"
                          value={body}
                          onChange={handlebody}
                        />
                        <Form.Text className="text-muted">
                          Please enter body
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Button variant="primary" type="submit"> Submit </Button>
                    </Form>
                    
    </div>
  )
}

export default Forms;
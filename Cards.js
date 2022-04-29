import {Card, Col, Row} from "react-bootstrap";

const AllData = (props) => {
    return (
        <ul>
            <Row>           
            {
                props.fetchdata.map(item => {
                    return (
                        <Col md={3} style={{ marginBottom: '10px'}} key={item.id}>
                            <Card style={{ width: '18rem', height: '19rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">User Id:{item.userId}  / Id:{item.id}</Card.Subtitle>
                                    <Card.Text>{item.body}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </ul>
    )
}

export default AllData;
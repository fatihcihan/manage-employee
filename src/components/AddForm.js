import { Form } from 'react-bootstrap';

const AddForm = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="textarea"
                    placeholder="Address *"
                    rows={3}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                />
            </Form.Group>
            <Button variant="success" type="submit">Add New Employee</Button>{' '}
        </Form>
    )
}
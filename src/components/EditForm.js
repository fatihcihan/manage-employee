import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';

const EditForm = () => {

    const { updateEmployee } = useContext(EmployeeContext);

    return (
        <Form >
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="textarea"
                    placeholder="Address *"
                    name="address"
                    as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                />
            </Form.Group>
            <Button
                variant="success"
                type="submit">Edit Employee</Button>
        </Form>
    )
}

export default EditForm;

import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="textarea"
                    placeholder="Address *"
                    rows={3} />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mb-3"
                    type="text"
                    placeholder="Phone"
                />
            </Form.Group>
            <Button
                variant="success"
                type="submit">Add New Employee</Button>
        </Form>
    )
}

export default AddForm;

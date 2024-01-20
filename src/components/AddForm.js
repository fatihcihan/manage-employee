import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="textarea"
                    placeholder="Address *"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </Form.Group>
            <Button
                variant="success"
                type="submit">Add New Employee</Button>
        </Form>
    )
}

export default AddForm;

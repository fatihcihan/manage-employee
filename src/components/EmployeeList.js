import { useContext, useEffect, useState } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Button, Modal, Alert } from 'react-bootstrap';
import AddForm from './AddForm';
import Pagination from './Pagination'

const EmployeeList = () => {
    const { sortedEmployees } = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2);

    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }

    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
    };

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

    useEffect(() => {
        setShowAlert(false);
    }, []);

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                Employee List successfully updated
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployees.sort((a, b) => (a.name < b.name ? -1 : 1)).map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees={currentEmployees}
                sortedEmployees={sortedEmployees} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='modal-header'>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;
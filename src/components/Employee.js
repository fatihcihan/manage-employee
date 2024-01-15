const Employee = ({ employees }) => {
    console.log(employees);
    return (
        <>
            {
                employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="" data-original-title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="" data-original-title="Delete"></i></a>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default Employee;
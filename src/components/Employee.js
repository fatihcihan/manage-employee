const Employee = ({ employees }) => {
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
                            <button className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="" data-original-title="Edit"></i></button>
                            <button className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="" data-original-title="Delete"></i></button>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default Employee;
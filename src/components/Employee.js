const Employee = () => {
    return (
        <tr>
            <td>Thomas Hardy</td>
            <td>thomashardy@mail.com</td>
            <td>89 Chiaroscuro Rd, Portland, USA</td>
            <td>(171) 555-2222</td>
            <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="" data-original-title="Edit"></i></a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="" data-original-title="Delete"></i></a>
            </td>
        </tr>
    )
}

export default Employee;
# Employee Management Application

## Purpose and Benefits of the Project

This project provides a sample framework for developing an employee management application. The goal of the project is to provide solutions to common data sharing problems in React applications. Such issues are often referred to as prop drilling and involve passing data passed to the lower levels of a component through mid-level components. This can increase the complexity of the application and make it difficult to maintain.

In this project, we aim to solve the data sharing problem using Context API and Reducer. Context components, such as EmployeeContext, facilitate data sharing between components by enabling data flow at every level of the application. Thanks to this approach, components anywhere in the application can directly access the required data and influence the overall state of the application.

The project also utilizes modern technologies to provide developers with a more efficient and effective coding experience. Using React Hooks (useState, useContext), state management and side effects of components can be easily handled. In addition, React uses a popular CSS framework such as Bootstrap, making it quick and easy to create the user interface. Furthermore, UUID is used to create a unique ID for each employee. This plays an important role to uniquely identify employees.

Furthermore, localStorage is used to store the data in the browser. This ensures that the data is preserved when users revisit the app. Finally, the pagination feature is integrated into the app, which allows users to have a better experience interacting with the large data set.

## Technologies Used

- React.js
- React Context API
- React Hooks
- Bootstrap
- React Bootstrap
- UUID (Universal Unique Identifier)

## Project Structure

- **src/App.js:** App.js is the main component of this application and contains the core components of the employee management application. This file contains the EmployeeContextProvider component and wraps the EmployeeList component. This way, the EmployeeList component can access and view or edit employee data in the rest of the application. App.js is used as the starting point of the application and brings the other components together so that the application can run properly.

- **src/components/AddForm.js:** The AddForm component provides a form for adding new employees. This component allows the user to enter the new employee's name, email address, address and phone number and then makes a function call to process this information. The AddForm component adds the new employee using the dispatch function from the EmployeeContext component and ensures that the EmployeeList component is updated as a result of this process. Thus, users can easily add new employees to the application.

- **src/components/EditForm.js:** The EditForm component provides a form for editing an existing employee's information. This component allows the user to edit the employee's name, email address, address and phone number, and then makes a function call to process this updated information. The EditForm component updates the employee using the dispatch function from the EmployeeContext component, which in turn updates the EmployeeList component. Thus, users can easily edit the information of existing employees.

- **src/components/Employee.js:** The Employee component represents a row that displays an employee's information. This component displays the employee's name, email address, address and phone number. It also provides the corresponding edit or delete buttons for the user to edit the employee information or delete the employee. When the user clicks the edit button, a modal opens and the EditForm component is displayed within that modal so that the user can edit the employee information. A delete button is also provided to give the user a confirmation to delete the employee. The Employee component gets the employee data directly from the EmployeeContext component and uses the dispatch function for update or delete operations.

- **src/components/EmployeeList.js:** The EmployeeList component displays and manages a list of all employees. This component displays a table containing the name, email address, address and phone number of employees. For editing and deleting operations for each employee, it provides the corresponding edit or delete buttons. To add a new employee, it presents the user with an 'Add New Employee' button. When the user clicks on this button, a modal opens and the AddForm component is displayed within this modal so that the user can add a new employee. Also, an 'Employee List successfully updated' alert is presented to inform the user. The EmployeeList component uses data from the EmployeeContext component to sort employees and perform paging operations. It is also integrated with a paging component to enable navigation between employees.

- **src/components/Pagination.js:** The Pagination component performs pagination operations of the employee list. It retrieves the necessary information to determine the total number of pages and the current page. It presents the user with buttons to perform pagination operations. Each button allows the user to navigate to a specific page. It also presents the user with a message showing the current page information and the total number of entries. The Pagination component provides a user interface that allows navigating between pages and updating the current page.

- **contexts/EmployeeContext.js:** EmployeeContext is a React Context component used to manage employee data in this application. This component is built using the Context API and Reducer. EmployeeContext facilitates data sharing between components by enabling data flow at every level of the application.

## Project Setup

### To start using the app, follow these steps;

-  **Clone the Project:** If you have Git installed, open your terminal and run the following command to clone the project;
 -  `git clone https://github.com/fatihcihan/manage-employee.git`   

 -  **Install Required Dependencies:** To install the required dependencies in the project, navigate to the root directory of the project in the terminal and run the following command;  
 -  `npm install`

 -  **Start the Project:** Run the following command in the terminal to start the project;
 - `npm start`

- **View the App:** After successfully launching the project, you can view the app by opening the following URL in your browser;  
 - **http://localhost:3000**
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
import { useEffect, useState, useRef } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [avatarError, setAvatarError] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(json => setEmployees(json.data))
  }, []);

  const addEmployee = () => {
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const avatar = avatarRef.current.value;
    
    setIdError("");
    setNameError("");
    setEmailError("");
    setAvatarError("");

    // Check if input fields are empty
    if (!id) {
      setIdError("ID is required.");
      return;
    }
    if (!name) {
      setNameError("Name is required.");
      return;
    }
    if (!email) {
      setEmailError("Email is required.");
      return;
    }
    if (!avatar) {
      setAvatarError("Avatar is required.");
      return;
    }

    // Validate input values
    if (!/^\d+$/.test(id)) {
      setIdError("Invalid ID: Please enter a number.");
      return;
    }
    if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(name)) {
      setNameError("Invalid name: Please enter only letters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email: Please enter a valid email address.");
      return;
    }

    const newEmployee = {
      id,
      first_name: name,
      last_name: "",
      email,
      avatar,
    };

    setEmployees([...employees, newEmployee]);
    idRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    avatarRef.current.value = "";
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  return (
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{`${employee.first_name} ${employee.last_name}`}</td>
              <td>{employee.email}</td>
              <td><img src={employee.avatar} alt="Employee Avatar" /></td>
              <td><Button type="button" variant="danger" onClick={() => deleteEmployee(employee.id)}>Delete</Button></td>
            </tr>
          ))}
          <tr className="input-row">
            <td>
              <input type="text" placeholder="ID" className={`form-control ${idError && 'is-invalid'}`} ref={idRef}/>
              {idError && <div className="invalid-feedback">{idError}</div>}
            </td>
            <td>
              <input type="text" placeholder="Name" className={`form-control ${nameError && 'is-invalid'}`} ref={nameRef}/>
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </td>
            <td>
              <input type="text" placeholder="Email" className={`form-control ${emailError && 'is-invalid'}`} ref={emailRef}/>
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </td>
            <td>
              <input type="text" alt="Employee Avatar" placeholder="Avatar" className={`form-control ${avatarError && 'is-invalid'}`} ref={avatarRef}/>
              {avatarError && <div className="invalid-feedback">{avatarError}</div>}
            </td>
            <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;

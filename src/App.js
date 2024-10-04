import react, { useState } from 'react';
import './App.css';

function App() {

  const [Patients,setPatients]=useState([]);
  const [Name,setName]=useState('');
  const [Dob,setDob]=useState('');
  const [Mobile,setMobile]=useState('');
  const [DateOfAppoinment,setDateOfAppoinment]=useState('');
  const [EditIndex,setEditIndex]=useState(null);
  
  const handleSubmit=(e)=>{
    (e).preventDefault();
    const NewPatient={Name,Dob,Mobile,DateOfAppoinment};

    if(EditIndex!=null){
      const EditPatient =([...Patients]);
      EditPatient[EditIndex]=NewPatient;
      setEditIndex(null);
      setPatients(EditPatient);

    }
    else {
    setPatients([...Patients,NewPatient]);
    }
    setName('');
    setDob('');
    setMobile('');
    setDateOfAppoinment('');
  
}

  const handleEdit =(index)=>{
    const EditPatient=Patients[index];
      setName(EditPatient.Name);
      setDob(EditPatient.Dob);
      setMobile(EditPatient.Mobile);
      setDateOfAppoinment(EditPatient.DateOfAppoinment);
      setEditIndex(index);
  }
  const handleDelete = (index) => {
    const updatedPatients = Patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <h1>Enter Patients Detail</h1>

        <div className='Form'>  <p>Enter name :</p>
        <input type='text' placeholder='enter Patients name' value={Name} onChange={(e)=>setName(e.target.value)}></input>

        <p>Enter Date of Birth :</p>
        <input type='date' placeholder='enter DOB' value={Dob} onChange={(e)=>setDob(e.target.value)} />

        <p> Enter Mobile Number :</p>
        <input type='number' placeholder='+91' value={Mobile}  onChange={(e)=>setMobile(e.target.value)}></input>

        <p>Enter Date of Appoinment :</p>
        <input type='date' placeholder='date of appoinment' value={DateOfAppoinment}  onChange={(e)=>setDateOfAppoinment(e.target.value)}></input>

        <br></br>
        <button className='btn' type='submit' >Submit Details</button>
         
        </div> 
        </form>

      <table className='tabble' border={"1px"}>
        <thead>
          <tr>
          <th>Patient's name</th>
          <th>Dob</th>
          <th>Ph.No</th>
          <th>Appoinment Date</th>
          <th>Action</th>
          </tr>
          
        </thead>
        <tbody>
        {Patients.map((Patient,index)=>(
          <tr key={index}>
            <td>{Patient.Name}</td>
            <td>{Patient.Dob}</td>
            <td>{Patient.Mobile}</td>
            <td>{Patient.DateOfAppoinment}</td>
           <td> <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>delete</button>
            </td>
          </tr>

        ))}
        </tbody>

      </table>
        
    </div>
  );
}

export default App;

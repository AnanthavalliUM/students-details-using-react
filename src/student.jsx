import React, {useState} from "react";


function Studentdetails() {
  const[name,setname] = useState("");
  const[rollno,setrollno] = useState("");
  const[dept,setdept] = useState("");
  const [details,setdetails] = useState([])

  const Addstudents = () => {
    console.log(name, rollno, dept);
    setdetails([...details,{name:name, rollno:rollno, dept:dept}])
    setname("");
    setrollno("");
    setdept("")
  };

  const Delete = () => {
    setdetails([]);
  }

  const Deleteone = (rollno) => {
    const newstd = details.filter(e => e.rollno !== rollno )
    setdetails(newstd)

  }

  return(

    <div>
      <h2>Student Details </h2>
       <input type='text' placeholder='Enter a student name' value={name} onChange={e => setname(e.target.value)} /> <br/>
       <input type='number' placeholder='Enter a student rollno' value={rollno} onChange={e => setrollno(e.target.value)} /> <br/>
       <input type='text' placeholder='Enter a student Dept' value={dept} onChange={e => setdept(e.target.value)} /> <br/>

       <button onClick={Addstudents}>Add student </button><br />
       <button onClick={Delete}> Delete all </button>

       {/* display the student details */}
          {details.map((std, id) => {

            return(
              <div key={id}>

                {std.name} {std.rollno} {std.dept}

                <button className='del' onClick={ () => {Deleteone (std.rollno)} }>X</button>
                </div>
            )
          })}



      </div>
  )
};

export default Studentdetails;
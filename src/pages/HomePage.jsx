import { useState } from "react";
import { Link } from "react-router-dom"; 

import studentsData from "../assets/students.json";

function HomePage() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>
      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {students &&
        students.map((student) => (
          <div key={student._id} className="flex justify-between items-center p-2 border-b">
            <div style={{ flexBasis: "20%" }}>
              <img src={student.image || "/path/to/placeholder.png"} alt={student.name} className="w-16 h-16 object-cover rounded-full" />
            </div>
            <div style={{ flexBasis: "20%" }}>
              <Link to={`/students/${student._id}`} className="text-blue-500 hover:text-blue-700">
                {student.firstName} {student.lastName}
              </Link>
            </div>
            <div style={{ flexBasis: "20%" }}>{student.program}</div>
            <div style={{ flexBasis: "20%" }}>{student.email}</div>
            <div style={{ flexBasis: "20%" }}>{student.phone}</div>
          </div>
        ))}
    </div>
  );
}

export default HomePage;
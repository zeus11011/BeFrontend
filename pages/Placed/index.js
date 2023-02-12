import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import styles from "../../styles/Placed.module.scss";
import TableScrollbar from "react-table-scrollbar";
const data = [
  {
    cgpa: "8.5",
    company: "TCS",
    name: "John Doe",
    roll: "101",
    department: "Computer Science",
    package: "6 LPA",
    email: "johndoe@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jane Doe",
    roll: "102",
    department: "Mechanical Engineering",
    package: "5 LPA",
    email: "janedoe@email.com",
  },

  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jim Smith",
    roll: "103",
    department: "Electronics Engineering",
    package: "7 LPA",
    email: "jimsmith@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Sarah Johnson",
    roll: "104",
    department: "Civil Engineering",
    package: "6.5 LPA",
    email: "sarahjohnson@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Bob Wilson",
    roll: "105",
    department: "Computer Science",
    package: "5.5 LPA",
    email: "bobwilson@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Emily Davis",
    roll: "106",
    department: "Mechanical Engineering",
    package: "6 LPA",
    email: "emilydavis@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Michael Brown",
    roll: "107",
    department: "Electronics Engineering",
    package: "7.5 LPA",
    email: "michaelbrown@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "John Doe",
    roll: "101",
    department: "Computer Science",
    package: "6 LPA",
    email: "johndoe@email.com",
  },

  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jane Doe",
    roll: "102",
    department: "Mechanical Engineering",
    package: "5 LPA",
    email: "janedoe@email.com",
  },

  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jim Smith",
    roll: "103",
    department: "Electronics Engineering",
    package: "7 LPA",
    email: "jimsmith@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Sarah Johnson",
    roll: "104",
    department: "Civil Engineering",
    package: "6.5 LPA",
    email: "sarahjohnson@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Bob Wilson",
    roll: "105",
    department: "Computer Science",
    package: "5.5 LPA",
    email: "bobwilson@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Emily Davis",
    roll: "106",
    department: "IT Engineering",
    package: "6 LPA",
    email: "emilydavis@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Michael Brown",
    roll: "107",
    department: "IT Engineering",
    package: "7.5 LPA",
    email: "michaelbrown@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jennifer Clark",
    roll: "108",
    department: "Civil Engineering",
    package: "6 LPA",
    email: "jenniferclark@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "William Jones",
    roll: "109",
    department: "Computer Science",
    package: "5.5 LPA",
    email: "williamjones@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Amanda Smith",
    roll: "110",
    department: "Mechanical Engineering",
    package: "6.5 LPA",
    email: "amandasmith@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "David Johnson",
    roll: "111",
    department: "Electronics Engineering",
    package: "7 LPA",
    email: "davidjohnson@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "James Davis",
    roll: "112",
    department: "Civil Engineering",
    package: "6 LPA",
    email: "jamesdavis@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Daniel Wilson",
    roll: "113",
    department: "Computer Science",
    package: "5.5 LPA",
    email: "danielwilson@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Emily Jones",
    roll: "114",
    department: "Mechanical Engineering",
    package: "6.5 LPA",
    email: "emilyjones@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Michael Smith",
    roll: "115",
    department: "Electronics Engineering",
    package: "7 LPA",
    email: "michaelsmith@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jennifer Davis",
    roll: "116",
    department: "Civil Engineering",
    package: "6 LPA",
    email: "jenniferdavis@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "William Clark",
    roll: "117",
    department: "Computer Science",
    package: "5.5 LPA",
    email: "williamclark@email.com",
  },

  {
    cgpa: "8.5",
    company: "TCS",
    name: "John Doe",
    roll: "101",
    department: "Computer Science",
    package: "6 LPA",
    email: "johndoe@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jane Doe",
    roll: "102",
    department: "Mechanical Engineering",
    package: "5 LPA",
    email: "janedoe@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Jim Smith",
    roll: "103",
    department: "Electronics Engineering",
    package: "7 LPA",
    email: "jimsmith@email.com",
  },
  {
    cgpa: "8.5",
    company: "TCS",
    name: "Sarah Johnson",
    roll: "104",
    department: "Civil Engineering",
    package: "6.5 LPA",
    email: "sarahjohnson@email.com",
  },
  // Add more dummy student data as needed
];

const StudentList = () => {
  const [students, setStudents] = useState(data);

  const sortByName = () => {
    const sortedStudents = [...students].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  const sortByDepartment = () => {
    const sortedStudents = [...students].sort((a, b) => {
      if (a.department < b.department) return -1;
      if (a.department > b.department) return 1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  const sortByPackage = () => {
    const sortedStudents = [...students].sort((a, b) => {
      if (a.package < b.package) return -1;
      if (a.package > b.package) return 1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  const filterByDepartment = (e) => {
    const filteredStudents = data.filter(
      (student) => student.department === e.target.value
    );
    setStudents(filteredStudents);
  };
  const optionsf = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Mechanical Engineering", label: "Mechanical " },
    { value: "Electronics Engineering", label: "Electronics " },
    { value: "Civil Engineering", label: "Civil" },
    { value: "IT Engineering", label: "IT" },
    { value: "Electrical Engineering", label: "Electrical" },
  ];
  const optionss = [
    { value: "Name", label: "By Name" },
    { value: "Department", label: "By Department" },
    { value: "Package", label: "By Package" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.main1}>
          <div className={styles.container2}>
            <Select
              onChange={filterByDepartment}
              className={styles.dropdown}
              placeholder={"Filter"}
              options={optionsf}
            ></Select>
            <Select
              className={styles.dropdown}
              placeholder={"Sort"}
              options={optionss}
              onChange={sortByName}
            ></Select>
          </div>
          <div className={styles.container3}>
            <TableScrollbar>
              <table className={styles.table} scro>
                <thead className={styles.thead}>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Roll No.</th>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>CGPA</th>
                    <th className={styles.th}>Department</th>
                    <th className={styles.th}>Company</th>
                    <th className={styles.th}>Package</th>
                    <th className={styles.th}>Email</th>
                  </tr>
                </thead>
                <tbody className={styles.tbody}>
                  {students.map((student) => (
                    <tr key={student.roll}>
                      <td className={styles.td}>{student.roll}</td>
                      <td className={styles.td}>{student.name}</td>
                      <td className={styles.td}>{student.cgpa}</td>
                      <td className={styles.td}>{student.department}</td>
                      <td className={styles.td}>{student.company}</td>
                      <td className={styles.td}>{student.package}</td>
                      <td className={styles.td}>{student.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableScrollbar>
          </div>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.main2}>
          <div className={styles.dp}>
            <Image
              alt=""
              src={"/dp.jpg"}
              width={150}
              height={150}
              className={styles.img}
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <h1 className={styles.h1}>John Doe</h1>
          <p className={styles.p}>91+ 6969696969</p>
          <p className={styles.p}>roma@gmail.com</p>
          <div className={styles.card}>
            <p className={styles.p1}>Company</p>
            <p className={styles.p2}>TCS</p>
          </div>
          <div className={styles.card}>
            <p className={styles.p1}>Department</p>
            <p className={styles.p2}>CS</p>
          </div>
          <div className={styles.card}>
            <p className={styles.p1}>CGPA</p>
            <p className={styles.p2}>6.5</p>
          </div>
          <div className={styles.card}>
            <p className={styles.p1}>Package</p>
            <p className={styles.p2}>7 LPA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;

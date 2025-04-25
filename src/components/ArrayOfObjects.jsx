import React from 'react'

function ArrayOfObjects() {
    const Data = [
        { id: 1,
          name: 'John Doe',
          Position: 'Software Engineer',
          Salary: 100000,},
        { id: 2,
          name: 'Jane Doe',
          Position: 'Product Manager',
          Salary: 120000,},
        { id: 3, 
          name: 'Bob Smith',
          Position: 'Designer',
          Salary: 90000,},
        { id: 4, 
          name: 'Alice Johnson',
          Position: 'Data Scientist',
          Salary: 110000,},
        { id: 5, 
          name: 'Charlie Brown',
          Position: 'Marketing Manager',
          Salary: 95000,},
        { id: 6, 
          name: 'David Wilson',
          Position: 'Sales Representative',
          Salary: 85000,},
        { id: 7, 
          name: 'Eve Davis',
          Position: 'HR Manager',
          Salary: 105000,},
        { id: 8, 
          name: 'Frank Miller',
          Position: 'Business Analyst',
          Salary: 98000,},
        { id: 9, 
          name: 'Grace Lee',
          Position: 'UX/UI Designer',
          Salary: 92000,},
        { id: 10, 
          name: 'Henry Taylor',
          Position: 'DevOps Engineer',
          Salary: 115000,},]
  return (
    <div>
          <h1>=======Rendering array of objects using map =========</h1>
        <div className="grid">
          {Data.map((item) => (
            <div className="card grid-item" key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.Position}</p>
              <p>${item.Salary}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ArrayOfObjects
import React from 'react'
import Table from 'react-bootstrap/Table';
import { dataa } from './tabledata';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import Pagination from './Pagination';

const Tables = () => {
const[data, setdata]= useState([
    {
        id:1,    
        name:"rishi",
        age:20,
        position:"mager",
        salary:19000,
        },
        {
            id:2,
        name:"rishiw",
        age:20,
        position:"junior developer",
        salary:81000,
        },
        {
            id:3,    
        name:"rishie",
        age:20,
        position:"mager",
        salary:19000,
        },
        {
            id:4,    
        name:"rishiqw",
        age:18,
        position:"junior developer",
        salary:2700,
        },
        {
            id:5,    
        name:"wdrishi",
        age:30,
        position:"HR",
        salary:610,
        },
        {
            id:6,
        name:"adwrishi",
        age:29,
        position:"mager",
        salary:3020,
        },
        {
            id:7,    
        name:"rishimr",
        age:24,
        position:"junior developer",
        salary:200,
        },
        {
        id:8,        
        name:"iskar",
        age:24,
        position:"junior developer",
        salary:40000,
        },
        {
        id:9,        
        name:"rishi",
        age:20,
        position:"mager",
        salary:19000,
        },
        {
        id:10,    
        name:"rishiw",
        age:20,
        position:"junior developer",
        salary:81000,
        },
        {
        id:11,    
        name:"rishie",
        age:23,
        position:"HR",
        salary:19200,
        },
        {
        id:12,    
        name:"rishiqw",
        age:18,
        position:"junior developer",
        salary:2700,
        },
        {
        id:13,    
        name:"wdrishi",
        age:30,
        position:"HR",
        salary:610,
        },
        {
        id:14,    
        name:"adwrishi",
        age:29,
        position:"manager",
        salary:3020,
        },
        {
        id:15,    
        name:"boman",
        age:24,
        position:"junior developer",
        salary:200, 
        },
        {
        id:16,    
        name:"aman",
        age:18,
        position:"junior developer",
        salary:2700,
        },
        {
        id:17,    
        name:"wdrishi",
        age:30,
        position:"HR",
        salary:610,
        },
        {
        id:18,    
        name:"adwrishi",
        age:30,
        position:"mager",
        salary:3020,
        },
        {
        id:19,
        name:"rishimr",
        age:22,
        position:"junior developer",
        salary:200,
        }    
])

    const[showPerPage, setShowPerPage] = useState(5);
    const[Pagination, setPagination] = useState({start: 0, end: showPerPage});

    const onPaginationChange = (start, end) => {
        setPagination({start:start, end:end})
    };
    return (
        <Container>
            <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-end">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </nav>
            <Table striped bordered hover>
                <thead>
                   <tr className='text-center'>
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Salary</th> 
                    </tr>
                </thead>
                <tbody>
                {
                data.slice(Pagination.start, Pagination.end).map((data, i) =>
                   <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.position}</td>
                        <td>{data.salary}</td>
                    </tr>
                )
                }
                </tbody>
            </Table>
            <div>
            {/* <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/> */}
            <Pagination showPerPage={showPerPage}/>
            </div>
        </Container>
    )
}
export default Tables;
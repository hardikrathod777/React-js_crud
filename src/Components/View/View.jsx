import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import custom from '../../assets/No face mask no entry-bro.svg'

function View({ViewData , HandleEdit , HandleDelete}){
    return(
        <>
        {
            ViewData.length > 0 ?
            <Container className='mt-5'>
                <div className='row'>
                    <div className='col-xxl-12'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Phone No.</th>
                                <th>E-mail</th>
                                <th>Age</th>
                                <th>Number Of People</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ViewData.map((data,index)=>{
                                    return (
                                        <tr key={data.id}>
                                            <td>{index+1}</td>
                                            <td>{data.fname}</td>
                                            <td>{data.lname}</td>
                                            <td>{data.addr}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.email}</td>
                                            <td>{data.age}</td>
                                            <td>{data.people}</td>
                                            <td>
                                                <Button variant='primary' onClick={()=>HandleEdit(data.id)}>Edit</Button>||
                                                <Button variant='primary' onClick={()=>HandleDelete(data.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            :
            <Container className='mt-5'>
                <div className='row'>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <h3>No Customer Today.</h3>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='col-xxl-4'>
                            <img src={custom} />
                        </div>
                    </div>
                </div>
            </Container>
            }
        </>
    )
}

export default View;
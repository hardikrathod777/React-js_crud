import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form/Forms'
import View from './Components/View/View'
import generateUniqueId from 'generate-unique-id';
import getData from './utils/helper'
function App() {

  const [InputText, setInputText]= useState({
    id:'',
    fname:'',
    lname:'',
    addr:'',
    phone:'',
    email:'',
    age:'',
    people:''
  })

  const [viewData,setViewData] = useState(getData());

  const HandleInput =(e)=>{
    let name= e.target.name;
    let value= e.target.value
    setInputText({...InputText, [name]:value});
  }

  const HandleEdit = (id) =>{
    const recordToEdit = viewData.find(record => record.id === id);

    if (recordToEdit) {
        setInputText({
            id: recordToEdit.id,
            fname: recordToEdit.fname,
            lname: recordToEdit.lname,
            addr: recordToEdit.addr,
            phone: recordToEdit.phone,
            email: recordToEdit.email,
            age: recordToEdit.age,
            people: recordToEdit.people
        });
    } else {
        console.log("Record not found"); 
    }
  }

  const HandleSubmit = (e) =>{
    e.preventDefault();

    if(InputText.id){
      let records = [...viewData];

      let UpdatedData = records.map((record)=>{
        if(record.id=== InputText.id){
          return record = InputText;
        }
        else{
          return record;
        }
      })

      setViewData(UpdatedData);
    }
    else{
      let obj = {
        ...InputText
      }

      obj.id = generateUniqueId({ length: 4 });
      setViewData([...viewData,obj]);
    }

    setInputText({
        id:'',
        fname:'',
        lname:'',
        addr:'',
        phone:'',
        email:'',
        age:'',
        people:''
      }
    )
  }

  const HandleDelete = (id) => {

    let records = [...viewData];
    let deletedRecord = records.filter((record)=> record.id !== id);
    setViewData(deletedRecord);
  }

  useEffect( ()=>{
    localStorage.setItem('datas',JSON.stringify(viewData));
  },[viewData])


  return (
    <>
      <Form InputText={InputText} HandleInput={HandleInput} HandleSubmit={HandleSubmit} />
      <View ViewData={viewData} HandleDelete={HandleDelete} HandleEdit={HandleEdit}/>
    </>
  )
}

export default App

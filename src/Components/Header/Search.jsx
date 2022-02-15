import React from 'react'
import { Form,Button} from 'react-bootstrap';
import {FiSearch} from 'react-icons/fi';
import './HeaderStyle.css';
import {  useDispatch } from 'react-redux';

function Search() {
  const dispatch=useDispatch();
  const SearchNow=()=>{

    dispatch({
      type:'Search',
      searchData:document.getElementById('TextInput').value
     })
//console.log(document.getElementById('TextInput').value)
  }

  return (
    <Form className='col-12'>
    <fieldset  >
      <Form.Group className="mb-2 d-flex mt-2">
      
        <Form.Control id="TextInput" placeholder="Search Here" className='SearchInput' onKeyUp={ SearchNow}/>
        <Button type="button"  className='SearchButton' variant="success" onClick={ SearchNow }><FiSearch/></Button>
      </Form.Group>
     
     
    </fieldset>
  </Form>
  )
}

export default Search

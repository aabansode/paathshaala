import React from 'react';
import {openTab} from '../../../utils/helpers';
import { Link } from 'react-router-dom';

class CounsellorList extends React.Component {

  componentDidMount() {

  }

  render() {

    return (

<div class="container-fluid">
<br /><br />
	<div class="page-header">
    <Link to="/Counsellor_form" class="btn btn-primary"> Add Counsellor </Link>&nbsp;
    <a href="#" class="btn btn-primary">Search Counsellor</a>&nbsp;
    <Link to="/Counsellor_list" class="btn btn-primary">All Counsellor</Link>&nbsp;
	</div>
<br /><br />
    
       <div class="table">        
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Aadhar ID</th>
          <th>Details</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mick Lee</td>
          <td>mick@paathshaala.com</td>
          <td>98563451982</td>
          <td><a href="#" >Details</a></td> 
          <td><i class="fa fa-pencil" routerLink="#"></i></td>
          <td><i class="fa fa-trash" routerLink="#"></i></td>
        </tr>
      </tbody>
    </table>
    
  </div>
 	</div>//main

    );//return
  }//render
}//CounsellorList

export default CounsellorList;

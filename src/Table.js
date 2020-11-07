import React,{Component, Fragment} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo/logo.svg'
import './App.css';
import plus from './logo/plus.svg'
class Table extends Component {
 
    render() { 
        return ( 
            <Fragment>
            <header id='header'>
            <span id ='transport'><Link to='/' style={{textDecoration :'none',color :'white'}}>Transportation</Link> </span> </header>
            <div className="App container ">
            <button  className='add-transport'><img src ={plus} className ='plus'></img><span className ='add-transport-name'>
            <Link to='/data' style={{textDecoration :'none',color :'white'}}>Add Transportation</Link>
            </span> </button>
            <table className="table table-striped table">
        <thead>
          <tr className ='tableHeader'>
            <th scope="col"><input type="checkbox"></input></th>
            <th scope="col">Company ID #</th>
            <th scope="col">Company Name</th>
            <th scope="col">Total Fleet</th>
            <th scope="col"><img src={logo} ></img></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><input type="checkbox"></input></th>
            <td></td>
            <td></td>
            <td></td>
            <td><button className='Edit '><span className='editword'><Link to='/data' style={{textDecoration :'none',color :'white'}}>Edit </Link></span></button></td>
          </tr>
        </tbody>
      </table>
            </div>
            </Fragment>
         );
    }
}
 
export default Table;
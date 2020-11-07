import React,{Fragment ,useState ,useEffect} from 'react'
 import './DataStyle.css'
import { Link } from 'react-router-dom';
const Data =() =>{
  useEffect(()=>{
    fetchItems(),
    fetchItems2(),
    fetchItems3()
},[])
  const  [items ,setitems] =useState([])
  const  [items2 ,setitems2] =useState([])
  const  [items3 ,setitems3] =useState([])

  const fetchItems =async ()=>{
    const data = await fetch('http://23.254.228.118:8080/API/api/Lookup/GetCountries')
    const items = await data.json()
    console.log(items.Data)
    setitems(items.Data)
}
const fetchItems2 =async ()=>{
  const data = await fetch('http://23.254.228.118:8080/API/api/Lookup/GetCities?countryId=1')
  const items2 = await data.json()
  console.log(items2.Data)
  setitems2(items2.Data)
}
const fetchItems3 =async ()=>{
  const data = await fetch('http://23.254.228.118:8080/API/api/Lookup/GetVehicleType')
  const items3 = await data.json()
  console.log(items3.Data)
  setitems3(items3.Data)
}
        return (  
            <Fragment>
            <header id='header'>
            <span id ='transport'><Link to='/' style={{textDecoration :'none' ,color :'white'}}>Transportation</Link> </span> </header>
            <div className ='container-fluid'>
            <form >
            <div className="form-row mt-5 form-block">
            <label  className = 'form-group col-md-12 block-header'>Company Data</label>
              <div className="form-group col-md-2">
                <label >Company ID #</label>
                <input type="number" className="form-control"  />
              </div>
              <div className="form-group col-md-2">
                <label >Company Address</label>
                <input type="text" className="form-control"  />
              </div>
              <div className="form-group col-md-2">
                <label >Country</label>
                <select className="form-control">
                
                {items.map(item=>( 
                  <option key={item.ID}>{item.Value} </option>
                ))}
                <option>Choose ...</option>

                </select>
              </div>
              <div className="form-group col-md-2">
              <label >City</label>
              <select  className="form-control">
              {items2.map(item =>(
                <option key={item.ID} value>{item.Value}</option>
              ))}
                <option>Choose ...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label id="comp-tele">Company Telephone number</label>
              <input type="number" className="form-control"  />
            </div>
            <div className="form-group col-md-2"></div>
            <div className="form-group col-md-2">
            <label >Contact Person Name</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group col-md-2">
            <label >Contact Person Tele. Num</label>
            <input type="number" className="form-control"  />
          </div>
          <div className="form-group col-md-2">
          <label >Contact Person Email</label>
          <input type="email" className="form-control"  />
        </div>
            </div>
            <div className="form-row mt-5 form-block">
            <label  className = 'form-group col-md-12 block-header'>Bus 1 Data</label>
              <div className="form-group col-md-2">
                <label >Vehicle Type 1</label>
                <select  className="form-control">
                {items3.map(item=>( 
                  <option key={item.ID}>{item.Value} </option>
                ))}
                <option>Choose ...</option>
              </select>
              </div>
              <div className="form-group col-md-2">
                <label >Brand</label>
                <input type="text" className="form-control"  />
              </div>
              <div className="form-group col-md-2">
                <label >Year Model</label>
                <select className="form-control">
                  <option value>Choose... </option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-4">
              <label >Description</label>
              <input type="text" className="form-control"  />

            </div>
            <div className="form-group col-md-2"></div>

            <div className="form-group col-md-2">
              <label id="comp-tele">Total Number of Seats</label>
              <input type="number" className="form-control"  />
            </div>
            <div className="form-group col-md-2">
            <label >Number of Seats per Row</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group col-md-2">
            <label >Total Num. of Buses</label>
            <input type="number" className="form-control"  />
          </div>
          <div className="form-group col-md-2" >
          </div>
        <div className="form-group col-md-6">
        <label >Notes</label>
        <input type="number" className="form-control"  />
        <br />
        <button  className='add'>Add</button>
      </div>
      </div> 
      <br/>

      
      <div className="form-row mt-5 form-block">
      <label  className = 'form-group col-md-12 block-header'>Bus 2 Data</label>
        <div className="form-group col-md-2">
          <label >Vehicle Type 1</label>
          <select  className="form-control">
          {items3.map(item=>( 
            <option key={item.ID}>{item.Value} </option>
          ))}
          <option>Choose ...</option>
        </select>
        </div>
        <div className="form-group col-md-2">
          <label >Brand</label>
          <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-2">
          <label >Year Model</label>
          <select className="form-control">
            <option value>Choose... </option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-4">
        <label >Description</label>
        <input type="text" className="form-control"  />
      </div>
      <div className="form-group col-md-2"></div>
      <div className="form-group col-md-2">
        <label id="comp-tele">Total Number of Seats</label>
        <input type="number" className="form-control"  />
      </div>
      <div className="form-group col-md-2">
      <label >Number of Seats per Row</label>
      <input type="text" className="form-control"  />
    </div>
    <div className="form-group col-md-2">
      <label >Total Num. of Buses</label>
      <input type="number" className="form-control"  />
    </div>
    <div className="form-group col-md-2" >
    </div>
  <div className="form-group col-md-6">
  <label >Notes</label>
  <input type="number" className="form-control"  />
  <br />
  <button  className='add'>Remove</button>
  <button  className='add'>Add</button>
        </div>
         </div>
          </form>
          </div>
          </Fragment>
        );
    }
export default Data;
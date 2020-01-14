import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getVisitorsThunk,removeVisitorsThunk} from '../../thunk';
import {updateVisitors} from '../../actions'
import Button from '../../components/Button';


const VisitorsTable = ({visitors,getVisitors,removeVisitor,updatedVisitors}) =>{
  useEffect(()=>{
            getVisitors()
        },[visitors])

  const deleteVisitor = (id)=>{
    removeVisitor(id)
  }

  const update =(id) =>{
    updatedVisitors(id)
    getVisitors()
  }
    return(
      <div className="books_info">
         <table>
           <thead>
           <tr>
                <th>#</th>
                <th>Person Name</th>
                <th>Person ID</th>
                <th>Date</th>
                <th>Card Number</th>
                <th>Edit</th>
                <th>Delete</th>
           </tr>
           </thead>
            <tbody>
            {visitors.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td> {e.personName} </td>
                <td> {e.personId} </td>
                <td> {e.createdDate} </td>
                <td> {e.cardNumber} </td>
                <td><Button name={'edit'} onClick={()=>update(e.id)} /></td>
                <td><Button name={'delete'} onClick={()=>deleteVisitor(e.id)} /></td>
              </tr>
            })}
            </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = ({visitorsPage}) =>{
  return{
     visitors : visitorsPage.visitors,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      getVisitors : () =>{
          dispatch(getVisitorsThunk())
      },
      removeVisitor : (id) =>{
        dispatch(removeVisitorsThunk(id))
    },
    updatedVisitors : (id)=>{
      dispatch(updateVisitors(id))
    }
  }
}

export default React.memo(connect(mapStateToProps,mapDispatchToProps)(VisitorsTable))  ;
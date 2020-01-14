import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Input from '../../components/input';
import Button from '../../components/Button';
import {postVisitorsThunk,updateVisitorsThunk,getVisitorsThunk} from '../../thunk';
import {createVisitors,resetViisitors} from '../../actions';
import {personDataExample} from '../../constant/constant'


const CreateVisitors = ({personData,handleVisitors,postVisitors,udpateVisitors,getVisitors,resetVisitorsInput}) =>{

  const {personName,personId,cardNumber,createdDate,id} = personData;
  
  const handleInputs = (e) =>{
     handleVisitors(e,personData)
  }

  const handleSubmit = () =>{
    postVisitors(personData)
    getVisitors()
    resetVisitorsInput(personDataExample)
  }

  const update = (id,personData) =>{
    udpateVisitors(id,personData)
    getVisitors()
    resetVisitorsInput(personDataExample)
  }

    return (
        <div className='create_book'>
          <p>Add New Person</p>
          <div className="imput_books">
          <Input span={"Person Name"} name="personName" className={"input_all"} value={personName} onChange={handleInputs} />
          <Input span={"Person ID"} name='personId' className={"input_all"} value={personId} onChange={handleInputs}/>
          <Input span={"Card Number"} name='cardNumber' className={"input_all"} value={cardNumber} onChange={handleInputs}/>
          <Input span={"Date"} type={'date'} name='createdDate' className={"input_all"} value={createdDate} onChange={handleInputs}/>
          <Button myClassName={"button_all"} name={ id ? 'Update' : 'Save'} onClick={ ()=>{return id ? update(id,personData) : handleSubmit() } }/>
          </div>
        </div>
    )
}

const mapStateToProps = ({visitorsPage}) =>{
  return{
     visitors : visitorsPage.visitors,
     personData : visitorsPage.personData
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    
      handleVisitors : (event, personData) =>{
          dispatch(createVisitors(event,personData))
      },
      postVisitors : (data) =>{
          dispatch(postVisitorsThunk(data))
      },
      udpateVisitors : (id,data) =>{
          dispatch(updateVisitorsThunk(id,data))
      },
      getVisitors : ()=>{
        dispatch(getVisitorsThunk())
      },
      resetVisitorsInput : (data) =>{
        dispatch(resetViisitors(data))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateVisitors);

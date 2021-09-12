import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

import './index.css'

const PersonDetailsItem = props => {
    const {personData, deletePersonDetails} = props
    const {id, name, email, role} = personData

    const onDeletePersonDetails = () => {
        deletePersonDetails(id)
    }

    return(
        <>
        <div className="person-details-container">
           <p className="names">{name}</p>
           <p className="names">{email}</p>
           <p className="names">{role}</p>
           <div className="button-container">
               <button className="delete-button">
                   <BiEdit />
               </button>
               <button className="delete-button" onClick={onDeletePersonDetails}>
                   <AiFillDelete />
               </button>
           </div>
        </div>
        </>
    )
}

export default PersonDetailsItem
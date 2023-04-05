
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) { 
    return (
    <Card>
        
            <div className='num-display'>{item.rating}</div>
            <button className="close">
                <FaTimes />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedbackItem.PropTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem
import {v4 as uuidv4} from 'uuid'
import { createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children }) => {
    const [feedback, setFeedback] = useState ([

    {
        id: 1,
        text: "This is from context.",
        rating: 10
    }
])

const [feedbackEdit, setFeedbackEdit] = useState ({
    item: {},
    edit: false,
})

// add feedback item- function
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    //current feedback items-spread operator, all objects in feedback into an array

}

//delete feedback item- function
const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        setFeedback(feedback.filter((thisItem) => thisItem.id !== id))
    }
}

//edit feedback item- function
const editFeedback = (item) => {
    setFeedbackEdit( {
        item,
        edit: true
    })
}

//update feedback item- function 
const updateFeedback = (id, updItem) => {
    setFeedback(
        feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )} 


return <FeedbackContext.Provider value = {{ 
    feedback,
    feedbackEdit, //the piece of state that holds the item in the boolean
    deleteFeedback,
    addFeedback,
    editFeedback, //the function that runs when we click
    updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
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

return <FeedbackContext.Provider value = {{ 
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback, //the function that runs when we click
    feedbackEdit //the piece of state that holds the item in the boolean
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
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

const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    //current feedback items-spread operator, all objects in feedback into an array

}

const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        setFeedback(feedback.filter((thisItem) => thisItem.id !== id))
    }
}

return <FeedbackContext.Provider value = {{ 
    feedback,
    deleteFeedback,
    addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
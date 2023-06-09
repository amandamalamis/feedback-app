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

const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        setFeedback(feedback.filter((thisItem) => thisItem.id !== id))
    }
}
    return <FeedbackContext.Provider value = {{ 
feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
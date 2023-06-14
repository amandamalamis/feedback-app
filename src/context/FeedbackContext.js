import { createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children }) => {
    const [isLoading, setIsLoading] = useState(true) //state isLoading, set to useState = true until we make a request, then set to false
    const [feedback, setFeedback] = useState ([])
    const [feedbackEdit, setFeedbackEdit] = useState ({
        item: {},
        edit: false,
    })

// fetch feedback
useEffect(() => {
    fetchFeedback() 
},  [])


const fetchFeedback = async () => {
    const response =  await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
}

// add feedback item- function
const addFeedback = async(newFeedback) => {

    const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback),
    }) 
    
    const data= await response.json() //will get the new item that was added

    setFeedback([data, ...feedback])
    //current feedback items-spread operator, all objects in feedback into an array
}

//delete feedback item- function
const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        await fetch(`/feedback/${id}`, { method: 'DELETE' }) //deletes from backend with json server
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
const updateFeedback = async (id, updItem) => {
    const response =  await fetch (`/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem)
    })

    const data = await response.json()
    
    setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    
    setFeedbackEdit({
        item: {},
        edit: false,
      })
    } 

return <FeedbackContext.Provider value = {{ 
    feedback,
    feedbackEdit, //the piece of state that holds the item in the boolean
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback, //the function that runs when we click
    updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
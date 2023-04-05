import {v4 as uuidv4} from 'uuid'
import {BrowserRouter} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

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

    return (
        <Router>
        <Header />
            <div className='container'>
                <Route path='/'> 
                <FeedbackForm/>
                <FeedbackStats feedback= {feedback} />
                <FeedbackList 
                feedback={feedback} 
                handleDelete={deleteFeedback} 
                />
                </Route>
                <Route path='/about' component={AboutPage} />
                </div>
            </Router>
    )
}

export default App
import './App.css'
import Navbar from './Navbar'
import data from './data'
import MainContext from './MainContext'

function App() {

  const blogPost = data.map(item => {
    return(
    <MainContext 
      title={item.title}
      location={item.location}
      startDate={item.startDate}
      endDate={item.endDate}
      map={item.googleMapsUrl}
      description={item.description}
      imageUrl={item.imageUrl}
    />
    )
  })


  return(
    <div className="dad">
      <Navbar />
      {blogPost}
    </div>
  )
}

export default App

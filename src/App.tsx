import Introduction from './Introduction.tsx'
import Projects from './Projects.tsx'

/**
 * Contains the main code for the site, split up into components.
 *
*/
function App() {

  return (<div className='w-screen dark:bg-gray-800'>
    {/* Nav Bar */}
    <Introduction />

    <Projects />
    
    </div>
  )
}

export default App

import { Button } from "flowbite-react"
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";


/**
 * Contains the footer
 *
 * @returns footer components
*/
function Footer() {

    return (<>
        <main className=' flex h-auto items-center justify-center p-5 '>

        {/* Rounded box around elements. */}
        <div className='rounded-lg bg-slate-700 p-10 text-center shadow-md'>

            {/* Title */}
            <h1 className="text-center text-4xl font-bold tracking-tight dark:text-slate-50">
                Contact
            </h1>

            {/* Divider */}
            <div className="mt-4" />
            <hr className='m-8' />
                
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-2">
                <Button 
                    size="xl"
                    outline gradientDuoTone="pinkToOrange" 
                    onMouseDown={(e: { button: number; }) => { if (e.button === 0 || e.button === 1) window.open('https://github.com/Eli-Parker') }} 
                    style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <IoLogoGithub className='m-1' />
                    GitHub
                </Button>
                <Button 
                    size="xl" 
                    outline gradientDuoTone="pinkToOrange"
                    onMouseDown={(e: { button: number; }) => { if (e.button === 0 || e.button === 1) window.open('mailto:EliParkDev@icloud.com') }}
                    style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <IoMail className='m-1' />
                    EliParkDev@icloud.com
                </Button>
                <Button 
                    size="xl"
                    outline gradientDuoTone="pinkToOrange"
                    onMouseDown={(e: { button: number; }) => { if (e.button === 0 || e.button === 1) window.open('https://www.linkedin.com/in/eli-parker-a96338302/') }}
                    style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <IoLogoLinkedin className='m-1' />
                    LinkedIn
                </Button>
            </div>
        </div>
        </main>
    
              
        </>
    )
  }
  
  export default Footer
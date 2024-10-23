import { TypeAnimation } from 'react-type-animation';
import { Button } from "flowbite-react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

/**
 * Contains the introduction, including my name,
 * title, and a slick animation with changing text!
 */
export default function Introduction()
{
    // Color for type text animation
    const animTextColor = 'skyblue'

    // Titles for the type animation
    const titles = [
        ' a Skilled Developer',
        2000,
        ' a Fast Learner',
        2000,
        ' a Team Player',
        2000,
        ' a Software Engineer',
        2000,
        ' Creative',
        2000,
        ' a Thinker',
        2000,
        ' A C# Developer',
        2000,
        ' Sociable',
        2000,
        ' Capable',
        2000,
        ' Learning React',
        2000,
        ' Adept',
        2000,
    ]

    // Return component
    return (
        <div className='container flex h-screen items-center justify-center'>
        <div className='text-center'>

            {/* Title and Type animation */}
            <div style={{ fontSize: '2em' }}>
                <h2 className='dark: text-slate-50'>Eli Parker is
                    <TypeAnimation
                        sequence={titles}
                        wrapper="span"
                        speed={60}
                        style={{ color: animTextColor }}
                        repeat={Infinity}
                    />
                </h2>
            </div>

            <hr className='m-8' />    

                {/* Social Media Links */}
                <Button.Group>
                    <Button color="gray" onMouseDown={(e: { button: number; }) => { if (e.button === 0 || e.button === 1) window.open('https://github.com/Eli-Parker') }} style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <IoLogoGithub className='m-1' />
                        GitHub
                    </Button>
                    <Button color="gray" onMouseDown={(e: { button: number; }) => { if (e.button === 0 || e.button === 1) window.open('https://www.linkedin.com/in/eli-parker-a96338302/') }} style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <IoLogoLinkedin className='m-1' />
                        LinkedIn
                    </Button>
                    <Button color="gray" onMouseDown={(e: { button: number; }) => { if (e.button === 0 || e.button === 1) window.open('mailto:EliParkDev@icloud.com') }} style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <IoMail className='m-1' />
                        Email
                    </Button>
                </Button.Group>
            </div>
            </div>
    )
}
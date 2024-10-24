import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function Resume()
{

    return (
        <main className=' flex h-auto items-center justify-center p-5 '>

            {/* Rounded box around elements. */}
            <div className='rounded-lg bg-slate-700 p-10 text-center shadow-md'>

                {/* Title */}
                <h1 className="text-center text-4xl font-bold tracking-tight dark:text-slate-50">
                    My Resume
                </h1>

                {/* Divider */}

                <div className="mt-4" />
                <hr className='m-8' />
                    
                {/* Resume File */}

                <iframe src="../src/Data/resume.pdf" height="600" width="600" />


            </div>
        </main>
    )
}
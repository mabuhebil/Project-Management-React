
import NoProjectImage from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelected(){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={NoProjectImage} className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>
                No Project Selected 
            </h2>
            <p className='text-stone-400 mb-4'>
                Select aproject or get Started with anew one
            </p>
            <p className='mt-8'>
                <Button>
                    Create New Project
                </Button>
            </p>
        </div>
    )
}
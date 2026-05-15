
type Props = {
    heading:string
    element: any
}

export default function Header(heading:Props){
    return (
        <div className="flex text-2xl gap-5 place-items-center w-full max-sm:w-[87%] h-[7%] px-3 place-self-end text-white mt-1">
            <h1 className="bg-linear-to-tr from-blue-600/60  to-green-900/60 max-sm:text-lg  rounded-lg p-1 px-2"> {heading.heading}</h1>

            <div className="flex  justify-end text-sm w-full sm:gap-4">
                
                {heading.element}

            </div>

            
        </div>
    )
}
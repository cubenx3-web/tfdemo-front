
type Props = {
    heading:string
}

export default function Header(heading:Props){
    return (
        <div className="flex text-2xl place-items-center w-[95%] max-sm:w-[87%] h-[7%] px-3 place-self-end text-white mt-1">
            <h1 className="bg-linear-to-tr from-blue-600/60  to-green-900/60  rounded-lg p-1 px-3"> {heading.heading}</h1>
        </div>
    )
}
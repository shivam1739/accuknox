import Image from "next/image"

const NoGraphDataPlaceholder = () => {
    return (

        <div className="flex w-full gap-5 flex-col items-center justify-center  p-4">
            <div className=" h-12 rounded-full mt-4">
                <Image width={60} height={60} src="/pngwing.com.png" />
            </div>
            <p className="text-gray-500">No Graph data available!</p>
        </div>

    )
}

export default NoGraphDataPlaceholder
import Link from "next/link"
import { HiArrowUturnLeft } from "react-icons/hi2"

function StudioNavbar(props: any) {
    return (
        <div className="bg-gray-950">
            <div>
                <Link href={"/"}>
                    <button className="text-yellow-400 flex items-center gap-5 text-xl p-5">
                        <HiArrowUturnLeft />Go to the website
                    </button>
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
            studio
        </div>
    )
}

export default StudioNavbar
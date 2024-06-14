import Image from "next/image"
import Button from "./Button"
import Link from "next/link"


const Navbar = () => {
    return(
        <div className="fixed top-0 w-full h-18 px-4 border-b shaddow-sm bg-white flex items-center z-30">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between pl-10">
                <Image 
                    src="/jumbly-logo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                />
            <Link href="/sign-in">
            <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full pr-20">
                <Button 
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
                />
            </div>
            </Link>

            </div>
        </div>
    )
}

export default Navbar
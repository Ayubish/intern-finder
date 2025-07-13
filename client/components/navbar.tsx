import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
    return (
        <div className="px-10 py-5 border-b-[1px] border-gray-300 flex items-center">
            <Image src="/Interno.png" alt="Interno" width={140} height={140} className="object-contain" />
            <div className="flex gap-10 items-center">
                <Link href="/listing">
                    Internships
                </Link>
                <Link href="/listing">
                    Companies
                </Link>
                <Link href="/listing">
                    About Interno
                </Link>
                <div className="flex gap-5">
                    <Button variant="link">
                        Log In
                    </Button>
                    <Button>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function CompanySignUp() {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 p-10 min-h-full flex flex-col ">
                <h2 className="text-2xl font-semibold">Sign Up to Interno</h2>
                <p>Fill out the information to create an account</p>
                <form className="w-7/10 flex flex-col gap-5 py-10">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" placeholder="Enter email" />
                    </div>

                    <Button>Sign Up</Button>

                </form>
            </div>
            <div className="w-1/2 min-h-full flex flex-col justify-center items-center bg-primary/10 text-center p-10">
                <p className="py-10 text-4xl font-semibold">Find your dream internship with top companies worldwide. Launch your career today!</p>
                <Image src="/meeting.png" alt="meeting" width={500} height={500} className="w-lg px-10 object-contain" />
            </div>
        </div>
    )
}
"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Link from "next/link";

export default function CTASection() {
    const router = useRouter();

    return (
        <div className="relative border-glowing-animation bg-blue-100  text-gray-700 py-12 px-6 md:px-10 my-28 rounded-lg">

            {/* Main Content */}
            <div className="relative mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-5">
                    You have an idea? Get it to the <span className="underline-custom">market!</span>
                </h2>
                <div className="flex max-sm:flex-col justify-center items-center gap-5">
                    <Link href={'/contact'} className="text-blue-600">
                        <Button variant="primary" className="!rounded-full">Connect with us</Button>
                    </Link>
                    <Link href={'/services'} className="text-blue-600">
                        <Button variant="outline" className="!rounded-full">Learn More</Button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

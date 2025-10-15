import Link from "next/link";
import {auth} from "@/app/_lib/auth";
import Image from "next/image";

export default async function Navigation() {
    const session=await auth()
    console.log(session)
    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link href="/cabins" className="hover:text-accent-400 transition-colors">
                        Cabins
                    </Link>
                </li>
                <li>

                    <Link href="/about" className="hover:text-accent-400 transition-colors">
                        About
                    </Link>
                </li>
                <li>
                    {session?.user?.image ?(
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center justify-center gap-3 relative"
                        >
                                <Image className="rounded-full object-cover"
                                       src={session.user.image} height={32} width={32}
                                       alt={session.user.name} referrerPolicy="no-referrer" />
                                <span> Guest area</span>
                        </Link>
                        ):(
                        <Link
                        href="/account"
                        className="hover:text-accent-400 transition-colors"
                        >
                        Guest area
                        </Link>
                        )}

                </li>
            </ul>
        </nav>
    );
}

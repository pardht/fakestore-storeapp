import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaSquareInstagram, FaSquarePinterest, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="border-[1px] rounded-[10px] flex flex-col md:flex-row  ">
            <div className="flex-1 p-5 flex flex-col justify-between">
                <p className="text-black text-sm pb-20">
                    Have questions or feedback? Reach out to us,
                    we're here to help. Your thoughts and suggestions
                    are always welcome!
                </p>
                <div className="flex gap-3 opacity-50 items-center">
                    <FaFacebookSquare size={25} />
                    <FaSquareInstagram size={25} />
                    <FaSquarePinterest size={25} />
                    <FaXTwitter size={20} />
                    <FaTiktok size={20} />
                </div>
            </div>
            <div className="flex-1 p-5 flex flex-col items-between border-t-[1px] md:border-t-0 md:border-l-[1px]">
                <p className='font-semibold pb-3'>Company</p>
                <ul className="font-medium text-zinc-500 text-sm pb-20 space-y-2">
                    <li>
                        <Link href="/" className="hover:text-[#06D6A0] duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[#06D6A0] duration-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/product" className="hover:text-[#06D6A0] duration-200">
                            Product
                        </Link>
                    </li>
                </ul>
               
            </div>

            <div className="flex-1  p-5 flex flex-col justify-between border-t-[1px] md:border-t-0 md:border-l-[1px]">
                <p className="font-black text-xl pb-20">Rilstore.</p>
                <p className="opacity-50 tracking-wide text-sm font-light">Copyright © 2025 Rilstore. All rights reserved.</p>
            </div>
        </footer>
    )
}

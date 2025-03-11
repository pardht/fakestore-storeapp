import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaTiktok } from 'react-icons/fa'
import { FaSquareInstagram, FaSquarePinterest, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-white border-[1px]">
            <div className="w-full max-w-[1400px] flex flex-col md:flex-row mx-auto">
                <div className="flex-1 p-5 flex flex-col justify-between ">
                    <div className='pb-12'>
                        <p className="text-black ">
                            Have questions or feedback?
                        </p>
                        <p>
                            Reach out to us, {`we're`} here to help. Your thoughts and suggestions are always welcome!
                        </p>
                    </div>
                    <div className="flex gap-3 items-center text-[#6dcfb5]">
                        <button className='hover:opacity-70 transition-all'>
                            <FaFacebookSquare size={25} />
                        </button>
                        <button className='hover:opacity-70 transition-all'>
                            <FaSquareInstagram size={25} />
                        </button>
                        <button className='hover:opacity-70 transition-all'>
                            <FaSquarePinterest size={25} />
                        </button>
                        <button className='hover:opacity-70 transition-all'>
                            <FaXTwitter size={20} />
                        </button>
                        <button className='hover:opacity-70 transition-all'>
                            <FaTiktok size={20} />
                        </button>
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
            </div>
        </footer>
    )
}

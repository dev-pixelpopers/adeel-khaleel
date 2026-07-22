"use client";
import React, { useState } from "react";

export default function Footer() {

    return (
        <footer className="w-full bg-[url('/footer-bg.png')] bg-cover bg-center bg-no-repeat text-white pt-16 pb-6 px-6 sm:px-12 lg:px-20 relative select-none">

            {/* MAIN FOOTER CONTENT GRID */}
            <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 border-b border-white/20 pb-12">

                {/* COLUMN 1: MENU */}
                <div className="lg:col-span-3 lg:pr-8 flex flex-col justify-start">
                    <h3 className="font-Adorage text-[28px] sm:text-[35px] tracking-wide mb-6">
                        Menu
                    </h3>
                    <ul className="space-y-7 font-Matangi-Bold text-[20px] sm:text-[20px] text-white/90">
                        <li><a href="#" className="hover:text-white transition-colors">Meet the Team</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Procedures</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pre Operation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Post Operation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Traveling for Surgery</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQ's</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Online Appointments</a></li>
                    </ul>
                </div>

                {/* COLUMN 2: SOCIAL MEDIA & CONTACT (WITH LEFT VERTICAL DIVIDER) */}
                <div className="lg:col-span-4 lg:px-10 lg:border-l border-white/20 flex flex-col space-y-10 lg:space-y-20">

                    {/* Social Media Links */}
                    <div>
                        <h3 className="font-Adorage text-[28px] sm:text-[35px] tracking-wide mb-6">
                            Social Media
                        </h3>
                        <ul className="space-y-7 font-Matangi-Bold text-[20px] sm:text-[20px] text-white/90">
                            <li><a href="#" className="hover:text-white transition-colors">Linked In</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-Adorage text-[28px] sm:text-[35px] tracking-wide mb-4">
                            Contact
                        </h3>
                        <div className="space-y-7 font-Matangi-Bold text-[20px] sm:text-[20px] text-white/90">
                            <p>Phone : (469) 935 7775</p>
                            <p>Address : 11000 Frisco Street, Suite 200 Frisco, Texas 75033</p>
                        </div>
                    </div>

                </div>

                {/* COLUMN 3: ABOUT, NEWSLETTER & PARTNERS (WITH LEFT VERTICAL DIVIDER) */}
                <div className="lg:col-span-5 lg:pl-10 lg:border-l border-white/20 flex flex-col space-y-35">

                    {/* Top Info Text */}
                    <div>
                        <h3 className="font-Adorage text-[28px] sm:text-[32px] tracking-wide mb-4">
                            Social Media
                        </h3>
                        <p className="font-Matangi-Regular text-[14px] sm:text-[18px] leading-relaxed text-white/85 max-w-[91%]">
                            Join our community Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna. Nulla laoreet purus nulla, a imperdiet tortor rutrum ac. Nullam vulputate nibh ac leo.
                        </p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="w-full max-w-[91%]">
                        <form className="relative border-b border-white/40 pb-2 flex items-center justify-between">
                            <input
                                type="email"
                                required
                                placeholder="Subscribe email list"
                                className="bg-transparent text-white placeholder-white/90 font-Matangi-Regular text-[18px] outline-none w-full pr-12"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 bg-[#AD974E] transition-colors flex items-center justify-center shrink-0 ml-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-white"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </form>
                        <p className="text-[14px] text-end juntify-end text-white mt-8 font-Matangi-Regular">
                            By subscribing you agree to the Privacy Policy
                        </p>
                    </div>

                    {/* Partner / Accreditation Logos */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        {/* APEX ORTHOPEDICS */}
                        <div className="rounded flex items-center justify-center h-14">
                            <img src="/footer-logo (5).png" alt="American Academy of Orthopaedic Surgeons" className="w-full h-full object-cover" />
                        </div>

                        {/* NASS */}
                        <div className="rounded flex items-center justify-center h-14">
                            <img src="/footer-logo (2).png" alt="NASS" className="w-full h-full object-cover" />
                        </div>

                        {/* North American Spine Society */}
                        <div className="rounded flex items-center justify-center h-14">
                            <img src="/footer-logo (3).png" alt="North American Spine Society" className="w-full h-full object-cover" />
                        </div>

                        {/* AAOS */}
                        <div className="rounded flex items-center justify-center h-14">
                            <img src="/footer-logo (4).png" alt="AAOS" className="w-full h-full object-cover" />
                        </div>

                        {/* American Academy of Orthopaedic Surgeons */}
                        <div className="rounded flex items-center justify-center h-14">
                            <img src="/footer-logo (1).png" alt="Apex Orthopedics" className="w h-full object-cover" />
                        </div>
                    </div>

                </div>

            </div>

            {/* BOTTOM COPYRIGHT BAR */}
            <div className="max-w-[1440px] mx-auto pt-6 text-center">
                <p className="text-[14px] font-Matangi-Regular text-white/80">
                    © 2026, Mohammed Khaleel, MD. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
}
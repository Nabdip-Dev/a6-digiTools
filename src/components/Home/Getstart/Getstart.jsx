import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Getstart = () => {
    return (
        <>
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 mb-12">
                        Start using premium digital tools in minutes, not hours.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Step 1 */}
                        <div className="bg-white rounded-lg p-8 shadow-sm relative">
                            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                01
                            </div>
                            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.784.686 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Create Account
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Sign up for free in seconds. No credit card required to get
                                started.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-lg p-8 shadow-sm relative">
                            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                02
                            </div>
                            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-4 8v4m-6-4v4"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 7V4a4 4 0 118 0v3"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Choose Products
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Browse our catalog and select the tools that fit your needs.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-lg p-8 shadow-sm relative">
                            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                03
                            </div>
                            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m1-4v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Start Creating
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Download and start using your premium tools immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-16 bg-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Choose the plan that fits your needs. Upgrade or downgrade anytime.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

                        {/* Starter */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-semibold">Starter</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Perfect for getting started
                            </p>

                            <h2 className="text-3xl font-bold">
                                $0 <span className="text-sm text-gray-500">/Month</span>
                            </h2>

                            <ul className="mt-6 space-y-2 text-gray-600">
                                <li>✔ Access to 10 free tools</li>
                                <li>✔ Basic templates</li>
                                <li>✔ Community support</li>
                                <li>✔ 1 project per month</li>
                            </ul>

                            <button className="mt-6 w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                                Get Started Free
                            </button>
                        </div>

                        {/* Pro */}
                        <div className="rounded-xl p-6 shadow-lg bg-gradient-to-b from-purple-600 to-indigo-600 text-white relative">

                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
                                Most Popular
                            </span>

                            <h3 className="text-xl font-semibold">Pro</h3>
                            <p className="text-sm opacity-80 mb-4">
                                Best for professionals
                            </p>

                            <h2 className="text-3xl font-bold">
                                $29 <span className="text-sm">/Month</span>
                            </h2>

                            <ul className="mt-6 space-y-2">
                                <li>✔ Access to all premium tools</li>
                                <li>✔ Unlimited templates</li>
                                <li>✔ Priority support</li>
                                <li>✔ Unlimited projects</li>
                                <li>✔ Cloud sync</li>
                                <li>✔ Advanced analytics</li>
                            </ul>

                            <button className="mt-6 w-full py-2 rounded-full bg-white text-purple-600 font-semibold">
                                Start Pro Trial
                            </button>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-semibold">Enterprise</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                For teams and businesses
                            </p>

                            <h2 className="text-3xl font-bold">
                                $99 <span className="text-sm text-gray-500">/Month</span>
                            </h2>

                            <ul className="mt-6 space-y-2 text-gray-600">
                                <li>✔ Everything in Pro</li>
                                <li>✔ Team collaboration</li>
                                <li>✔ Custom integrations</li>
                                <li>✔ Dedicated support</li>
                                <li>✔ SLA guarantee</li>
                                <li>✔ Custom branding</li>
                            </ul>

                            <button className="mt-6 w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                                Contact Sales
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-500">
                <div className="max-w-6xl mx-auto text-center px-4">

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready To Transform Your Workflow?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-200 mb-8">
                        Join thousands of professionals who are already using <br />
                        Start your free trial today.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 rounded-full bg-white text-purple-600 font-semibold hover:scale-105 transition">
                            Get Started
                        </button>

                        <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-purple-600 transition">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </section>

            <section className="bg-[#0B0F19] text-gray-300 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Top Grid */}
                    <div className="grid md:grid-cols-5 gap-10">

                        {/* Logo + Description */}
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                YourLogo
                            </h2>

                            <p className="text-sm leading-6 mb-6">
                                Build modern workflow and manage your team with powerful tools.
                                Join thousands of professionals using our platform every day.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <div className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer">
                                    <FaFacebook/>
                                </div>

                                <div className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer">
                                    <FaTwitter/>
                                </div>

                                <div className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer">
                                    <FaGithub/>
                                </div>

                                <div className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer">
                                    <FaLinkedin/>
                                </div>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Features</li>
                                <li className="hover:text-white cursor-pointer">Pricing</li>
                                <li className="hover:text-white cursor-pointer">Integrations</li>
                                <li className="hover:text-white cursor-pointer">Updates</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">About</li>
                                <li className="hover:text-white cursor-pointer">Careers</li>
                                <li className="hover:text-white cursor-pointer">Blog</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                                <li className="hover:text-white cursor-pointer">Terms</li>
                                <li className="hover:text-white cursor-pointer">Privacy</li>
                                <li className="hover:text-white cursor-pointer">Status</li>
                            </ul>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-700 my-8"></div>

                    {/* Bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>© 2026 Your Company. All rights reserved.</p>

                        <div className="flex gap-6 mt-4 md:mt-0">
                            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-white cursor-pointer">Terms of Service</span>
                            <span className="hover:text-white cursor-pointer">Cookies</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Getstart;
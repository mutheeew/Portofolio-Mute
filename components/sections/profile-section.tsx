import { ArrowRight, Dribbble, Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Profile from "@/assets/images/profile-mut.png";

export default function ProfileSection() {
    return (
        <div className="relative max-h-screen bg-gradient-to-t from-blue-100 via-blue-50 to-white relative overflow-hidden">
            {/* Grid Background */}
            <div 
                className="absolute inset-0" 
                style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(203, 213, 225, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(203, 213, 225, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
                }}
            />
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <h2 className="text-[180px] font-black text-gray-300/40 leading-none whitespace-nowrap select-none">
                FRONTEND DEV
                </h2>
            </div>
            
            <div className="relative mx-auto px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                    {/* Left Column - Name & Introduction */}
                    <div className="lg:col-span-4 space-y-4">
                        {/* Main Heading */}
                        <div>
                        <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight italic">
                            I'M<br />MUTE
                        </h1>
                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg text-sm">
                            Let's Discuss
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        </div>
                        
                        {/* Introduction Card */}
                        <div>
                        <p className="text-gray-700 text-md leading-relaxed">
                            Hello, I'm <span className="font-bold text-gray-900">Muthmainnah</span>, a Frontend Web Developer committed to delivering high-quality, maintainable code and developing fast, responsive web applications that provide exceptional user experiences.
                        </p>
                        </div>
                    </div>
                    
                    {/* Center Column - Image */}
                    <div className="lg:col-span-4 flex justify-center relative">
                        <div className="relative w-full max-w-md">
                            
                            
                            {/* Profile Image */}
                            <div className="relative z-10 overflow-hidden">
                                <Image
                                    src={Profile} 
                                    alt="Muthmainnah - Frontend Developer" 
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                
                    {/* Right Column - Follow Me & Title */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Follow Me Section */}
                        <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Me</h3>
                        <div className="flex gap-3">
                            <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <Dribbble className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.15-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.55-2.12-9.93-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.63 1.95 2.44 3.37 4.6 3.41-1.69 1.32-3.82 2.11-6.13 2.11-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63.96-.7 1.8-1.56 2.46-2.55z"/>
                            </svg>
                            </a>
                            <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <Mail className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                            </svg>
                            </a>
                        </div>
                        </div>
                        
                        {/* Tagline */}
                        <p className="text-gray-700 text-sm font-medium leading-relaxed">
                         I write maintainable code and build interfaces that inspire
                        </p>
                        
                        {/* Large Title */}
                        <div>
                        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-none tracking-tight">
                            FRONTEND<br />
                            WEB<br />
                            DEVELOPER
                        </h2>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
}
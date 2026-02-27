import { ArrowRight, Dribbble, Instagram, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import Profile from "@/assets/images/profile-mut.png";
import Profile2 from "@/assets/images/profile-mute.png";

export default function ProfileSection() {
    return (
        <div className="h-screen bg-gradient-to-t from-blue-100 via-blue-50 to-white relative overflow-hidden w-full max-w-full">
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
        
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <h2 className="text-5xl sm:text-8xl md:text-[150px] lg:text-[180px] font-black text-gray-300/40 leading-none select-none text-center px-4">
                FRONTEND DEV
                </h2>
            </div>

            <div 
                className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
                style={{
                    height: '280px',
                    background: 'linear-gradient(to top, rgba(191,219,254,1) 0%, rgba(191,219,254,0.95) 15%, rgba(219,234,254,0.7) 40%, rgba(239,246,255,0.3) 65%, transparent 100%)'
                }}
            />
            
            <div className="relative min-h-screen flex items-center mx-auto px-4 sm:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-8 items-center w-full">
                
                <div className="lg:col-span-4 md:col-span-2 flex flex-col justify-between min-h-96 lg:min-h-full py-10 lg:py-20">
                    <div className="space-y-6">
                        <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight italic">
                            {"I'M"}<br />MUTE
                        </h1>
                        <a href="https://wa.me/6285189989891" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-t from-blue-600 to-blue-900 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg text-sm w-fit">
                            {"Let's Discuss"}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                    
                    <div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Hello, {"I'm"} <span className="font-bold text-gray-900">Muthmainnah</span>, a Frontend Web Developer committed to delivering high-quality, maintainable code and developing fast, responsive web applications that provide exceptional user experiences.
                        </p>
                    </div>
                </div>
                            
                <div className="lg:col-span-4 md:col-span-2 flex justify-center items-end pb-0 min-h-96">
                    <div className="relative w-80 md:w-96 lg:w-full lg:max-w-md mb-0">
                        <div className="relative z-10 w-full aspect-auto">
                            <Image
                                src={Profile2} 
                                alt="Muthmainnah - Frontend Developer" 
                                className="w-full h-auto object-cover object-bottom block"
                                priority
                            />
                        </div>
                    </div>
                </div>
                        
                <div className="lg:col-span-4 md:col-span-2 flex flex-col justify-between min-h-96 lg:min-h-full py-10 lg:py-20">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Me</h3>
                            <div className="flex gap-3">
                                <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Dribbble className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/muthmainnah-mute" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:muthmainnah133@gmail.com" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <p className="text-gray-700 text-sm font-medium leading-relaxed">
                            I write maintainable code and build interfaces that inspire
                        </p>
                    </div>
                    
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
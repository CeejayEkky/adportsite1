
import { BiPhone, BiEnvelope, BiMap, BiTime, BiMessageDetail, BiGlobe } from "react-icons/bi"

export default function Contact() {
  return (
    <div className="px-[8%] lg:px-[8%] py-15 text-white">
        <div className="grid lg:grid-cols-2 gap-12 w-full">
            <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg">
                <h2 className="text-4xl font-unbounded font-normal spancol mb-4">
                    Reach Out and Connect
                </h2>
                <p className="text-sm text-gray-400 my-8">
                    If you got a problem, need an assistance or more info, the right call is waiting here
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" 
                        placeholder="FirstName"
                        required
                        className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                        px-4 py-4 text-sm focus:outline-none ifocal transition-all duration-500"/>
                        <input type="text" 
                        placeholder="LastName"
                        required
                        className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                        px-4 py-4 text-sm focus:outline-none ifocal transition-all duration-500"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" 
                        placeholder="Email Address"
                        required
                        className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                        px-4 py-4 text-sm focus:outline-none ifocal transition-all duration-500"/>
                        <input type="number" 
                        placeholder="Phone Number"
                        required
                        className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                        px-4 py-4 text-sm focus:outline-none ifocal transition-all duration-500"/>
                    </div>
                    <select 
                        className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                        px-4 py-4 text-sm focus:outline-none ifocal transition-all duration-500"
                    >
                        <option> Select a service </option>
                        <option> FullStack Development</option>
                        <option> SEO Optimization</option>
                        <option> Frontend Development</option>
                        <option> Backend Development </option>
                        <option> Game Development</option>
                        <option> UI/UX Design </option>
                        <option> Others </option>
                    </select>
                    
                    <textarea
                        rows={5}
                        required
                        placeholder="Type your Message here.."
                        className="w-full bg-[#0e0f12] border border-gray-700 resize-none rounded-lg
                        px-4 py-4 text-sm focus:outline-none ifocal transition-all duration-500"
                        ></textarea>

                        <button
                        type="submit"
                        className="subsub px-6 py-3 mt-5 rounded-lg font-semibold
                        transition-all duration-500 cursor-pointer"
                        >
                            Send Message
                        </button>
                </form>
            </div>

            <div className="flex flex-col space-y-6 justify-center cursor-pointer">
                
                <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
                    <span className="bg-[#1a1b1f] p-4 rounded-lg spancol">
                        <BiPhone size={24}/>
                        {/* 2:43:11 */}
                    </span>
                    <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="font-medium">(+234) 907 461 4559</p>
                    </div>
                </div>
                <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
                    <span className="bg-[#1a1b1f] p-4 rounded-lg spancol">
                        <BiEnvelope size={24}/>
                    </span>
                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-medium">ekwomdivinedestiny300@gmail.com</p>
                    </div>
                </div>
                <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
                    <span className="bg-[#1a1b1f] p-4 rounded-lg spancol">
                        <BiMap size={24}/>
                    </span>
                    <div>
                        <p className="text-sm text-gray-400">Address</p>
                        <p className="font-medium">Craze Street, Egbeda Lagos</p>
                    </div>
                </div>
                <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
                    <span className="bg-[#1a1b1f] p-4 rounded-lg spancol">
                        <BiTime size={24}/>
                    </span>
                    <div>
                        <p className="text-sm text-gray-400">Working Hours</p>
                        <p className="font-medium">Mon - Fri: 10:00 - 19:40</p>
                        <p className="font-medium">Sat: 11:00 - 15:50</p>
                    </div>
                </div>
                <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
                    <span className="bg-[#1a1b1f] p-4 rounded-lg spancol">
                        <BiMessageDetail size={24}/>
                    </span>
                    <div>
                        <p className="text-sm text-gray-400">WhatsApp</p>
                        <p className="font-medium">+234 911 322 5710</p>
                    </div>
                </div>
                <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
                    <span className="bg-[#1a1b1f] p-4 rounded-lg spancol">
                        <BiGlobe size={24}/>
                    </span>
                    <div>
                        <p className="text-sm text-gray-400">Website</p>
                        <p className="font-medium">www.mysite.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

// 2:31:50
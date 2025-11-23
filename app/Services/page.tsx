"use client"

const serveData = [
    {
        id: "01",
        title: "FullStack Development",
        desc: "We developers retrieve and build up the basic vision and plan for a website build-up, may include payment system as you desire. It can be; Company, Personal, Business"
    },
    {
        id: "02",
        title: "Frontend Development",
        desc: "We developers retrieve and build up the basic vision and plan for a website build-up. It can be; Company, Personal, Business"
    },
    {
        id: "03",
        title: "Gaming Development",
        desc: "Building up games and universal intellect with user interface and friendliness through flexible mechanics and controls. It may be uniquely mobile available."
    },
    {
        id: "04",
        title: "Data Analyst",
        desc: "Bring up the data that must be analysed and it'll be done swiftly. Analysis run includes; descriptive & statistical analysis, charts and more."
    },
    {
        id: "05",
        title: "Content Creation",
        desc: "My content services includes: Portfolio result pages, Tiktok and other websites. Basically participating in all sorts of trending contents with main templates."
    }
]

export default function Services() {
  return (
    <section className="px-[8%] lg:px-[8%] py-15 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serveData.map((ser, i) => (
                <div
                key={i}
                className="s-card group py-15 px-10 border border-gray-800 rounded-xl
                transition-all duration-300 cursor-pointer"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3
                        className="text-6xl stroke-text font-bold text-gray-400 transition-colors
                        duration-300 "
                        >{ser.id}</h3>
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white
                        text-black transition group-hover:text-black duration-300 secsec">
                            <i className="bi bi-arrow-up-right text-3xl"></i>
                        </div>
                    </div>

                    <h2 className="text-4xl font-normal font-unbounded mb-5 transition-colors duration-300">
                        {ser.title}
                    </h2>

                    <p className="text-gray-400 text-lg">
                        {ser.desc}
                    </p>
                    <div className="border-t border-gray-700 ptime mt-5 duration-300"></div>
                </div>
            ))}
        </div>
    </section>
  )
}

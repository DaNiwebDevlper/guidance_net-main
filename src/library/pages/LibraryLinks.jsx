import { useState } from "react";
import AddButton from "../component/AddButton"
import LinksModel from "../component/LinksModel";
import { GiTireIronCross } from "react-icons/gi";
const libraryLinks = [
    { links: "http://www.digitallibrary.edu.pk/", title: "HEC National Digital Library" },
    { links: "/http://www.digitallibrary.edu.pk/", title: "Iqbal Cyber Library" },
    { links: "/http://www.digitallibrary.edu.pk/", title: "Library & Information Management" },
    { links: "/", title: "Rekhta OPAC" },
    { links: "/", title: "Directory of Open Access Journals" }
]
const LibraryLinks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <main >
            <AddButton text="Add Links" onClick={openModal} />
            <LinksModel isOpen={isModalOpen} onClose={closeModal} />
            <h1 className="text-4xl sm:text-3xl font-bold font-mono m-5">Library Links</h1>
            <section className='p-5 flex justify-center items-center flex-col sm:flex-row gap-5 flex-wrap'>

                {libraryLinks.map((links) => (
                    <div className="border my-5 flex-col rounded-lg p-5 sm:w-[400px] min-h-[150px] bg-slate-50 flex gap-y-2 justify-center relative">
                        <button className="top-5 absolute right-5 text-red-500"><GiTireIronCross /></button>
                        <p className="font-semibold uppercase text-lg"> Title Link: <span className="font-normal capitalize">{links.title}</span></p>
                        <p>URL: <span className="text-blue-500 text-md hover:underline">{links.links}</span></p>
                    </div>
                ))}

            </section>
        </main>
    )
}

export default LibraryLinks
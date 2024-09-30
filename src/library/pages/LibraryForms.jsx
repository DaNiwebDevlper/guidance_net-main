import { useState } from "react";
import AddButton from "../component/AddButton";
import PDFModal from "../component/PDFModel";
import { AiFillFilePdf } from "react-icons/ai"; // PDF file icon
import { MdDelete } from "react-icons/md"; // Delete icon

const initialPDFs = [
    { id: 1, name: "FYP.pdf", path: "/assets/FYP.pdf" },
    { id: 2, name: "ProjectPlan.pdf", path: "/assets/ProjectPlan.pdf" }
];

const LibraryForms = () => {
    const [pdfs, setPdfs] = useState(initialPDFs);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDeletePDF = (id) => {
        const updatedPdfs = pdfs.filter((pdf) => pdf.id !== id);
        setPdfs(updatedPdfs);
    };

    return (
        <div>
            {/* Add PDF button */}
            <AddButton text="ADD Form" onClick={openModal} />

            {/* Modal for adding PDF */}
            <PDFModal isOpen={isModalOpen} onClose={closeModal} />

            {/* PDF Files List */}
            <div className="mt-5">
                {pdfs.map((pdf) => (
                    <div key={pdf.id} className="flex items-center justify-between bg-slate-100 p-4 rounded mb-4">
                        {/* File icon and PDF name */}
                        <div className="flex items-center gap-2">
                            <AiFillFilePdf className="text-red-500 text-3xl" />
                            <a href={pdf.path} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                {pdf.name}
                            </a>
                        </div>

                        {/* Delete button */}
                        <button
                            onClick={() => handleDeletePDF(pdf.id)}
                            className="text-red-500 hover:text-red-700"
                            title="Delete PDF"
                        >
                            <MdDelete className="text-2xl" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryForms;

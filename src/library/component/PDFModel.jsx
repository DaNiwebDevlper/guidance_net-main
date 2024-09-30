import { useState } from "react";

const PDFModal = ({ isOpen, onClose, addPDF }) => {
    const [pdfFileName, setPdfFileName] = useState("");
    const [pdfFile, setPdfFile] = useState(null);

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pdfFileName && pdfFile) {
            const newPDF = {
                id: Date.now(), // unique ID
                name: pdfFileName,
                path: URL.createObjectURL(pdfFile)
            };
            addPDF(newPDF); // Add new PDF to the list
            onClose(); // Close the modal after submission
        } else {
            alert("Please fill out all fields!");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50  backdrop-blur-md flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Add PDF File</h2>

                {/* PDF File Name Input */}
                <input
                    type="text"
                    placeholder="Enter the PDF title..."
                    value={pdfFileName}
                    onChange={(e) => setPdfFileName(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                />

                {/* PDF File Input */}
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full mb-4 p-2 border rounded"
                />

                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="bg-rose-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PDFModal;

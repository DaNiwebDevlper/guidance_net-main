import React from 'react'

const AddForm = ({ formData, handleChange, handleFileChange, handleSubmit }) => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full  p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Service Provider Registration</h2>
                <form className="" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 place-content-center gap-5">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Profile Image</label>
                            <input
                                type="file"
                                name="profileImg"
                                onChange={handleFileChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Education</label>
                            <input
                                type="text"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Work At</label>
                            <input
                                type="text"
                                name="workAt"
                                value={formData.workAt}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Specialization</label>
                            <input
                                type="text"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Fees</label>
                            <input
                                type="number"
                                name="fees"
                                value={formData.fees}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Experience</label>
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">Field</label>
                            <input
                                type="text"
                                name="field"
                                value={formData.field}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full sm:w-[49%] my-5 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddForm
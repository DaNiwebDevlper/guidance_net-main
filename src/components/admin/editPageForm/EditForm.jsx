import React from 'react'

const EditForm = ({ formData, handleSubmit, handleChange }) => {
    return (
        <div className="min-h-screen">
            <div className="w-full  p-8">
                <h2 className="text-2xl font-semibold font-mono text-center mb-6">Edit Service Provider</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Education</label>
                            <input
                                type="text"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Work At</label>
                            <input
                                type="text"
                                name="workAt"
                                value={formData.workAt}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Specialization</label>
                            <input
                                type="text"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Fees</label>
                            <input
                                type="number"
                                name="fees"
                                value={formData.fees}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Experience</label>
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Field</label>
                            <input
                                type="text"
                                name="field"
                                value={formData.field}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
                            Update Provider
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditForm
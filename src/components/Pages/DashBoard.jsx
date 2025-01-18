import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Dashboard = () => {
    const { updateUserProfile, user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const openModal = () => {
        // Populate input fields with existing values when modal opens
        setDisplayName(user?.displayName || "");
        setPhotoURL(user?.photoURL || "");
        setIsModalOpen(true);
    };

    const handleUpdateProfile = () => {
        const userInfo = { displayName, photo: photoURL };

        updateUserProfile({
            displayName: userInfo.displayName,
            photoURL: userInfo.photo,
        })
            .then(() => {
                toast("Profile updated successfully!");
                setIsModalOpen(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold">
                Welcome &quot;{user?.displayName}&quot;
            </h1>
            <div className="card bg-base-100 shadow-xl mx-auto pt-10">
                <figure className="px-10 w-40 mx-auto">
                    <img
                        src={user?.photoURL}
                        alt="profile photo"
                        className="rounded-full"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <div className="card-actions">

                        {/* update profile btn */}
                        <button
                            onClick={openModal}
                            className="btn btn-primary"
                        >
                            Update your Profile
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">Display Name</label>
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">Photo URL</label>
                            <input
                                type="text"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* modal have 2 btn */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleUpdateProfile}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

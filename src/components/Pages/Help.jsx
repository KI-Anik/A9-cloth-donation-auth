import { Link } from "react-router-dom";

const Help = () => {
    return (
        <div className="w-3/5 mx-auto text-center space-y-5 shadow-xl p-5 mb-5">
            <div >
                <h1 className="text-3xl font-bold">How to help</h1>
                <p className="text-gray-400 font-semibold">Your kindness can bring warm and hope to other. Here&apos;s how you can help</p>
            </div>

            <div className="bg-base-300 p-5">
                <h2 className="text-xl font-semibold">Donate Winter Clothing</h2>
                <p className="font-semibold text-gray-500">You can donate gently used or new winter clothing such as jacket, sweater, gloves,
                    hats, shoes etc to help those in need </p>
            </div>
            <div className="bg-base-300 p-5">
                <h2 className="text-xl font-semibold">Monetary Donation</h2>
                <p className="font-semibold text-gray-500">Financial contribution help us purchase neccessary items for donation campaigns. Your donation makes a big difference. </p>
            </div>
            <div className="bg-base-300 p-5">
                <h2 className="text-xl font-semibold">Spread Awareness</h2>
                <p className="font-semibold text-gray-500">Share our campaign on social media and encourage your friends and family to participate in the initiative.</p>
            </div>
            <div className="bg-base-300 p-5">
                <h2 className="text-xl font-semibold">Donate Winter Clothing</h2>
                <p className="font-semibold text-gray-500">Sign up to help distribute, clothing assists with event, or supports in other ways at our local donation centers.</p>
            </div>
            <div className="font-bold">
                if your are ready to get started, check out our <Link className="link text-blue-500 font-" to={'/donationCam'} >Donation campaign</Link> page for more details on how you can get involves.
            </div>
        </div>
    );
};

export default Help;
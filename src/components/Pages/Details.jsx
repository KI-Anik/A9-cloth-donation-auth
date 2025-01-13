import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar";

const Details = () => {
    const { id } = useParams()
    const pId = parseInt(id)
    const data = useLoaderData()

    const singleCard = data.find(card => card.id === pId)
    const {title, image,division,description,contactInfo,status } = singleCard

        const handleBtn=()=>{
            alert('Thank you ! We will reach your destination soon')
        }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity of item</span>
                                </label>
                                <input type="number" placeholder="e.g., 2 jackets, 3 blankets" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item type</span>
                                </label>
                                <input type="text" placeholder="e.g., blanket, jacket, sweater" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pickup location</span>
                                </label>
                                <input type="text" placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item type</span>
                                </label>
                                <input type="text" placeholder="e.g., blanket, jacket, sweater" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleBtn} className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                           <img src={image} alt="photo" />
                        </p>
                        <p className="text-lg font-semibold text-amber-600">{description}</p>
                        <div className="text-green-600 font-semibold">
                        <p>Division: {division}</p>
                        <p>Status: {status}</p>
                        <p>Contact-Info: {contactInfo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
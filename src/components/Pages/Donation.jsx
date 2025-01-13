import { Link,  } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

const Donation = () => {
    const [cards,setCards] = useState([])

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res =>res.json())
        .then(data => setCards(data) )
    },[])
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div>
                <h1>donation</h1>
                <p></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                {cards.map((singleData) => 
                    <div key={singleData.id} className="card bg-base-100 m-5 gap-5 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img
                            src={singleData.image}
                                alt="donation image"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{singleData.title}</h2>
                            <p>{singleData.description}</p>
                            <div className="card-actions">
                                <Link to={`/details/${singleData.id}`}>
                                <button className="btn btn-primary">Donate Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Donation;
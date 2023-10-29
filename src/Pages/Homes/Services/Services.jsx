import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data)
        })
    } ,[])

    return (
        <div className="mt-5">
            <div className="text-center space-y-3 ">
            <h2 className='text-3xl font-bold text-red-500'>Services</h2>
            <h2 className="text-5xl font-bold text-slate-600">Our Service Area</h2>
            <p className="pb-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
               {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;
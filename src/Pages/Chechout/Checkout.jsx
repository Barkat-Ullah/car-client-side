import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Prividers/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  const {users} =useContext(AuthContext)
  console.log(services);
  const { title, _id, price, img } = services;

  const handleServices = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = users.email;
    const date = form.date.value;
    const booking = {
        customerName: name,
        date,
        email,
        service: title,
        img,
        service_id : _id,
        price: price
    }
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
  


  return (
    <div className="py-10">
      <h1 className="mt-7">Checkout {title}</h1>

      <form onSubmit={handleServices} className="card-body">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                type="text"
                defaultValue={users?.displayName}
                name="name"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date" 
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="text"
                defaultValue={'$' + price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={users?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
            {/* <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                /> */}
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;

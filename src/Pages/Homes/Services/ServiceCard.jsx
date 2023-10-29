import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div>
      <div className="overflow-hidden my-3 bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure>
          <img src={img} alt="card image" className="aspect-video w-full" />
        </figure>
        <div className="p-4">
          <header className="flex gap-4 mb-2">
            <div>
              <h3 className="text-xl font-medium text-slate-700">{title}</h3>
              <p className="text-sm text-red-500">Price: $ {price} </p>
            </div>
          </header>
        </div>

        <div className="flex justify-end gap-2 p-2 pt-0">
        <Link to={`/checkout/${_id}`}>
        <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-red-500 hover:bg-red-100 hover:text-red-600 focus:bg-red-200 focus:text-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-red-300 disabled:shadow-none disabled:hover:bg-transparent">
                    <span>Read more</span>

                    <div>
                      {" "}
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </button>

        </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

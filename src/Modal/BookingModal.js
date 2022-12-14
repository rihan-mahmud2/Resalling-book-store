import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/ContextProvider";

const BookingModal = ({ category, setBookingCategory }) => {
  const { user } = useContext(AuthContext);

  const { product_name, product_price, image, _id } = category;
  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const mettingVenue = form.meeting_venue.value;
    const productPrice = form.product_price.value;
    const productName = form.product_name.value;
    console.log(email, name, phone, product_name);

    const bookingInfo = {
      email,
      name,
      phone,
      mettingVenue,
      productPrice,
      productName,
      image,
      category_id: _id,
    };

    //saving the to data base

    fetch("https://reselling-portal-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Booked Sucessfully");
        }
      });

    setBookingCategory(null);
  };
  console.log(product_name);
  return (
    <div className="">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`modal`}>
        <div className="relative w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setBookingCategory(null)}
              type="button"
              htmlFor="my-modal"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                htmlFor="my-modal"
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-2 px-6 lg:px-8">
              <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
                Book The Product
              </h3>
              <form onSubmit={handleBook} className="space-y-2" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={user?.displayName}
                    disabled
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    id="name"
                    placeholder=""
                    defaultValue={product_name}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Price
                  </label>
                  <input
                    type="text"
                    name="product_price"
                    id="name"
                    placeholder=""
                    defaultValue={`${product_price}`}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phon Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Meeting Venue
                  </label>
                  <input
                    type="text"
                    name="meeting_venue"
                    id="name"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <div className="modal-action">
                  <button type="submit" htmlFor="my-modal" className="btn">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

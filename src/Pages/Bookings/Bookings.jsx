import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Prividers/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import axios from "axios";

const Bookings = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${users?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials:true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())

    //   .then((data) => {
    //     setBookings(data);
    //     console.log(data);
    //   });
  }, [url]);

  
const handleDelete = id => {
    const proceed = confirm('Are you deleted this')
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
            }
            console.log(data);
        })
    }
}

const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
}

  return (
    <div>

      <h2 className="mt-20">Total {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">

          <tbody>
         {
            bookings.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} booking={booking}></BookingRow>)
         }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;

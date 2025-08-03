import React, { useState } from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets';


const MyBookings = () => {
  const [bookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* Booking Rows */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full py-6 border-b border-gray-300 first:border-t gap-4"
          >
            {/* Hotels Column */}
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel"
                className="w-full md:w-44 h-32 rounded object-cover shadow"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.room.name}
                  <span className="font-inter text-sm">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.room.hotel.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img src={assets.guestsIcon} alt="guests-icon" />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className="text-base text-gray-800 font-semibold">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            {/* Date & Timings Column */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In:</p>
                <p className=' text-gray-500 text-sm'>
                  { new Date (booking.checkInDate).toDateString()}
                  </p>
              </div>
               <div>
                <p>Check-Out:</p>
                <p className=' text-gray-500 text-sm'>
                  { new Date (booking.checkOutDate).toDateString()}
                  </p>
              </div>
            </div>

            {/* Payment Column */}
            <div className="flex flex-col items-start justify-center  pt-3">
              
              <div className='flex items-center gap-2'>
                  <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500":" bg-red-500"}`}></div>
                  <p className='{`text-sm ${booking.isPaid ? "text-green-500":" text-red-500"}`}'> { booking.isPaid ? "Paid" : "Unpaid"}</p>
              </div>

              {!booking.isPaid && (
                <button className="mt-4 px-4 py-1.5 bg-blue-500 text-white rounded-full  hover:bg-blue-600 transition-all cursor-pointer">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;

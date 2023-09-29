import React from 'react'
import ReserveCard from './reserveCard'

const AllBookings: React.FC<ReserveProps> = (props) => {
  const openModal = props;
  const bookings1:ReserveCardProps[] = [
    {
      reserveId: 1,
      organizerName: "Hannah Calisura",
      clientName: "Jeremiah Juinio",
      eventSize: 5,
      time: "11:30 PM - 12:00 AM",
      status: "Ongoing",
    },
    {
      reserveId: 2,
      organizerName: "Angelou Sereno",
      clientName: "Jeremiah Juinio",
      eventSize: 5,
      time: "11:30 PM - 12:00 AM",
      status: "Ongoing",
    },
  ]

  const bookings2:ReserveCardProps[] = [
    {
      reserveId: 1,
      organizerName: "Kathea Mari Mayol",
      clientName: "Jeremiah Juinio",
      eventSize: 5,
      time: "11:30 PM - 12:00 AM",
      status: "Finished",
    },
    {
      reserveId: 2,
      organizerName: "Franz Ondiano",
      clientName: "Jeremiah Juinio",
      eventSize: 5,
      time: "11:30 PM - 12:00 AM",
      status: "Finished",
    },
  ]
  return (
    <div>
      <div className='font-poppins mx-[3%] mt-[3%]'>
        <ReserveCard 
          bookings={bookings1} openModal={openModal} />
      </div>
      <div className='font-poppins mx-[3%] mt-[3%]'>
        <ReserveCard bookings={bookings2} openModal={openModal}/>
      </div>
    </div>
  )
}

export default AllBookings
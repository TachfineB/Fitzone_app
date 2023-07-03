import React, { useState } from 'react';
import { showers } from '../assets';
import styles from '../style';

const Card = ({ title, image, price, location }) => {
  return (
    <div className="facility">
      {/*<img src={image}  />*/}
      <h2>{title}</h2>
      <p>Room or equipment: {price}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const Page = () => {
  const [filterPrice, setFilterPrice] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  const handlePriceFilterChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setFilterLocation(event.target.value);
  };

  const filteredCards = [
    {
      title: 'Showers and Lockers',
      image: {showers},
      price: 'Room',
      location: 'Cn Tower',
    },
    {
      title: 'Outside Area',
      image: 'image2.jpg',
      price: 'None',
      location: 'Oustside',
    },
    {
        title: 'Meditation Room',
        image: 'image2.jpg',
        price: 'Room',
        location:'Downtown'&&'Centertown',
      },{
        title: 'Juice bar',
        image: 'image2.jpg',
        price: 'Room',
        location: 'Townhall'&&'Centertown',
      },{
        title: 'Cardio Equipment',
        image: 'image2.jpg',
        price: 'Equipment',
        location: 'Downtown'&&'Cn Tower',
      },
      {
        title: 'Weightlifting Equipment',
        image: 'image2.jpg',
        price: 'Equipment',
        location: 'Centertown',
      },
      {
        title: 'Yoga Studio',
        image: 'image2.jpg',
        price: 'Room',
        location: 'Townhall',
      },{
        title: 'Cycling Studio',
        image: 'image2.jpg',
        price: 'Room',
        location: 'Townhall'&&'Downtown',
      },
      
  ].filter((card) => {
    return (
      (filterPrice === '' || card.price === filterPrice) &&
      (filterLocation === '' || card.location === filterLocation)
    );
  });
        
  return (
    <section className={`${styles.flexCenter} max-w-[500px] h-[800px]`}>
     <div className="page">
      <div className="menu">
        <h2 className='text-dimWhite'>Filters</h2>
        <label className='title-color'>
          Room or Equipment:
          <select className="option-color" value={filterPrice} onChange={handlePriceFilterChange}>
            <option className="option-color" value="">All</option>
            <option className="option-color" value="Room">Room</option>
            <option className="option-color" value="Equipment">Equipment</option>
          </select>
        </label>
        <label className='title-color '>
          Location:
          <select className="option-color" value={filterLocation} onChange={handleLocationFilterChange}>
            <option className="option-color"value="">All</option>
            <option className="option-color" value="Downtown">Downtown</option>
            <option className="option-color" value="Centertown">Centertown</option>
            <option className="option-color" value="Townhall">Townhall</option>
            <option className="option-color" value="Cn Tower">Cn Tower</option>
          </select>
        </label>
      </div>
      <div className={styles.paragraph}>
        {filteredCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
     </div>
    </section>
  );
};

export default Page;

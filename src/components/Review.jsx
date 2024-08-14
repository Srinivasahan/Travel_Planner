import React, { useState } from 'react';
import NavBar from './NavBar';

function Review  ()  {
  const [reviews, setReviews] = useState([
    "Great experience! The tour was well-organized and enjoyable. The sights were breathtaking, and the guide was knowledgeable. Everything was perfectly arranged, from the accommodation to the activities. I highly recommend this tour to anyone looking for a memorable vacation. The attention to detail and customer service were top-notch, making this trip an unforgettable experience. I appreciated the smooth logistics and the way everything was taken care of without any hassles. Overall, a fantastic experience that exceeded my expectations in every way.",
    "I loved the scenery and the guide was very knowledgeable. The journey was smooth and comfortable, and the itinerary was well-planned. Every day was filled with exciting activities and opportunities to explore new places. The accommodation was cozy, and the meals were delightful. The guide shared interesting facts and stories that made the experience even more enriching. This trip offered a perfect balance of relaxation and adventure. I felt truly pampered and well taken care of throughout the entire trip.",
    "A fantastic trip! Highly recommended for a relaxing vacation. The tour was beautifully organized with every detail thoughtfully planned. The scenery was stunning, and the pace of the trip allowed us to fully appreciate each destination. The activities were enjoyable and catered to all interests. The accommodation was comfortable, and the food was excellent. The guide was friendly and professional, providing insightful commentary and assistance. Overall, it was a perfect blend of relaxation and exploration, making it a truly memorable experience.",
    "The activities were fun and the service was excellent. Each day brought new adventures and opportunities to experience different aspects of the destination. The staff were attentive and went above and beyond to ensure our comfort and satisfaction. The accommodations were of high quality, and the meals provided were delicious. The tour offered a great mix of guided tours and free time, allowing us to explore at our own pace. It was a well-rounded trip that left me with wonderful memories.",
    "Very memorable trip with breathtaking views. The tour was well-organized, and the itinerary was well thought out. Each stop offered something unique and exciting, with ample time to explore and take in the beauty of the surroundings. The guide was knowledgeable and passionate about the destinations, adding depth to the experience. The accommodations were comfortable and provided a relaxing retreat after a day of sightseeing. Overall, it was an amazing trip that I will cherish for years to come.",
    "The accommodation was top-notch and the itinerary was well-planned. Each day was packed with interesting activities and opportunities to learn about the local culture and history. The guide was friendly and provided excellent insights throughout the tour. The meals were delicious, and the accommodations were comfortable, providing a relaxing end to each day. The balance of guided tours and free time was perfect, allowing us to enjoy the trip at our own pace. I would definitely recommend this tour to others.",
    "A wonderful experience! The trip exceeded my expectations. The tour was expertly organized, and the destinations were absolutely stunning. The accommodations were first-class, offering comfort and convenience throughout the trip. The guide was personable and well-informed, enhancing the overall experience with engaging stories and insights. The activities were diverse and enjoyable, catering to a range of interests. The attention to detail and the quality of service provided made this a truly memorable trip that I would gladly recommend to friends and family.",
    "Great value for money. I would definitely book again. The tour offered excellent experiences at a reasonable price, making it an affordable option for a high-quality trip. The organization was impressive, with every detail meticulously planned. The accommodations were comfortable, and the activities were well-curated to provide a rich and enjoyable experience. The guide was professional and friendly, ensuring that everyone had a great time. The value for money aspect was particularly impressive, providing a great balance of cost and quality.",
    "The trip was smooth and enjoyable from start to finish. The logistics were well-handled, making the entire experience hassle-free. The accommodations were comfortable and conveniently located, and the activities were engaging and well-organized. The guide was knowledgeable and provided useful information about each destination. The meals were tasty, and the overall quality of the tour was excellent. The attention to detail and the level of service provided ensured that the trip was enjoyable and memorable. I would highly recommend this tour to others.",
    "I had a great time. The guides were friendly and informative, and the tour was well-paced. Each day offered new and exciting experiences, with ample time to explore and enjoy the destinations. The accommodations were comfortable, and the meals provided were of high quality. The itinerary was thoughtfully planned, allowing us to see and do a lot without feeling rushed. The overall experience was enriching and enjoyable, and I would definitely consider booking another tour with this company in the future."
  ]);
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview('');
    }
  };

  return (
    <>
    <NavBar/>
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {reviews.map((review, index) => (
          <div
            style={{
              flex: '1 1 calc(33.333% - 16px)',
              boxSizing: 'border-box',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            key={index}
          >
            <p>{review}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          style={{
            width: '100%',
            height: '100px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            resize: 'none',
          }}
        ></textarea>
        <button
          onClick={handleAddReview}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Add Review
        </button>
      </div>
    </div>    </>

  );
};

export default Review;

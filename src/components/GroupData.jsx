import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const GroupData = [
  {
    id: '1',
    name: 'Pondicherry',
    image: 'https://gupteswarsatapathy.wordpress.com/wp-content/uploads/2010/01/dsc00002.jpg',
    extraImages: [
     'https://wanderlustgary.com/wp-content/uploads/2022/04/Auroville.jpg',
      'https://media.istockphoto.com/id/1399866582/photo/pondicherry-beach-in-south-india.webp?b=1&s=170667a&w=0&k=20&c=Ajytd4IRFTSFSEZvS8Z4yhveqnMJVfVJ-RWr8OZV6jQ=',
      'https://assets.cntraveller.in/photos/60ba05b345469a6a570b20a5/master/w_1600%2Cc_limit/wakeupondy.jpg',
    ],
    videos: [
     'https://videos.pexels.com/video-files/4260171/4260171-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/2355570/2355570-sd_640_360_24fps.mp4'
    ],
    schedule: [
      { day: 1, description: 'Arrival, Local Sightseeing, Jagatsukh' },
      { day: 2, description: 'Visit Solang Valley, Old Manali, Rohtang La' },
      { day: 3, description: 'Friendship Peak, Beas River, River Rafting' },
      { day: 4, description: 'Van Vihar National Park, Mall Road Market, Departure' },
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 10000
  },
  {
    id: '2',
    name: 'SriLanka',
    image: 'https://www.asgam.com/wp-content/uploads/2022/11/lotus-tower.jpg',
    extraImages: [
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/sigiriya-rock-fortress--sri-lanka-064137412-16x9_0.jpg?VersionId=YlB_EmcxgFk6l9Bd0hmC0PXAYlcLB4ya',
      'https://st2.depositphotos.com/1609126/7800/i/950/depositphotos_78008644-stock-photo-temple-in-colombo-sri-lanka.jpg',
      'https://cdn.britannica.com/07/118507-050-6B13285E/Town-hall-Colombo-Sri-Lanka.jpg',
      
      
    ],
    videos: [
      'https://videos.pexels.com/video-files/4231734/4231734-sd_640_360_24fps.mp4','https://videos.pexels.com/video-files/5955965/5955965-sd_640_360_30fps.mp4'
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ), schedule: [
      { day: 1, description: 'Arrival , Local Sightseeing, Pine Forest, Vattakanal Waterfalls ' },
      { day: 2, description: 'Silent Valley View Point, Kukkal Caves, Solar Physical Observatory' },
      { day: 3, description: 'Dolphin Nose, Pillar Rocks, Guna Cave' },
      { day: 4, description: 'Poombarai Village View, Kodaikanal Lake, Departure' },
    ],
    price: 67000
  },
  {
    id: '3',
    name: 'Singapore',
    image: 'https://images.pexels.com/photos/711193/pexels-photo-711193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/326715/pexels-photo-326715.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/6016767/pexels-photo-6016767.jpeg?auto=compress&cs=tinysrgb&w=600',
     
    ],
    videos: [
      'https://videos.pexels.com/video-files/5049371/5049371-sd_640_360_24fps.mp4','https://videos.pexels.com/video-files/1898435/1898435-sd_640_360_25fps.mp4'
    ], schedule: [
      { day: 1, description: 'Arrival , Local Sightseeing, Chapora Fort' },
      { day: 2, description: 'Baga Beach, Scuba Diving, Cruise, ' },
      { day: 3, description: 'Fontainhas and Sao Tome,Anjuna Flea Market, Nightclub' },
      { day: 4, description: 'Colva Beach, Basilica of Bom Jesus, Departure' },
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 55000
  },
  {
    id: '4',
    name: 'Banglore',
    image: 'https://www.holidify.com/images/bgImages/BANGALORE.jpg',
    extraImages: [
      'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/03/Nandi-Hills-Karnataka3.jpg?fit=1024%2C682&ssl=1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8b4kOgCA2Gr81vdYL_nztWMrinWJWn8txzg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdbdkJdXKAJfDpQ77QBwC-DFmiNzmULspFQ&s',
    ],
    videos: [
      'https://videos.pexels.com/video-files/3616039/3616039-sd_640_360_30fps.mp4',
      'https://videos.pexels.com/video-files/6161098/6161098-sd_640_360_30fps.mp4',

    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ), schedule: [
      { day: 1, description: 'Arrival, Varkala Cliff, Darjeeling Cafe' },
      { day: 2, description: 'Varkala Beach, Mangrove Forest Kayaking, Ponnumthuruthu Island' },
      { day: 3, description: 'Anjengo Fort, Kappil Lake, Varkala Lighthouse' },
      { day: 4, description: 'Jatayu Earth Center, Trekking, Archery, Departure' },
    ],
    price: 55000
  },
  {
    id: '5',
    name: 'Rome',
    image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://images.pexels.com/photos/227517/pexels-photo-227517.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    videos: [
      'https://videos.pexels.com/video-files/5912505/5912505-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/5913395/5913395-sd_640_360_30fps.mp4'
    ], schedule: [
      { day: 1, description: 'Arrival , Check-in, Local Sightseeing, Moulin Rouge'  },
      { day: 2, description: 'Place De La Concorde, Parc Asterix' },
      { day: 3, description: 'Disneyland, Eiffel Tower, ' },
      { day: 4, description: 'Paris Zoological Park, Latin Quarter' },
      { day: 5, description: 'Arc De Triomphe, Aquaboulevard Paris, Departure' },
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 55000
  },
  {
    id: '6',
    name: 'US',
    image: 'https://images.pexels.com/photos/2908031/pexels-photo-2908031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/722014/pexels-photo-722014.jpeg?auto=compress&cs=tinysrgb&w=600'
      
    ], schedule: [
      { day: 1, description: 'Arrival, Check-in, Local Sightseeing, Dubai Museum' },
      { day: 2, description: 'Burj Khalifa,Dubai Frame,Dubai Mall' },
      { day: 3, description: 'Burj Al Arab,,Marina Dhow Cruise' },  
      { day: 4, description: 'Atlantis Aquaventure Waterpark,Ferrari World Yas Island, ', },
      { day: 5, description: 'Dessert Safari,Camel Ride,Belly Dance Show ' },
      { day: 6, description: 'Ski Dubai,The Dubai Fountain, Departure' },
    ],
    videos: [
      'https://videos.pexels.com/video-files/11960647/11960647-sd_640_360_24fps.mp4',
      'https://videos.pexels.com/video-files/3578881/3578881-sd_640_360_30fps.mp4'
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 55000
  }
];


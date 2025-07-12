import ann from '../assets/images/ann.avif';
import run from '../assets/images/funrun.jpeg';
import vol from '../assets/images/vol.avif';
import cricket from '../assets/images/cricket.jpg';
import music2 from '../assets/images/music2.jpg';
import vijay2 from '../assets/images/vijay2.jpeg';

const events = [
  {
    id: 1,
    name: 'Annual Charity Gala',
    image: ann,
    date: 'Apr 15, 2025',
    time: '7:00 PM',
    venue: 'Taj Place, New Delhi',
    googlemap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789012%3A0x1234567890123456!2sTaj%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1612345678901',
    description: 'Join us for an evening of inspiration, connection, and fundraising at our annual gala. Enjoy fine dining, entertainment, and hear from those who have benefited from your support.',
  },
  {
    id: 2,
    name: 'Global Virtual 5K Run/Walk',
    image: run,
    date: 'May 22, 2025',
    time: '8:00 PM',
    venue: 'Jawaharlal Nehru Stadium, Delhi',
    googlemap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789012%3A0x1234567890123456!2sJawaharlal%20Nehru%20Stadium%2C%20Delhi!5e0!3m2!1sen!2sin!4v1612345678901',
    description: 'Participate in our virtual 5K from anywhere in the world! Walk, run, or jog to raise funds for clean water projects while connecting with our global community of supporters.',
  },
  {
    id: 3,
    name: 'Volunteer Training Workshop',
    image: vol,
    date: 'Jun 8, 2025',
    time: '10:00 AM',
    venue: 'Sree Kanteerava Stadium, Bengaluru',
    googlemap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789012%3A0x1234567890123456!2sSree%20Kanteerava%20Stadium%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1612345678901',
    description: 'Learn how you can make a difference through volunteering! This workshop will provide training, resources, and information about local and international volunteer opportunities.',
  },
  {
    id: 4,
    name: 'The Ultimate Cricket Match For Charity',
    image: cricket,
    date: 'Apr 15, 2025',
    time: '7:00 PM',
    venue: 'Taj Place, New Delhi',
    googlemap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789012%3A0x1234567890123456!2sTaj%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1612345678901',
    description: 'This exciting event brings together local teams to compete on the field, all in support of a great cause. Whether you\'re a player or a spectator, your participation will help raise funds for CompassionConnect needy people.',
  },
  {
    id: 5,
    name: 'Rock for a Reason',
    image: music2,
    date: 'May 22, 2025',
    time: '8:00 PM',
    venue: 'Jawaharlal Nehru Stadium, Delhi',
    googlemap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789012%3A0x1234567890123456!2sJawaharlal%20Nehru%20Stadium%2C%20Delhi!5e0!3m2!1sen!2sin!4v1612345678901',
    description: 'Featuring local bands and talented musicians, this special evening aims to raise funds for a great cause. All proceeds will support CompassionConnect, helping provide essential resources and support to those in need.',
  },
  {
    id: 6,
    name: 'A Night of Giving',
    image: vijay2,
    date: 'Jun 8, 2025',
    time: '10:00 AM',
    venue: 'Sree Kanteerava Stadium, Bengaluru',
    googlemap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789012%3A0x1234567890123456!2sSree%20Kanteerava%20Stadium%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1612345678901',
    description: 'Join us for an unforgettable Celebrity Charity Night, where glamour meets philanthropy! This star-studded event brings together top celebrities for a night of live performances, exclusive meet-and-greets, and a silent auction.',
  }
];

export default events;

import { Feature, Testimonial, ProcessStep } from '../types';
import { Car, SprayCan, Calendar, MapPin, Shield, BadgePercent } from 'lucide-react';

export const NAV_LINKS = [
  { title: 'Home', href: '#' },
  { title: 'Features', href: '#features' },
  { title: 'How It Works', href: '#process' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Download', href: '#download' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Easy Booking',
    description: 'Schedule car wash services with just a few taps, right from your phone.',
    icon: 'Calendar',
  },
  {
    id: 2,
    title: 'Home Service',
    description: 'Get your vehicle cleaned right at your doorstep. No need to drive anywhere.',
    icon: 'MapPin',
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description: 'All service providers are vetted and quality-checked for consistent results.',
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'Special Offers',
    description: 'Regular discounts and loyalty rewards for frequent customers.',
    icon: 'BadgePercent',
  },
  {
    id: 5,
    title: 'Multiple Vehicle Types',
    description: 'From compact cars to SUVs and trucks, we service all vehicle types.',
    icon: 'Car',
  },
  {
    id: 6,
    title: 'Customizable Packages',
    description: 'Choose from basic wash to premium detailing based on your needs.',
    icon: 'SprayCan',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Download ShineSync',
    description: 'Get the app from your app store and create an account in minutes.',
    icon: 'Download',
  },
  {
    id: 2,
    title: 'Select Service',
    description: 'Browse through available services and packages near you.',
    icon: 'ClipboardList',
  },
  {
    id: 3,
    title: 'Schedule',
    description: 'Pick a convenient date and time for your vehicle wash.',
    icon: 'Calendar',
  },
  {
    id: 4,
    title: 'Confirm Booking',
    description: 'Review details and confirm your booking with secure payment.',
    icon: 'CheckCircle',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Customer',
    content: 'ShineSync has transformed how I maintain my car. With my busy schedule, getting a professional wash at home is incredibly convenient.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Service Provider',
    content: 'Joining ShineSync has helped me grow my car wash business tremendously. The platform connects me with new customers every day.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Customer',
    content: 'The quality of service is consistently excellent. I love being able to schedule washes for early morning before heading to work.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
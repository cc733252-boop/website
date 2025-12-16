import React from 'react';
import { TimelineItem, DaySchedule, Benefit } from './types';
import { Monitor, Cpu, Rocket, DollarSign, Briefcase } from 'lucide-react';

export const HERO_BG_IMAGE = "https://framerusercontent.com/images/Qa5WbSuFF1gKA5xZS7Hu9PBANTM.jpg";
export const IMAN_HERO_IMAGE = "https://framerusercontent.com/images/eSz1O9gkKFmYetrG5Bl5kNCMEZ8.png";
export const LOGO_IMAGE = "https://framerusercontent.com/images/SnueKU5nZbte8gbFQ8UtDmTje3g.png";
export const SCHEDULE_VIDEO_URL = "https://framerusercontent.com/assets/25vAAVNHXPB5rX5qv52YL576GE.webm";

export const DAYS_DATA: DaySchedule[] = [
  {
    day: "DAY 01",
    date: "JAN 11th 1 PM EST",
    title: "The Best AI Business Model for 2026",
    description: "Learn how to make money online by partnering with people who already have audiences, while you stay completely invisible and use AI to do the heavy lifting.",
    icon: <Briefcase className="w-6 h-6 text-white" />
  },
  {
    day: "DAY 02",
    date: "JAN 12th 1 PM EST",
    title: "Making AI your Super Employee",
    description: "I'll show how to use AI to almost fully automate the best AI-powered business model of 2026, even if you have no previous experience.",
    icon: <Cpu className="w-6 h-6 text-white" />
  },
  {
    day: "DAY 03",
    date: "JAN 13th 1 PM EST",
    title: "The Simple Launch System",
    description: "How to start generating money in a few days without ever showing your face using our AI Model.",
    icon: <Rocket className="w-6 h-6 text-white" />
  },
  {
    day: "DAY 04",
    date: "JAN 14th 1 PM EST",
    title: "The $57.9M Launch Strategy",
    description: "A full breakdown of how a little-known man generated $57.9M while staying entirely in the shadows.",
    icon: <DollarSign className="w-6 h-6 text-white" />
  },
  {
    day: "DAY 05",
    date: "JAN 18th 1 PM EST",
    title: "Building a Business LIVE!",
    description: "It's time to get our hands dirty, I'm going to build an AI online business LIVE in one sitting, walking you through the exact step-by-step process.",
    icon: <Monitor className="w-6 h-6 text-white" />
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    title: "It All Started With a Promise to My Mom",
    description: "At 16, all I wanted was to provide for my mom. I promised her life would be different. Built a six-figure-per-month agency and made sure she never had to worry about money again.",
    image: "https://framerusercontent.com/images/gY0rn6rqqodSSxMkf9Om0MdDmhs.jpg",
    imageAlt: "Young Iman"
  },
  {
    id: 2,
    title: "Turned My Agency Into a Multi-Million $ Digital Product",
    description: "After scaling my agency successfully, hundreds of people reached out asking me to teach them how I did it. So I created my first digital product, a complete system for building agencies. It sold millions and created some of the most documented success stories in the entire industry.",
    image: "https://framerusercontent.com/images/ZBsoZGWVyFkuOjahCeVWQwkIk.png",
    imageAlt: "Agency Accelerator",
    isReversed: true
  },
  {
    id: 3,
    title: "Co-Owner of a Platform Where Users Earned $2B+ From Online Sales",
    description: "I saw an opportunity in the creator economy platform space and invested heavily in Whop, a company that lets people sell digital products and run online businesses with zero hassle. Today, it's processed over $2 billion in payments, with thousands of creators using AI to scale their income.",
    image: "https://framerusercontent.com/images/o5FqvMdQVLSlOpk6kfovDPe9U.png",
    imageAlt: "Whop Co-Owner"
  },
  {
    id: 4,
    title: "I'm Not Just a Co-Owner, I Also Hold The Sales Record on the Platform",
    description: "I'm Whop's biggest power user. I've shattered every single record: highest revenue in 1 day, 7 days, and 30 days. Why? Because I don't just teach systems, I run them myself, live in the market, every single day.",
    image: "https://framerusercontent.com/images/KEVaYcaW4rQ0WPTliMylaI1Fk4Q.jpeg",
    imageAlt: "Sales Record",
    isReversed: true
  },
  {
    id: 5,
    title: "Acquired Consulting.com",
    description: "Acquired Consulting.com, one of the most successful online education companies ever. Clients paid $80M+ to access their Consulting programs before my acquisition, and now I'm scaling it even further.",
    image: "https://framerusercontent.com/images/pVhzfju0BHN3H7yu0WCsfEeV0r8.jpg",
    imageAlt: "Consulting.com Acquisition"
  },
  {
    id: 6,
    title: "Registrants Who Implemented the System last time generated $8.9M in 90 Days",
    description: "A few months ago, I hosted a challenge showing people how to make money online with AI. Those who actually took action generated $8.9 million in tracked earnings in just 90 days.",
    image: "https://framerusercontent.com/images/HFy019Wh2YecMe2zABJOJgie2o.png",
    imageAlt: "Results Graph",
    isReversed: true
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "To Have Extra Income",
    description: "Without having to quit what you already do.",
    image: "https://framerusercontent.com/images/2jtuZ7xvs6aJqB9tV5ZveYCVa4o.jpg"
  },
  {
    title: "To Have Geographic Freedom",
    description: "Work from anywhere in the world you want.",
    image: "https://framerusercontent.com/images/2CEsqxOx02SUYM9ENbteenImz8.jpg"
  },
  {
    title: "To Have Time Freedom",
    description: "Work when you want, with whom you want.",
    image: "https://framerusercontent.com/images/mnmTUSGedM3QVofByU7nT9IBM0.jpeg"
  }
];

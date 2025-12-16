import React from 'react';

export interface TimelineItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

export interface DaySchedule {
  day: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  image: string;
  linkText?: string;
}
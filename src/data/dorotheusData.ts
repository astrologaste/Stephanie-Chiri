import { DorotheusTable } from '../types';

export const dorotheusTable: DorotheusTable = {
  aries: {
    ruler: 'Mars',
    exaltation: { planet: 'Sun', degree: 19 },
    triplicity: ['Sun', 'Jupiter', 'Saturn'],
    terms: [
      { planet: 'Jupiter', degree_start: 0, degree_end: 6 },
      { planet: 'Venus', degree_start: 6, degree_end: 12 },
      { planet: 'Mercury', degree_start: 12, degree_end: 20 },
      { planet: 'Mars', degree_start: 20, degree_end: 25 },
      { planet: 'Saturn', degree_start: 25, degree_end: 30 }
    ],
    faces: ['Mars', 'Sun', 'Venus']
  },
  taurus: {
    ruler: 'Venus',
    exaltation: { planet: 'Moon', degree: 3 },
    triplicity: ['Venus', 'Moon', 'Mars'],
    terms: [
      { planet: 'Venus', degree_start: 0, degree_end: 8 },
      { planet: 'Mercury', degree_start: 8, degree_end: 14 },
      { planet: 'Jupiter', degree_start: 14, degree_end: 22 },
      { planet: 'Saturn', degree_start: 22, degree_end: 27 },
      { planet: 'Mars', degree_start: 27, degree_end: 30 }
    ],
    faces: ['Mercury', 'Moon', 'Saturn']
  },
  gemini: {
    ruler: 'Mercury',
    exaltation: { planet: 'North Node', degree: 3 },
    triplicity: ['Saturn', 'Mercury', 'Jupiter'],
    terms: [
      { planet: 'Mercury', degree_start: 0, degree_end: 6 },
      { planet: 'Venus', degree_start: 6, degree_end: 12 },
      { planet: 'Jupiter', degree_start: 12, degree_end: 17 },
      { planet: 'Mars', degree_start: 17, degree_end: 24 },
      { planet: 'Saturn', degree_start: 24, degree_end: 30 }
    ],
    faces: ['Jupiter', 'Mars', 'Sun']
  },
  cancer: {
    ruler: 'Moon',
    exaltation: { planet: 'Jupiter', degree: 15 },
    triplicity: ['Venus', 'Mars', 'Moon'],
    terms: [
      { planet: 'Mars', degree_start: 0, degree_end: 6 },
      { planet: 'Venus', degree_start: 6, degree_end: 13 },
      { planet: 'Mercury', degree_start: 13, degree_end: 19 },
      { planet: 'Jupiter', degree_start: 19, degree_end: 26 },
      { planet: 'Saturn', degree_start: 26, degree_end: 30 }
    ],
    faces: ['Venus', 'Mercury', 'Moon']
  },
  leo: {
    ruler: 'Sun',
    exaltation: null,
    triplicity: ['Sun', 'Jupiter', 'Saturn'],
    terms: [
      { planet: 'Jupiter', degree_start: 0, degree_end: 6 },
      { planet: 'Venus', degree_start: 6, degree_end: 11 },
      { planet: 'Saturn', degree_start: 11, degree_end: 18 },
      { planet: 'Mercury', degree_start: 18, degree_end: 24 },
      { planet: 'Mars', degree_start: 24, degree_end: 30 }
    ],
    faces: ['Saturn', 'Jupiter', 'Mars']
  },
  virgo: {
    ruler: 'Mercury',
    exaltation: { planet: 'Mercury', degree: 15 },
    triplicity: ['Venus', 'Moon', 'Mars'],
    terms: [
      { planet: 'Mercury', degree_start: 0, degree_end: 7 },
      { planet: 'Venus', degree_start: 7, degree_end: 17 },
      { planet: 'Jupiter', degree_start: 17, degree_end: 21 },
      { planet: 'Mars', degree_start: 21, degree_end: 28 },
      { planet: 'Saturn', degree_start: 28, degree_end: 30 }
    ],
    faces: ['Sun', 'Venus', 'Mercury']
  },
  libra: {
    ruler: 'Venus',
    exaltation: { planet: 'Saturn', degree: 21 },
    triplicity: ['Saturn', 'Mercury', 'Jupiter'],
    terms: [
      { planet: 'Saturn', degree_start: 0, degree_end: 6 },
      { planet: 'Mercury', degree_start: 6, degree_end: 14 },
      { planet: 'Jupiter', degree_start: 14, degree_end: 21 },
      { planet: 'Venus', degree_start: 21, degree_end: 28 },
      { planet: 'Mars', degree_start: 28, degree_end: 30 }
    ],
    faces: ['Moon', 'Saturn', 'Jupiter']
  },
  scorpio: {
    ruler: 'Mars',
    exaltation: null,
    triplicity: ['Venus', 'Mars', 'Moon'],
    terms: [
      { planet: 'Mars', degree_start: 0, degree_end: 7 },
      { planet: 'Venus', degree_start: 7, degree_end: 11 },
      { planet: 'Mercury', degree_start: 11, degree_end: 19 },
      { planet: 'Jupiter', degree_start: 19, degree_end: 24 },
      { planet: 'Saturn', degree_start: 24, degree_end: 30 }
    ],
    faces: ['Mars', 'Sun', 'Venus']
  },
  sagittarius: {
    ruler: 'Jupiter',
    exaltation: { planet: 'South Node', degree: 3 },
    triplicity: ['Sun', 'Jupiter', 'Saturn'],
    terms: [
      { planet: 'Jupiter', degree_start: 0, degree_end: 12 },
      { planet: 'Venus', degree_start: 12, degree_end: 17 },
      { planet: 'Mercury', degree_start: 17, degree_end: 21 },
      { planet: 'Saturn', degree_start: 21, degree_end: 26 },
      { planet: 'Mars', degree_start: 26, degree_end: 30 }
    ],
    faces: ['Mercury', 'Moon', 'Saturn']
  },
  capricorn: {
    ruler: 'Saturn',
    exaltation: { planet: 'Mars', degree: 28 },
    triplicity: ['Venus', 'Moon', 'Mars'],
    terms: [
      { planet: 'Mercury', degree_start: 0, degree_end: 7 },
      { planet: 'Jupiter', degree_start: 7, degree_end: 14 },
      { planet: 'Venus', degree_start: 14, degree_end: 22 },
      { planet: 'Saturn', degree_start: 22, degree_end: 26 },
      { planet: 'Mars', degree_start: 26, degree_end: 30 }
    ],
    faces: ['Jupiter', 'Mars', 'Sun']
  },
  aquarius: {
    ruler: 'Saturn',
    exaltation: null,
    triplicity: ['Saturn', 'Mercury', 'Jupiter'],
    terms: [
      { planet: 'Mercury', degree_start: 0, degree_end: 7 },
      { planet: 'Venus', degree_start: 7, degree_end: 13 },
      { planet: 'Jupiter', degree_start: 13, degree_end: 20 },
      { planet: 'Mars', degree_start: 20, degree_end: 25 },
      { planet: 'Saturn', degree_start: 25, degree_end: 30 }
    ],
    faces: ['Venus', 'Mercury', 'Moon']
  },
  pisces: {
    ruler: 'Jupiter',
    exaltation: { planet: 'Venus', degree: 27 },
    triplicity: ['Venus', 'Mars', 'Moon'],
    terms: [
      { planet: 'Venus', degree_start: 0, degree_end: 12 },
      { planet: 'Jupiter', degree_start: 12, degree_end: 16 },
      { planet: 'Mercury', degree_start: 16, degree_end: 19 },
      { planet: 'Mars', degree_start: 19, degree_end: 28 },
      { planet: 'Saturn', degree_start: 28, degree_end: 30 }
    ],
    faces: ['Saturn', 'Jupiter', 'Mars']
  }
};

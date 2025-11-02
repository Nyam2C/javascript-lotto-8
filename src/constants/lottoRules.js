export const LOTTO_RULES = {
    NUMBER_MIN: 1,
    NUMBER_MAX: 45,
    NUMBERS_PER_TICKET: 6,
};

export const RANK = {
  FIRST: 1,   
  SECOND: 2,  
  THIRD: 3,  
  FOURTH: 4,  
  FIFTH: 5,   
  NONE: 0,    
};

export const PRIZE_BY_RANK ={
  [RANK.FIRST]: 2_000_000_000,
  [RANK.SECOND]: 30_000_000,
  [RANK.THIRD]: 1_500_000,
  [RANK.FOURTH]: 50_000,
  [RANK.FIFTH]: 5_000,
  [RANK.NONE]: 0,
};

export const RANK_LINES = [
  { rank: RANK.FIFTH,  numbers: 3, bonus: false },
  { rank: RANK.FOURTH, numbers: 4, bonus: false },
  { rank: RANK.THIRD,  numbers: 5, bonus: false },
  { rank: RANK.SECOND, numbers: 5, bonus: true  },
  { rank: RANK.FIRST,  numbers: 6, bonus: false },
];
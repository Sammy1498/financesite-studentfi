
export interface Expense {
  id: string;
  category: string;
  amount: number;
  description: string;
  date: string;
}

export interface BudgetAdvice {
  summary: string;
  tips: string[];
  vibe: 'chill' | 'warning' | 'hype';
}

export type ViewState = 'landing' | 'dashboard' | 'waitlist';

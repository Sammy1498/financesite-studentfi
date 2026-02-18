
import React, { useState, useEffect } from 'react';
import { Expense, BudgetAdvice } from '../types';
import { SketchButton, SketchCard, SectionTitle } from './UI';
import { getBudgetAdvice } from '../services/geminiService';

const CATEGORY_ICONS: Record<string, string> = {
  'Food': 'restaurant',
  'Study': 'school',
  'Social': 'group',
  'Rent': 'home',
  'Other': 'payments'
};

export const Dashboard: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [advice, setAdvice] = useState<BudgetAdvice | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !amount) return;

    const newExpense: Expense = {
      id: Math.random().toString(36).substr(2, 9),
      description: desc,
      amount: parseFloat(amount),
      category: category,
      date: new Date().toISOString()
    };

    setExpenses(prev => [newExpense, ...prev]);
    setDesc('');
    setAmount('');
  };

  const removeExpense = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const analyzeBudget = async () => {
    if (expenses.length === 0) return;
    setIsAnalyzing(true);
    try {
      const result = await getBudgetAdvice(expenses);
      setAdvice(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <SectionTitle subtitle="Doodle your way to financial freedom.">Your Student Dashboard</SectionTitle>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <SketchCard rotate="-1deg" className="h-full">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">edit</span>
              Log Expense
            </h3>
            <form onSubmit={addExpense} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1 opacity-60 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">notes</span>
                  What did you buy?
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">shopping_bag</span>
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="e.g. Oat Milk Latte"
                    className="w-full bg-transparent border-2 border-black dark:border-primary rounded-xl p-3 pl-10 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1 opacity-60 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">sell</span>
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold opacity-40">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-transparent border-2 border-black dark:border-primary rounded-xl p-3 pl-7 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 opacity-60 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">category</span>
                    Category
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      {CATEGORY_ICONS[category]}
                    </span>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-transparent border-2 border-black dark:border-primary rounded-xl p-3 pl-10 focus:outline-none appearance-none"
                    >
                      <option>Food</option>
                      <option>Study</option>
                      <option>Social</option>
                      <option>Rent</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <SketchButton type="submit" className="w-full mt-4">
                <span className="material-symbols-outlined">add_circle</span>
                Add doodle
              </SketchButton>
            </form>
          </SketchCard>
        </div>

        {/* List & Summary */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <SketchCard className="flex flex-col items-center justify-center py-10 relative overflow-hidden">
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-primary opacity-10 text-9xl">payments</span>
              <p className="text-sm font-bold opacity-60 uppercase mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">account_balance_wallet</span>
                Total Spent
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-5xl font-black text-primary relative">${totalSpent.toFixed(2)}</p>
                <span className="material-symbols-outlined text-green-500 text-lg">trending_down</span>
              </div>
            </SketchCard>
            <SketchCard rotate="1deg" className="bg-primary text-white relative overflow-hidden">
              <span className="material-symbols-outlined absolute -bottom-2 -right-2 opacity-20 text-8xl">auto_awesome</span>
              <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">smart_toy</span>
                AI Insight
              </h4>
              {isAnalyzing ? (
                <div className="flex items-center gap-2 animate-pulse">
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Thinking about your money...
                </div>
              ) : advice ? (
                <div>
                  <p className="italic mb-4 text-sm md:text-base">"{advice.summary}"</p>
                  <div className="flex flex-wrap gap-2">
                    {advice.tips.slice(0, 2).map((tip, i) => (
                      <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">tips_and_updates</span>
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="opacity-80">Add some expenses and let the AI give you a chill analysis.</p>
                  <SketchButton onClick={analyzeBudget} variant="outline" className="border-white text-white hover:bg-white/10">
                    <span className="material-symbols-outlined">insights</span>
                    Analyze my Vibe
                  </SketchButton>
                </div>
              )}
            </SketchCard>
          </div>

          <SketchCard className="overflow-hidden p-0">
            <div className="p-6 border-b-2 border-dashed border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h4 className="font-black text-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Recent Doodles
              </h4>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">{expenses.length} entries</span>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {expenses.length === 0 ? (
                <div className="p-12 text-center flex flex-col items-center gap-4">
                  <span className="material-symbols-outlined text-5xl opacity-20">inventory_2</span>
                  <p className="opacity-40 italic font-medium">Empty page. Start sketching your spending.</p>
                </div>
              ) : (
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold opacity-60">
                    <tr>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Category</th>
                      <th className="px-6 py-3">Amount</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dashed divide-gray-100 dark:divide-gray-800">
                    {expenses.map((exp) => (
                      <tr key={exp.id} className="hover:bg-primary/5 transition-colors group">
                        <td className="px-6 py-4 font-bold">{exp.description}</td>
                        <td className="px-6 py-4">
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center gap-1 w-fit">
                            <span className="material-symbols-outlined text-[14px]">{CATEGORY_ICONS[exp.category]}</span>
                            {exp.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-black text-primary">${exp.amount.toFixed(2)}</td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => removeExpense(exp.id)}
                            className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all opacity-0 group-hover:opacity-100"
                            title="Delete doodle"
                          >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

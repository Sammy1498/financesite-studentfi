
import { GoogleGenAI, Type } from "@google/genai";
import { Expense, BudgetAdvice } from "../types";

const getAI = () => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const getBudgetAdvice = async (expenses: Expense[]): Promise<BudgetAdvice> => {
  const prompt = `Analyze these student expenses and provide helpful, friendly, lo-fi budgeting advice.
  Expenses: ${JSON.stringify(expenses)}
  
  Keep the tone "chill", "sketched", and "student-friendly". No corporate jargon.`;

  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "A short, chill summary of the spending habits.",
            },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 actionable tips for the student.",
            },
            vibe: {
              type: Type.STRING,
              description: "One of: chill, warning, hype",
            }
          },
          required: ["summary", "tips", "vibe"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return {
      summary: result.summary || "Looking good! Keep sketching your path to financial freedom.",
      tips: result.tips || ["Keep an eye on those coffee runs.", "Ramen is great, but maybe add an egg?", "You're doing better than most!"],
      vibe: result.vibe || 'chill'
    };
  } catch (error) {
    console.error("Error fetching Gemini advice:", error);
    return {
      summary: "I'm currently overthinking my own budget. Check back in a bit!",
      tips: ["Keep saving.", "Stay calm.", "Money is just paper with doodles."],
      vibe: 'chill'
    };
  }
};

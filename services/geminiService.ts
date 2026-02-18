
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches a response from the Gemini AI model based on the provided prompt and chat history.
 */
export const getAIResponse = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are a professional Technical Solutions Architect for 'Sirz'. Your goal is to help potential clients figure out the best web development strategy for their business. Be helpful, technical yet accessible, and professional. Ask questions about their business goals, required features (e.g., e-commerce, user dashboards, custom APIs), target audience, and current tech stack. Focus on how Sirz builds high-performance, SEO-friendly, and conversion-optimized websites using modern frameworks like React and Next.js. Keep responses concise.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with our technical consultant. Please try again or contact us directly!";
  }
};

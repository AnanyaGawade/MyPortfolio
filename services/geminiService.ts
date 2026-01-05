
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from "../constants";

// Corrected initialization to use process.env.API_KEY directly as required by guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for ${PROFILE.name}. 
Your goal is to represent ${PROFILE.name} to potential recruiters, employers, or collaborators.
Here is ${PROFILE.name}'s professional information:
- Role: ${PROFILE.role}
- Skills: ${PROFILE.skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
- Projects: ${PROFILE.projects.map(p => `${p.title}: ${p.description}`).join("; ")}
- Experience: ${PROFILE.experience.map(e => `${e.role} at ${e.company}`).join("; ")}
- Education: ${PROFILE.education.map(edu => `${edu.degree} from ${edu.institution}`).join("; ")}
- Bio: ${PROFILE.bio}

Guidelines:
1. Be professional, friendly, and concise.
2. If you don't know an answer, politely say you don't have that information but invite them to reach out via email (${PROFILE.email}).
3. Always highlight ${PROFILE.name}'s strengths in Computer Engineering.
4. Keep responses under 3 sentences unless asked for details.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently sleeping. Please try again later!";
  }
};

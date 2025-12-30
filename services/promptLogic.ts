
import { EnhancementOptions } from '../types';

export const enhancePrompt = (input: string, options: EnhancementOptions): string => {
  if (!input.trim()) return "";

  let enhanced = input.trim();

  // 1. Role Clarity
  if (options.addRole) {
    enhanced = `Act as an expert consultant and world-class specialist in this topic. Your goal is to provide high-quality, professional, and accurate assistance for the following task:\n\n${enhanced}`;
  }

  // 2. Constraints
  if (options.addConstraints) {
    enhanced += `\n\n### CONSTRAINTS\n- Avoid filler words or unnecessary introductions.\n- Ensure technical accuracy.\n- If you are unsure about a fact, state that you don't know rather than speculating.`;
  }

  // 3. Tone
  if (options.targetTone !== 'neutral') {
    enhanced += `\n\n### TONE & STYLE\nPlease maintain a ${options.targetTone} tone throughout your response.`;
  }

  // 4. Structure
  if (options.addStructure) {
    enhanced += `\n\n### OUTPUT FORMAT\nPlease organize your output using the following structure:\n1. Executive Summary\n2. Detailed Analysis\n3. Actionable Next Steps\n4. Conclusion`;
  }

  return enhanced;
};

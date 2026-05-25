import { AI_SCORE_LEVELS, AI_SCORE_LABELS } from "./constants";

export const getScoreLabel = (score) => {
  if (score >= AI_SCORE_LEVELS.STRONG) {
    return AI_SCORE_LABELS.STRONG;
  }

  if (score >= AI_SCORE_LEVELS.MODERATE) {
    return AI_SCORE_LABELS.MODERATE;
  }

  return AI_SCORE_LABELS.LOW;
};

export const getScoreColor = (score) => {
  if (score >= AI_SCORE_LEVELS.STRONG) return "text-emerald-400";
  if (score >= AI_SCORE_LEVELS.MODERATE) return "text-cyan-400";
  return "text-red-400";
};

export const normalizeScore = (score) => {
  if (!score && score !== 0) return 0;
  if (score > 100) return 100;
  if (score < 0) return 0;
  return Math.round(score);
};
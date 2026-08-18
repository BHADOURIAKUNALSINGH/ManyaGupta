export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  image: string;
  stats?: { value: string; label: string }[];
  caseStudyUrl?: string;
  caseStudy?: {
    challenge: string;
    approach: string;
    solution: string;
    outcome: string;
    resultsList: string[];
  };
}

export const getCaseStudyImage = (projectId: string) => {
  if (projectId === "meetcatch") return "/MeetCatch-external.svg";
  if (projectId === "canon") return "/Canon-external.svg";
  if (projectId === "dodge") return "/Dodge-external.svg";
  return "/meetCatch_Card.png";
};

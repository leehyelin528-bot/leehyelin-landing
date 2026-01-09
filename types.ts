export interface TimelineItem {
  year?: string;
  title: string;
  description?: string;
}

export interface LectureProgram {
  title: string;
  subtitle?: string;
  items: string[];
}

export interface YoutubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnailUrl?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
export interface Issue {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'review' | 'completed';
  location: {
    floor: number;
    position: number;
  };
  dueDate: string;
  progress: {
    phases: Phase[];
    currentPhase: number;
  };
  metrics: {
    type: string;
    value: number;
    unit: string;
  }[];
}

export interface Phase {
  name: string;
  progress: number;
  completed: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
}
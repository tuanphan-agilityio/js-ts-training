interface Participant {
  id: string;
  name: string;
}

enum PROJECT_STATUS {
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

interface ProjectItem {
  id: number;
  logo: string;
  name: string;
  client: string;
  projectManager: Participant;
  status: PROJECT_STATUS;
  startDate: string;
  endDate: string;
}

export { ProjectItem, Participant, PROJECT_STATUS };

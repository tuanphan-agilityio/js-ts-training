import { PROJECT_STATUS, Participant } from '.';

interface Project {
  id: number;
  logo: string;
  name: string;
  client: string;
  projectManager: Participant;
  status: PROJECT_STATUS;
  startDate: string;
  endDate: string;
}

export { Project };

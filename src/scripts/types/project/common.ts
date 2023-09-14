import { PROJECT_STATUS } from '.';

interface Participant {
  id: string;
  name: string;
}

interface Project {
  id: string;
  name: string;
  client: string;
  projectManager: Participant;
  teamMemberIds?: string[];
  status: PROJECT_STATUS;
  startDate: string;
  endDate?: string;
  logo?: string;
  description?: string;
}

export { Participant, Project };

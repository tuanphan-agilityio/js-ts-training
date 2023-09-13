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

interface ProjectForm {
  name: string;
  client: string;
  projectManagerId: string;
  teamMemberIds?: string[];
  status: PROJECT_STATUS;
  startDate: string;
  endDate?: string;
  logo?: string;
  description?: string;
}

type ProjectFormInputs = Required<ProjectForm>;

export { ProjectItem, Participant, PROJECT_STATUS, ProjectForm, ProjectFormInputs };

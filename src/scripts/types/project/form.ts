import { PROJECT_STATUS } from '.';

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

export { ProjectForm, ProjectFormInputs };

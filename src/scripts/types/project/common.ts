import { ProjectForm } from '.';

interface Participant {
  id: string;
  name: string;
}

interface ProjectResponse extends Omit<ProjectForm, 'projectManagerId'> {
  projectManager: Participant;
}

export { Participant, ProjectResponse };

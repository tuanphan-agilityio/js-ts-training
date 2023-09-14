import { Project } from '.';

interface ProjectForm extends Omit<Project, 'projectManager' | 'id'> {
  projectManagerId: string;
}

type ProjectFormInputs = Required<ProjectForm>;

export { ProjectForm, ProjectFormInputs };

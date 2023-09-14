import { Project } from '.';

type ProjectItem = Omit<Project, 'description' | 'teamMemberIds'>;

export { ProjectItem };

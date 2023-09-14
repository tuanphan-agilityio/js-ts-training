import { Participant, Project } from '.';

interface ProjectDetail extends Omit<Project, 'teamMemberIds'> {
  members: Participant[];
}

export { ProjectDetail };

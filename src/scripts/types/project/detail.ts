import { Participant, ProjectResponse } from '.';

interface ProjectDetail extends Omit<ProjectResponse, 'teamMemberIds'> {
  members: Participant[];
}

export { ProjectDetail };

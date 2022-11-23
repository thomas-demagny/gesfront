import {Project} from './project';

export class Phase {
  id!: number;
  code!: string;
  startedAt!: Date;
  status!: boolean;
  updatedAt?: Date;
  amount!: number;
  createdAt!: Date;
  description!: string;
  endedAt!: Date;
  Project!: Project;
}

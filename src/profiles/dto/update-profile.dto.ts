import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileRequestDTO } from './create-profile.dto';

export class UpdateProfileRequestDTO extends PartialType(
  CreateProfileRequestDTO,
) {}

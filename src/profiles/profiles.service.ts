import { Injectable } from '@nestjs/common';
import { CreateProfileRequestDTO } from './dto/create-profile.dto';
import { UpdateProfileRequestDTO } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  create(createProfileRequest: CreateProfileRequestDTO) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileRequest: UpdateProfileRequestDTO) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}

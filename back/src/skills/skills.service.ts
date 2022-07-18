import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userInfo } from 'os';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill, SkillDocument } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skill.name)
    private SkillModel: Model<SkillDocument>,
  ) {}
  create(createSkillDto: CreateSkillDto) {
    const skill = new this.SkillModel(createSkillDto);
    return skill.save();
  }

  findAll() {
    return this.SkillModel.find();
  }

  findOne(id: string) {
    return this.SkillModel.findById(id);
  }

  update(id: string, updateSkillDto: UpdateSkillDto) {
    return this.SkillModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateSkillDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.SkillModel.deleteOne({
      _id: id,
    }).exec();
  }
}

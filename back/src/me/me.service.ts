import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMeDto } from './dto/create-me.dto';
import { UpdateMeDto } from './dto/update-me.dto';
import { Me, MeDocument } from './entities/me.entity';

@Injectable()
export class MeService {
  constructor(@InjectModel(Me.name) private meModel: Model<MeDocument>) {}

  create(CreateMeDto: CreateMeDto) {
    const me = new this.meModel(CreateMeDto);
    return me.save();
  }

  findAll() {
    return this.meModel.find();
  }

  findOne(id: string) {
    return this.meModel.findById(id);
  }

  update(id: string, updateMeDto: UpdateMeDto) {
    return this.meModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateMeDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.meModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}

import { FilterQuery, Model, PipelineStage, UpdateQuery } from "mongoose";

export type Options = {
  limit?: number;
  skip?: number;
  sort?: { [key: string]: 1 | -1 };
};
export class BaseRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    const created = new this.model(data);
    return created.save() as Promise<T>;
  }

  async findAll(filter: FilterQuery<T> = {}, options: Options = {}): Promise<T[]> {
    const query = this.model.find(filter);

    if (options.sort) query.sort(options.sort);
    if (options.limit) query.limit(options.limit);
    if (options.skip) query.skip(options.skip);

    return query.lean().exec() as Promise<T[]>;
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).lean() as Promise<T | null>;
  }

  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    return this.model.findOne(filter).lean() as Promise<T | null>;
  }

  async update(id: string, data: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).lean() as Promise<T | null>;
  }

  async delete(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).lean() as Promise<T | null>;
  }

  async exists(filter: FilterQuery<T>): Promise<boolean> {
    return !!(await this.model.exists(filter));
  }

  async count(filter: FilterQuery<T> = {}): Promise<number> {
    return this.model.countDocuments(filter).exec();
  }

  async aggregate<R = unknown>(pipeline: PipelineStage[]): Promise<R[]> {
    return this.model.aggregate(pipeline).exec() as Promise<R[]>;
  }
}

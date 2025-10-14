import { FilterQuery, Model, UpdateQuery } from "mongoose";

export class BaseRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    const created = new this.model(data);
    return created.save() as Promise<T>;
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    return this.model.find(filter).lean() as Promise<T[]>;
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
}

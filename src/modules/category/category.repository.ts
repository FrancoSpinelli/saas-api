import { BaseRepository } from "../../database/base.repository";
import { CategoryDocument, CategoryModel } from "./category.model";

export class CategoryRepository extends BaseRepository<CategoryDocument> {
  constructor() {
    super(CategoryModel);
  }
}

export const categoryRepository = new CategoryRepository();

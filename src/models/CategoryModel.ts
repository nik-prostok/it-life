import { Document, Schema, Model, model} from 'mongoose';

export interface ICategory extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

const categorySchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

export const category: Model<ICategory> = model<ICategory>('Category', categorySchema);

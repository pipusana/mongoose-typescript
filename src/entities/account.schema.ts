import { Schema } from 'mongoose';

export const AccountSchema = new Schema({
    like: { type: Number, required: true },
    dislike: { type: Number, required: true }
});
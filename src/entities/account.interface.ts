import { Document } from 'mongoose';

export interface AccountEntity extends Document {
    like: number;
    dislike: number;
}
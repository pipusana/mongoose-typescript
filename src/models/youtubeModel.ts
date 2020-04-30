import { Document, Model } from 'mongoose';

declare interface AccountInfo extends Document{
    like: number;
    dislike: number;
}

export interface AccountInfoModel extends Model<AccountInfo> {};
import { Schema, model, Document, Model } from 'mongoose';

declare interface AccountInfo extends Document{
    like: number;
    dislike: number;
}

export interface AccountInfoModel extends Model<AccountInfo> {};


export class Account {
    private _model: Model<AccountInfo>;
    private _collections: string

    constructor() {
        const schema =  new Schema({
            like: { type: Number, required: true },
            dislike: { type: Number, required: true }
        });

        this._collections = 'accounts'
        this._model = model<AccountInfo>(this._collections, schema);  // collections
    }

    public get model(): Model<AccountInfo> {
        return this._model
    }
}
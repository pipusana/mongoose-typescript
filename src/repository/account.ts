import { model, Model } from 'mongoose';
import { AccountEntity } from '../entities/account.interface';
import { AccountSchema } from '../schema/account.schema'

export class AccountRepository {
    private static instance: AccountRepository;
    private _model: Model<AccountEntity>;
    private _collection: string

    constructor() {
        this._collection = 'accounts'
        this._model = model<AccountEntity>(this._collection , AccountSchema);
    }

    public static getInstance() {
        if (!AccountRepository.instance) {
            AccountRepository.instance = new AccountRepository();
        }
        return AccountRepository.instance;
    }

    public async saveEngagement(insertData: object) : Promise<string> {
        const mongooseModel = new this._model(insertData)
        const result = await mongooseModel.save();
        return result.id as string
    }
}
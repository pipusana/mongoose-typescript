import { Connection } from 'mongoose';
import { AccountInfoModel } from '../models/youtubeModel';
import { AccountSchema } from '../entities/account.schema'

export class AccountRepository {
    private static instance: AccountRepository;
    private _models: AccountInfoModel;
    private static _connection: Connection
    private _collection: string

    constructor(accountConnection : Connection) {
        this._collection = 'accounts'
        this._models = accountConnection.model('Account', AccountSchema, this._collection);
        AccountRepository._connection = accountConnection        
    }

    public static Instance() {
        if (!AccountRepository.instance) {
            console.log('*** ---- connection ----- ***')
            AccountRepository.instance = new AccountRepository(AccountRepository._connection);
        }
        return AccountRepository.instance;
    }

    public async saveEngagement(insertData: object) : Promise<string> {
        const mongooseModel = new this._models(insertData)
        const result = await mongooseModel.save();
        return result.id as string
    }
}
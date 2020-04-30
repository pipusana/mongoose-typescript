import { connect, connection, Connection } from 'mongoose';
import { Account, AccountInfoModel } from '../models/youtubeModel';

export class DB {
    private static instance: DB;
    private _db: Connection; 
    private _models: AccountInfoModel;

    private constructor() {
        connect(`mongodb://user:password@127.0.0.1:27017/social_network_account?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true });
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);
        this._models = new Account().model
    }

    public static Models() {
        console.log('--- Models ---')
        if (!DB.instance) {
            console.log('[new] connection')
            DB.instance = new DB();
        }
        return DB.instance;
    }

    public async save(insertData: object) : Promise<string> {
        const mongooseModel = new this._models(insertData)
        const result = await mongooseModel.save();
        return result.id as string
    }

    private connected() {
        console.log('Mongoose has connected');
    }

    private error(error: any) {
        console.log('Mongoose has errored', error);
    }
}
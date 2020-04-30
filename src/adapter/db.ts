import { connect, connection, Connection } from 'mongoose';

export class DB {
    private _db: Connection; 

    constructor(
        username: string,
        password: string,
        host: string,
        post: string,
        dbName: string,
        authName: string,
    ) {
        connect(`mongodb://${username}:${password}@${host}:${post}/${dbName}?authSource=${authName}`, { useNewUrlParser: true, useUnifiedTopology: true });
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);
    }

    private connected() {
        console.log('Mongoose has connected');
    }

    private error(error: any) {
        console.log('**** error', error)
        throw error;
    }
}
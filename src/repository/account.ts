import { DB } from '../adapter/db'

export class AccountRepository {
    constructor(private readonly mongooseAapater: DB) {}

     async save(like: number, dislike: number) {
        const insertData = { like, dislike }
        return { id: await this.mongooseAapater.save(insertData) }
    }
}
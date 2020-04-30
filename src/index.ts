import { AccountRepository } from './repository/account';
import { DB } from './adapter/db';

const username: string ='user'
const password: string ='password'
const host: string ='127.0.0.1'
const post: string ='27017'
const dbName: string ='social_network_account'
const authName: string ='admin'


const connection = new DB(username, password, host, post, dbName, authName).connection()
new AccountRepository(connection)


async function run () {
    const like: number = 1
    const dislike: number = 1 
    const accountRepository =  AccountRepository.Instance()
    console.log('save', await accountRepository.saveEngagement({like, dislike}))
}

async function run2 () {
    const like: number = 2
    const dislike: number = 2
    const accountRepository =  AccountRepository.Instance()
    console.log('save', await accountRepository.saveEngagement({like, dislike}))
}

async function run3 () {
    const like: number = 3
    const dislike: number = 3
    const accountRepository =  AccountRepository.Instance()
    console.log('save', await accountRepository.saveEngagement({like, dislike}))
}

(async () => {
    await run()
    await run2()
    await run3()
})()
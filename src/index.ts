import { AccountRepository } from './repository/account';
import { DB } from './adapter/db';


(async () => {
    const like = 99
    const dislike = 9999
    
    const s1 = DB.Models()
    const s2 = DB.Models()

    console.log('s1', s1)
    console.log('s2', s2)

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }

    const accountRepository = new AccountRepository(s1)
    console.log('save', await accountRepository.save(like, dislike))

})()

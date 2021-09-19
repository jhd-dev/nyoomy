import { IBaseCliArgs } from '../types';
import { BaseCommand } from './base';
import axios from 'axios';
import { GQL_ENDPOINT } from '../constants';

const ME_QUERY = `
    query Me {
        me {
            username
            email
        }
    }
}
`;

export class WhoAmICommand extends BaseCommand {
    constructor() {
        super('whoami', [], 'Check what user is currently logged in, if any');
    }

    public async handler(): Promise<void> {
        const result = await axios({
            url: GQL_ENDPOINT,
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: { query: ME_QUERY },
        });

        console.log(result.data);
        if (result.data?.me?.username && result.data?.me?.email) {
            console.log(`Logged in: ${result.data?.me?.username}`);
            return;
        }
        console.log('Not logged in.');
    }
}

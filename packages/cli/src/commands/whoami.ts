import axios from 'axios';
import { GQL_ENDPOINT } from '../constants';
// import { IBaseCliArgs } from '../types';
import { BaseCommand } from './base';

const ME_QUERY = `
    query Me {
        me {
            username
            email
        }
    }
}
`;

interface WhoAmIResponse {
    data: {
        me: {
            username: string;
            email: string;
        };
    };
}

export class WhoAmICommand extends BaseCommand {
    public constructor() {
        super('whoami', [], 'Check what user is currently logged in, if any');
    }

    public async handler(): Promise<void> {
        try {
            const result: WhoAmIResponse = await axios({
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
        } catch (err: unknown) {
            console.error(err);
            console.log('Not logged in.');
        }
    }
}

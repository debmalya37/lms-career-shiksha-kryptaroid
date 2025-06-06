import 'next-auth';
import { DefaultSession } from 'next-auth';


declare module 'next-auth' {
    interface User{
        _id?: string;
        name?: string;
        course?: string;
        subscription?: number;
    }

    interface Session{
        user: {
            _id?: string;
            name?: string;
            course?: string;
            subscription?: number;
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        _id?: string;
        name?: string;
        course?: string;
        subscription?: number;
    }
}
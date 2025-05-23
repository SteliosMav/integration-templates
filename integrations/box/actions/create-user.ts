import type { NangoAction, ProxyConfiguration, BoxCreateUser, User } from '../../models';
import { boxCreateUserSchema } from '../schema.zod.js';
import type { BoxUser } from '../types';

/**
 * Executes the create user action by validating input, constructing the request configuration,
 * and making the API call to create a new user.
 */
export default async function runAction(nango: NangoAction, input: BoxCreateUser): Promise<User> {
    await nango.zodValidateInput({ zodSchema: boxCreateUserSchema, input });

    const config: ProxyConfiguration = {
        // https://developer.box.com/reference/post-users/
        endpoint: '/2.0/users',
        data: {
            name: `${input.firstName} ${input.lastName}`,
            login: input.email
        },
        retries: 3
    };

    const response = await nango.post<BoxUser>(config);
    const { data } = response;

    const [firstName, lastName] = data.name.split(' ');

    const user: User = {
        id: data.id,
        firstName: firstName || '',
        lastName: lastName || '',
        email: data.login
    };

    return user;
}

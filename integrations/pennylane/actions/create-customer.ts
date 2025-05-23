import type { IndividualCustomerResponse, NangoAction, PennylaneIndividualCustomer, PennylaneSuccessResponse, ProxyConfiguration } from '../../models.js';

export default async function runAction(nango: NangoAction, input: PennylaneIndividualCustomer): Promise<PennylaneSuccessResponse> {
    if (!input.first_name || !input.last_name) {
        throw new nango.ActionError({
            message: 'first_name and last_name required to create a pennylane customer'
        });
    }

    if (!input.country_alpha2) {
        throw new nango.ActionError({
            message: 'country_alpha2 is a required field'
        });
    }

    const postData = {
        customer: {
            ...input,
            customer_type: 'individual'
        }
    };

    const config: ProxyConfiguration = {
        // https://pennylane.readme.io/reference/customers-post-1
        endpoint: '/api/external/v1/customers',
        data: postData,
        retries: 3
    };

    const { data } = await nango.post<IndividualCustomerResponse>(config);

    return {
        success: true,
        source_id: data.customer.source_id
    };
}

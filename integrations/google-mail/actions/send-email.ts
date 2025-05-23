import type { NangoAction, GmailEmailSentOutput, GmailEmailInput } from '../../models';

export default async function runAction(nango: NangoAction, input: GmailEmailInput): Promise<GmailEmailSentOutput> {
    let headerString = '';

    if (input.headers)
        Object.entries(input.headers).forEach(([key, value]) => {
            headerString += `${key}: ${value}\n`;
        });

    const email = `From: ${input.from}\nTo: ${input.to}\n${headerString}Subject: ${input.subject}\n\n${input.body}`;

    const base64EncodedEmail = Buffer.from(email).toString('base64');

    // send the email using nango proxy
    const sentEmailResponse = await nango.proxy({
        method: 'POST',
        endpoint: '/gmail/v1/users/me/messages/send',
        data: {
            raw: base64EncodedEmail
        },
        retries: 3
    });

    return mapEmail(sentEmailResponse.data);
}

function mapEmail(record: any): GmailEmailSentOutput {
    return {
        id: record.id,
        threadId: record.threadId
    };
}

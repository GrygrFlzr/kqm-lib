import fetch from 'node-fetch';

function unicodeStringify(str) {
    return JSON.stringify(str).replace(/[\u007F-\uFFFF]/g, function (chr) {
        return '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).substr(-4);
    });
}

export const get: ServerRoute = async (req) => {
    const host = `https://library.keqingmains.com`;
    const path = req.path.replace(/^\/proxy/, '') || '';
    const headers = {
        ...req.headers,
        host: 'library.keqingmains.com',
    };
    const query = req.query.toString();
    let url = `${host}${path}`;
    if (query !== '') {
        url = `${url}?${query}`;
    }
    try {
        const response = await fetch(url, {
            headers,
            body: null,
            method: 'GET',
        });
        //const contentType = response.headers.get('content-type');
        const text = await response.text();

        const headRegex = /<head(?:.|\n)*?>(?:.|\n)*<\/head>/gimu;
        const bodyRegex = /<body(?:.|\n)*?>(?:.|\n)*<\/body>/gimu;
        const linkRegex = /<a /gi;

        const head = text
            .match(headRegex)[0]
            .replace(/<head(?:.|\n)*?>/gimu, '')
            .replace(/<\/head>/gimu, '');
        const body = text
            .match(bodyRegex)[0]
            .replace(/<body(?:.|\n)*?>/gimu, '')
            .replace(/<\/body>/gimu, '')
            .replace(linkRegex, '<a rel="external" ');

        const encodedHead = unicodeStringify(head);
        const encodedBody = unicodeStringify(body);
        return {
            body: {
                // encode as base64 to prevent svelte-data being interpreted as HTML
                head: Buffer.from(encodedHead).toString('base64'),
                body: Buffer.from(encodedBody).toString('base64'),
            },
        };
    } catch (error) {
        throw error;
    }
};

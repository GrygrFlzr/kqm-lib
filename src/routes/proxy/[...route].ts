import fetch from 'node-fetch';

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

        const head = text
            .match(headRegex)[0]
            .replace(/<head(?:.|\n)*?>/gimu, '')
            .replace(/<\/head>/gimu, '');
        const body = text
            .match(bodyRegex)[0]
            .replace(/<body(?:.|\n)*?>/gimu, '')
            .replace(/<\/body>/gimu, '');
        return {
            body: {
                // encode as base64 to prevent svelte-data being interpreted as HTML
                head: Buffer.from(head).toString('base64'),
                body: Buffer.from(body).toString('base64'),
            },
        };
    } catch (error) {
        throw error;
    }
};

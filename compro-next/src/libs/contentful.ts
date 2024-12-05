import resolveResponse from "contentful-resolve-response"

const base_url = process.env.CONTENTFUL_BASE_URL;
const spacesId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_TOKEN;

export const getMan = async () => {
    const res = await fetch(
        `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=men`,
        {next:{revalidate: 5}}
    )
    const data = await res.json();
    const result = resolveResponse(data);
    return result;
    
}
export const getWomen = async () => {
    const res = await fetch(
        `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=women`,
        {next:{revalidate: 5}}
    )
    const data = await res.json();
    const result = resolveResponse(data);
    return result;
    
}
export const getManSlug = async (slug: string) => {
    const res = await fetch(
        `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=men&fields.slug=${slug}`,
        {next:{revalidate: 0}}
    )
    const data = await res.json();
    const result = resolveResponse(data);
    return result[0];
    
}
export const getWomenSlug = async (slug: string) => {
    const res = await fetch(
        `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=women&fields.slug=${slug}`,
        {next:{revalidate: 0}}
    )
    const data = await res.json();
    const result = resolveResponse(data);
    return result[0];
    
}

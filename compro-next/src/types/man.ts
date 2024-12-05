import { Document } from "@contentful/rich-text-types";

export interface IMan {
    fields: {
        title: string;
        slug: string;
        thumbnail: {
            fields: {
                file:{
                    url: string;
                }
            }
        };
        prices: string;
        descriptions: Document;
    }
}
export interface IWomen {
    fields: {
        title: string;
        slug: string;
        thumbnail: {
            fields: {
                file:{
                    url: string;
                }
            }
        };
        prices: string;
        descriptions: Document;
    }
}
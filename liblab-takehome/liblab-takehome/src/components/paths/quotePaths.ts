import { Base } from "../base";
import { Movie } from "../schema/movie";
import { Quote } from "../schema/quote";
import { ResponseObject } from "../schema/responseObject";
import { filterParams, sortParams } from "../schema/urlParams";

export class Quotes extends Base {
    allQuotes(filter?: filterParams, sort?: sortParams): Promise<ResponseObject<Quote[]>> {
        var params: string[] = [];

        if (filter != null) {
            for (const [key, value] of Object.entries(filter)) {
                params.push(`${key}=${value}`);
            }
        }
        if (sort) {
            params.push(`sort=${sort.field}:${sort.order}`);
        }

        return this.request(`/quote?${params.join("&")}`).then(data => {
            return {
                result: data['docs'] as Quote[],
                success: true
            };
        }).catch(e => {
            return {
                result: null,
                success: false,
                error: e.message
            };
        });
    }

    getQuoteById(id: string): Promise<ResponseObject<Quote>> {
        return this.request(`/quote/${id}`).then(data => {
            return {
                result: data['docs'][0] as Quote,
                success: true
            };
        }).catch(e => {
            return {
                result: null,
                success: false,
                error: `Quote ID not found: ${e.message}`
            };
        });
    }

    getQuotesFromMovieById(id: string): Promise<ResponseObject<Quote[]>> {
        return this.request(`/movie/${id}/quote`).then(data => {
            return {
                result: data['docs'] as Quote[],
                success: true
            };
        }).catch(e => {
            return {
                result: null,
                success: false,
                error: `Movie ID not found: ${e.message}`
            };
        });
    }
    getQuotesFromMovieByName(name: string): Promise<ResponseObject<Quote[]>> {
        return this.request(`/movie?name=${name}`).then(data => {
            try {
                var movieId = data['docs'][0]['_id']
            }
            catch {
                return {
                    result: null,
                    success: false,
                    error: `Movie "${name}" not found`
                };
            }
            return this.request(`/movie/${movieId}/quote`).then(data => {
                return {
                    result: data['docs'] as Quote[],
                    success: true
                };
            });
        }).catch(e => {
            return {
                result: null,
                success: false,
                error: `Movie not found: ${e.message}`
            };
        });
    }
}
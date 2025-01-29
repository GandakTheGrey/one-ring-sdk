import { Base } from "../base";
import { Movie } from "../schema/movie";
import { ResponseObject } from "../schema/responseObject";
import { filterParams, sortParams } from "../schema/urlParams";

export class Movies extends Base {
    allMovies(filter?: filterParams, sort?: sortParams): Promise<ResponseObject<Movie[]>> {
        var params: string[] = [];

        if (filter != null) {
            for (const [key, value] of Object.entries(filter)) {
                if (typeof value === "object" && "value" in value && "filter" in value) {
                    params.push(`${key}${value.filter}=${value.value}`);
                } else {
                    params.push(`${key}=${value}`);
                }
            }
        }
        if (sort) {
            params.push(`sort=${sort.field}:${sort.order}`);
        }

        return this.request(`/movie?${params.join("&")}`).then(data => {
            return {
                result: data['docs'] as Movie[],
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

    getMovieById(id: string): Promise<ResponseObject<Movie>> {
        return this.request(`/movie/${id}`).then(data => {
            return {
                result: data['docs'][0] as Movie,
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

    getMovieByName(name: string): Promise<ResponseObject<Movie>> {
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
            return this.request(`/movie/${movieId}`).then(data => {
                return {
                    result: data['docs'][0] as Movie,
                    success: true
                };
            });
        }).catch(e => {
            return {
                result: null,
                success: false,
                error: `Movie not found: ${e.message}`
            };
        });;
    }
}
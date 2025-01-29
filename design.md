# TheOneSDK Documentation

## allMovies
Returns list of movies. Supports optional filtering and sorting.

### Parameters:
- `filter` (optional, `{key: string, value: string | number | { value: number; filter: FilterType } }`)
	- `key` options: `[name: string, runtimeInMinutes: number, budgetInMillions: number, boxOfficeRevenueInMillions: number, academyAwardNominations: number, academyAwardWins: number, rottenTomatoesScore: number]`
	- `value` options: if string or number, will generate `key=value`
		- For advanced numberic filters, set a filter type
		- Filter Types: `[ "=" | "<" | ">" | ">=" | "<=" | "!=" ]`
- `sort` (optional, `{field: string, order: string}`)
	- `order` options: `["asc" | "desc"]`

### Example:
```sh
# This would only return The Two Towers
const movies = await client.allMovies(
	{ rottenTomatoesScore: { value: 93, filter: ">" },
	  academyAwardWins: 2},
	{field: "name", order:"asc"});
```

## getMovieById
Return a movie based on its ID

### Parameters:
- `id` (required, `string`): movie lookup ID

### Example:
```sh
const movie = await client.getMovieById("5cd95395de30eff6ebccde5d");
```

## getMovieByName
Return a movie based on its name

### Parameters:
- `name` (required, `string`): full name of a movie

### Example:
```sh
const movie = await client.getMovieByName("The Return of the King");
```

## allQuotes
Returns list of all LotR quotes. Supports filters and sorting.

### Parameters:
- `filter` (optional, `{key: string, value: string }`)
	- `key` options: `[ "movie" | "character"]`
- `sort` (optional, `{field: string, order: string}`)
	- `order` options: `["asc" | "desc"]`

### Example:
```sh
# Some might find these foolish
const took = client.allQuotes(
	{ character: "Pippin"}
	{ field: "movie", order: "desc"})
```

## getQuoteById
Returns a single quote based on its ID

### Parameters:
- `id` (required, `string`): quote lookup ID

### Example:
```sh
const quote = await client.getMovieById("5cd96e05de30eff6ebcce83f");
```

## getQuotesFromMovieById
Returns all quotes from the specified movie ID. Supports filtering and sorting.

### Parameters:
- `id` (required, `string`): movie lookup ID
- `filter` (optional, `{key: string, value: string }`)
	- `key` options: `["character"]`
- `sort` (optional, `{field: string, order: string}`)
	- `order` options: `["asc" | "desc"]`

### Example:
```sh
const quotes = await client.getQuotesFromMovieById(
	"5cd95395de30eff6ebccde5d",
	{character: 'Gandalf'});
```

## getQuotesFromMovieByName
Returns all quotes from the specified movie name. Supports filtering and sorting.

### Parameters:
- `name` (required, `string`): movie lookup name
- `filter` (optional, `{key: string, value: string }`)
	- `key` options: `["character"]`
- `sort` (optional, `{field: string, order: string}`)
	- `order` options: `["asc" | "desc"]`

### Example:
```sh
const quotes = await client.getQuotesFromMovieByName(
	"The Return of the King",
	null,
	{field: "character", order: "asc"});
```
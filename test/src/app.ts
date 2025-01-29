import TheOneSDK from '../../liblab-takehome/liblab-takehome/src/index';

// I've spent hours trying to fix jest or mocha configurations in my main package.
// They're not working. Let's test manually

const client = new TheOneSDK({
    apiKey: "ohLa9prVqpStlDfNi4wY"
});

console.log("Testing Movie endpoints")
client.allMovies().then(val => {
    if (val.result.length != 8)
        throw Error("allMovies Failed! Expected length of 8")
    else
        console.log('.')
});

client.allMovies({ academyAwardWins: { value: 1, filter: ">" }}).then(val => {
    if (val.result.length != 6)
        throw Error("allMovies Failed! Expected length of 6")
    else
        console.log('.')
});

// Their sort paramter does not work; I tried it hard-coded to the URL
// In a normal project, I'd just do it locally, but that's outside of this scope.
//client.allMovies(null, {field: "name", order: "asc"}).then(val => {
//    if (val.result[0].name == "The Fellowship of the Ring")
//        throw Error("allMovies Failed! Expected value of `The Fellowship of the Ring`")
//    else
//        console.log('.')
//});

client.getMovieById("5cd95395de30eff6ebccde5d").then(val => {
    if (val.result.name != "The Return of the King")
        throw Error("getMovieById Failed! Expected value of `The Return of the King`")
    else
        console.log('.')
});

client.getMovieById("1").then(val => {
    if (val.success)
        throw Error("getMovieById with invalid ID Passed... but it shouldn't have!")
    else
        console.log('.')
});

client.getMovieByName("The Return of the King").then(val => {
    if (val.result._id != "5cd95395de30eff6ebccde5d")
        throw Error(`getMovieById Failed! Expected id value of '5cd95395de30eff6ebccde5d'. Got ${val.result._id}`)
    else
        console.log('.')
});

client.getMovieByName("Gollum's Journey").then(val => {
    if (val.success)
        throw Error(`getMovieById Failed! Expected success: false`)
    else
        console.log('.')
});

console.log("Testing Quote endpoints")
client.allQuotes().then(val => {
    if (!val.success)
        throw Error("allQuotes Failed!")
    else
        console.log('.')
});

client.allQuotes({ character: "5cd99d4bde30eff6ebccfe2e"}).then(val => {
    if (!val.success)
        throw Error("Pippin's Quotes Failed!")
    else
        console.log('.')
});

client.allQuotes({ character: "7" }).then(val => {
    if (val.success)
        throw Error("Invalid character allQuotes Passed... but it shouldn't have!")
    else
        console.log('.')
});

client.getQuoteById("5cd96e05de30eff6ebccee79").then(val => {
    if (val.result.dialog != "But we have the white wizard. That's got to count for something.")
        throw Error("getQuoteById Failed! Expected value of `But we have the white wizard. That's got to count for something.`")
    else
        console.log('.')
});

client.getQuoteById("1").then(val => {
    if (val.success)
        throw Error("getQuoteById with invalid ID Passed... but it shouldn't have!")
    else
        console.log('.')
});

client.getQuotesFromMovieById("5cd95395de30eff6ebccde5d").then(val => {
    if (val.result[7].movie != "5cd95395de30eff6ebccde5d")
        throw Error("getQuotesFromMovieById failed!")
    else
        console.log('.')
});

client.getQuotesFromMovieById("2").then(val => {
    if (val.success)
        throw Error("getQuotesFromMovieById with invalid ID Passed... but it shouldn't have!")
    else
        console.log('.')
});

client.getQuotesFromMovieByName("The Return of the King").then(val => {
    if (val.result[20].movie != "5cd95395de30eff6ebccde5d")
        throw Error("getQuotesFromMovieByName failed!")
    else
        console.log('.')
})
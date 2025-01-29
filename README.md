# The One SDK

The One SDK to run The One API to rule them all!

## Installation

To install this SDK, run:

```sh
npm install liblab-takehome
```

## Usage

To ustilize, import the SDK into your desired file and create an authenticated client.
You'll need to create an account at [The One API](https://the-one-api.dev/sign-up) to retrieve
your API key. Once aquired, add this to your file:

```sh
import TheOneSDK from "liblab-takehome";

const client = new TheOneSDK({
    apiKey: "YOU_API_KEY"
});
```

Now you're all set up to use it!

```sh
client.getQuotesFromMovieByName("The Fellowship Of the Ring");
```

### Configuration

This SDK is designed to run API located at `https://the-one-api.dev/v2`. If you fork your own,
configure your url in the constructor:

```sh
import TheOneSDK from "liblab-takehome";

const client = new TheOneSDK({
    apiKey: "YOUR_API_KEY",
    baseURL: "YOUR_BASE_URL"
});
```

## Testing

Test cases are included in this repo in the test directory. To run them:

```sh
cd ./liblab-takehome
npm run build
tsc
node ../test/dist/test/src/app.js
```

To test them against a local environment, configure the baseURL in ``test/src/app.ts`

Stay Precious!

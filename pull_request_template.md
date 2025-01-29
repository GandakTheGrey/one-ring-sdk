Please answer the following questions about your work:

0 - What language did you program in?

Typescript

1 - Have you manually tested the SDK?

I have! I run manual tests first so I can see my data types in order to reformat
my schema accordingly.

2 - Did you add a test suite? If so, how will we use it? If not, why?

I wrote a pseudo test suite. Both Jest and Mocha were throwing packaging errors which would
have required me to redo my environment. I'll know for next time!

3 - Did you use any 3rd party library? Why did you use it? What are the tradeoffs?

I only used microbundle to package the SDK. It packages everything nicely with minimal overhead.

4 - Do you feel this SDK makes it easier to interact with the API?

The main benefit for my SDK is that it allows for programatic URL parameters and
enables movie/quote lookup by name instead of a long ID string.

5 - If you had more time, what else would you add?

I would extend the name lookup to character strings, get a proper test suite working,
and better handle TheOneAPI error handling. They return an "Internal Server Error"
if they don't find the value you're looking for. I'd make more logic to communicate what
exactly happened to the user.

6 - What would you change in your current SDK solution?

I reference data['docs'] from the HTTP response. I'd like to handle that in the abstract class.

7 - On a scale of 1 to 10 (10 being the highest), how would you rate this solution?

A solid 8. It works well and is very well organized! With more time, I'd add the above
mentioned features to turn it into a 10.

8 - Anything else we should keep in mind when we evaluate the project?

I built this in a Visual Studio Project. I have run tests outside of that project, so
everything should run smoothly for you guys. If you have any issues, feel free to reach out!
Also, I'm not sure that sorting is working in TheOneAPI. I tried writing a simple call with hardcoded
URL params, and it threw an Internal Server Error.

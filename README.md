# JSDoc to markdown as a service

This is a Zeit [micro](https://github.com/zeit/micro) service to turn a single file of code into markdown, to be shown wherever.

Available at [jsdoc.now.sh](https://jsdoc.now.sh), just post your code as source.

All options are visible at [jsdoc2md/jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/docs/API.md)

Example:

```sh
curl -d '{"source":"/** This is a description of the foo function. */\nfunction foo() {}"}' https://jsdoc.now.sh
```

# License

MIT

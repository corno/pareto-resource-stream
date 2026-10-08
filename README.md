# Stream resource for Pareto

`log paragraph` and `log error paragraph` accept a `paragraph` and an explicit
`indentation` string (typically four spaces) and `newline` string (typically
`"\n"`). They walk the paragraph directly
using Pareto Fountain Pen's chunk serializer and write to stdout or stderr,
with the specified newline after each serialized sentence. No intermediate string lists are
constructed.

These replace `log lines` and `log error lines`. The single-string
`log error line` and raw character output commands are unchanged.

After compiling against the migrated API and Fountain Pen packages, run:

```sh
node --test testdata/paragraph-output.test.mjs
```

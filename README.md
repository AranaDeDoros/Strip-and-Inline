# Strip and Inline

A quick and dirty script that strips html comments and inlines css. Depends on strip-html-comments and juice respectively.

## Usage

```bash
npm run process origin target
```

Where origin is the input folder and target the output. If omitted, origin and target will be considered as a pair of folders named in/ and out/  respectively, located at the current folder.
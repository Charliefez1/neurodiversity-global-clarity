

## Fix: Build Error in index.html

The build is failing because the `<noscript>` block is inside `<head>` and contains HTML body elements (`<h1>`, `<p>`, `<ul>`, etc.). The HTML spec only allows `<link>`, `<style>`, and `<meta>` inside `<noscript>` when it's in the `<head>`.

### Change

Move the `<noscript>` block from `<head>` into `<body>` (just before `<div id="root">`). This is valid HTML and still serves the same purpose for non-JS crawlers.

```text
<body>
  <noscript>
    <style>...</style>
    <h1>Neurodiversity Global</h1>
    ... (existing content) ...
  </noscript>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

Single file change, single line move. Build will pass immediately.


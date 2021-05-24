/**
 * _document.tsx
 * Next.js component intended to add modifications to `index.html` file.
 */

// Node Modules
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

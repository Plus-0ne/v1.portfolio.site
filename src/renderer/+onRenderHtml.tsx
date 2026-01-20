import { escapeInject } from 'vike/server';

export default function onRenderHtml(pageContext: any) {
  const { meta } = pageContext;

  return {
    documentHtml: escapeInject`<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>${meta?.title}</title>
          <meta name="description" content="${meta?.description}" />
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>`
  };
}
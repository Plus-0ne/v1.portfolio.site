// In a declaration file like `renderer/types.d.ts`

import 'vike/types'; // Import this to ensure you are augmenting the correct module

declare global {
  namespace Vike {
    interface Config {
      /**
       * The page's title (optional).
       */
      title?: string | ((pageContext: PageContext) => string),
      description?: string | ((pageContext: PageContext) => string)
      "og:title"?: string | ((pageContext: PageContext) => string)
      "og:description"?: string | ((pageContext: PageContext) => string)
      "og:image"?: string | ((pageContext: PageContext) => string)
      "og:url"?: string | ((pageContext: PageContext) => string);

      



    }
  }
}

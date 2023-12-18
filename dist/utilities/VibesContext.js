import * as React from 'react';
/**
 * VibesContextを単体で利用することもできますが、できる限りVibesProviderを通して利用してください。
 */
export var VibesContext = React.createContext({
    responsive: false,
    portalParent: document.body,
    portalParentRef: undefined,
    lang: 'ja',
});
//# sourceMappingURL=VibesContext.js.map
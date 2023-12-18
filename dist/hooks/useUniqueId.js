import { useEffect, useState } from 'react';
var idCounter = 0;
function createUniqueId(base) {
    return "".concat(base, "_").concat(++idCounter);
}
export default function useUniqueId(base, specifiedId) {
    var _a = useState(''), uniqueId = _a[0], setUniqueId = _a[1];
    useEffect(function () {
        setUniqueId(specifiedId || createUniqueId(base));
    }, [base, specifiedId]);
    return uniqueId;
}
//# sourceMappingURL=useUniqueId.js.map
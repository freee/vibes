import { useEffect, useState } from 'react';

let idCounter = 0;
function createUniqueId(base: string): string {
  return `${base}_${++idCounter}`;
}

export default function useUniqueId(
  base: string,
  specifiedId?: string
): string {
  const [uniqueId, setUniqueId] = useState('');
  useEffect(() => {
    setUniqueId(specifiedId || createUniqueId(base));
  }, [base, specifiedId]);
  return uniqueId;
}

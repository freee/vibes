/**
 * Returns true if using Microsoft Edge
 * Microsoft Edgeを使用している場合にtrueを返す
 */
export const isEdge = () => !!navigator.userAgent.match(/Edg\//);

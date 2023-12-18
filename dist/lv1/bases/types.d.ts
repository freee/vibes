export declare type BaseComponentBorderProps = {
    border?: 'default' | 'alert' | 'notice' | 'success';
};
export declare type BaseComponentPaddingProps = {
    /**
     * paddingの大きさを調整します。
     * 無指定または `medium` の場合は 1.5rem (24px)、`small` で 1rem (16px)、`large` で 2rem (32px)、0のときはpadding無しになります。
     */
    paddingSize?: 'small' | 'medium' | 'large' | 'zero';
};
export declare type FitContentProps = {
    /**
     * `true` にすると `max-width: fit-content` の状態になります
     */
    fitContent?: boolean;
};
export declare type BaseComponentProps = BaseComponentPaddingProps & FitContentProps & {
    /**
     * `true` にすると `display: inline` の状態になります
     */
    inline?: boolean;
    /**
     * (deprecated) `paddingSize` を `small` にしたのと同じ状態になります。
     * @deprecated
     */
    small?: boolean;
};

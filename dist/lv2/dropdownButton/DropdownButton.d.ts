import * as React from 'react';
import { ButtonAppearanceType } from '../../lv1/buttons/Button';
import { DropdownContent } from '../dropdown/types';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { ButtonAriaProps } from '../../utilities/AriaProps';
declare type Props = {
    /**
     * ボタンのラベルとなる文字列。必ず指定してください。 `iconOnly` を使用する場合も必ず指定してください。
     */
    buttonLabel: string;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    dropdownContents: Array<DropdownContent>;
    appearance?: ButtonAppearanceType;
    /**
     * trueにすることでラベルを省略し、アイコンのみのボタンとなります。
     * デフォルトのアイコンは「…」です。
     */
    iconOnly?: boolean;
    iconPosition?: 'left' | 'right';
    /**
     * @deprecated このプロパティは使用されません
     */
    contentsFixed?: boolean;
    /**
     * iconOnly時のデフォルトのアイコンは「…」ですが、任意のアイコンを指定することもできます。
     * アイコンはreact-iconsの利用が想定されています。
     */
    IconOnlyComponent?: React.ElementType;
    /**
     * dropdownを開いた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
     */
    onOpen?: () => void;
    /**
     * dropdownを閉じた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
     */
    onClose?: () => void;
} & MarginClassProps & ButtonAriaProps & CommonProps;
/**
 * ボタンを押すとドロップダウンメニューが表示されるボタン。
 *
 * - 上下キーでフォーカス移動、ESCキーで閉じられます。Tabキーでフォーカスを移動させる場合、メニューの外に出るとボタンへのフォーカスに戻ります
 * - メニューに入れられる項目は「クリック可能な項目（ボタンまたはリンク）」「チェックボックス」「区切り線」「テキスト」です
 *   - クリック可能な項目は `url` を渡されるとリンクとなります。遷移先のURLを特定できる場合は必ず `url` を渡してください
 *   - リンクに `target="_blank"` を渡した場合、右側に OpenInNew アイコンが表示されます。
 * - `iconOnly` を `true` とすることで、ラベルを表示せず「…」アイコンのみのボタンとなります。 **この場合も `aria-label` として使用するため、必ず `buttonLabel` に意味のある文字列を指定してください**
 * - ユーザーが設定したものが並ぶ場合など、項目が多くなるときは `DropdownButton` の使用を検討してください。
 *
 * ## `SelectBox` との違い
 *
 * DropdownButtonは「押下するとドロップダウンメニューを開く **ボタン**」で、SelectBox は「選択肢のなかから一つを選ぶ **フォームの部品** 」です。
 *
 * - `SelectBox` は `TextField` などのフォームコンポーネントと同じく、別に配置した `FormControlLabel` などのラベルを紐付けて使用します。
 *   `DropdownButton` はボタンのラベルが accessible name （スクリーンリーダーが認識する名称）となり、別に配置したラベルを紐付けることはできません。
 * - コンポーネントを操作していないとき、 `SelectBox` は選択中の選択肢の名前を表示します。 `DropdownButton` はボタンのラベル ( `buttonLabel` ) を表示します。
 * - `DropdownButton` のボタンのラベル ( `buttonLabel` ) には、「押下することでメニューが開く」挙動であることが自然な文言を指定してください（「選択中のもの」の表示に使用しないでください）
 *
 * @param props
 */
declare const DropdownButton: (props: Props) => React.ReactElement;
export default DropdownButton;

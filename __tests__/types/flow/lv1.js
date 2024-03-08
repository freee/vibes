// @flow

import * as React from 'react';
import {
  FocusHighlight,
  VisuallyHidden,
  Balloon,
  ColumnBase,
  Container,
  ContentsBase,
  DialogBase,
  FloatingBase,
  MarginBase,
  NegativeMarginBase,
  PopupBase,
  CardBase,
  ScrimBase,
  ScrollableBase,
  ZebraBase,
  Button,
  GlobalNaviButton,
  IconOnlyButton,
  IconOnlyJumpButton,
  IconOnlyBackwardButton,
  InlineLink,
  JumpButton,
  BackwardButton,
  LeftIconButton,
  ListButton,
  PagerButton,
  RightIconButton,
  TabButton,
  TextButton,
  CheckBox,
  RadioButton,
  SearchField,
  SelectBox,
  TextArea,
  TextField,
  ToggleButton,
  OptionButton,
  FormControlLabel,
  GridBlock,
  GridWrapper,
  Note,
  PageTitle,
  Paragraph,
  SectionTitle,
  SubSectionTitle,
  Text,
  Avatar,
  MaterialIcon,
  RequiredIcon,
  StatusIcon,
  AlertSwallow,
  AppStoreBadge,
  CloudSkeletonIllust,
  CloudUploadIllust,
  CsvUploadIllust,
  FileUploadIllust,
  GooglePlayBadge,
  ImageUploadIllust,
  NotFoundSwallow,
  CalendarDate,
  SegmentControlButton,
  StepNumber,
  StepBlock,
  StepBorder,
  Tab,
  WithDescriptionContent,
  WithSideContent,
  Stack,
  BorderTableListCell,
  CheckBoxCell,
  DescriptionListCell,
  DescriptionListHeadCell,
  TableListCell,
  TableListHead,
  TableListHeadCell,
  TableListRow,
  Message,
  ProgressBar,
  Loading,
  InlineSpinner,
  // eslint-disable-next-line import/no-unresolved
} from 'vibes/index';

const marginProps = {
  marginLeft: true,
  marginRight: true,
  marginBottom: true,
  marginTop: true,
  marginSize: 'large',
};

const commonProps = {
  'data-guide': 'guide',
  'data-test': 'test',
  'data-tracking': 'tracking',
  'data-masking': true,
  ma: 1,
  mt: 1,
  mb: 1,
  mr: 1,
  ml: 1,
};

const inputHandlers = {
  onChange: (_e: SyntheticInputEvent<HTMLInputElement>) => {},
  onInput: (_e: SyntheticInputEvent<HTMLInputElement>) => {},
  onFocus: (_e: SyntheticFocusEvent<HTMLInputElement>) => {},
  onBlur: (_e: SyntheticFocusEvent<HTMLInputElement>) => {},
  onKeyDown: (_e: SyntheticKeyboardEvent<HTMLInputElement>) => {},
  onKeyUp: (_e: SyntheticKeyboardEvent<HTMLInputElement>) => {},
};

const buttonAriaProps = {
  'aria-expanded': true,
  'aria-pressed': true,
  'aria-controls': 'hoge',
  'aria-owns': 'hoge',
  'aria-haspopup': true,
  'aria-describedby': 'hoge',
};
const linkAriaProps = {
  'aria-expanded': true,
  'aria-controls': 'hoge',
  'aria-owns': 'hoge',
  'aria-haspopup': true,
  'aria-describedby': 'hoge',
};
const numberInputAriaProps = {
  'aria-valuemin': 0,
  'aria-valuemax': 100,
  'aria-valuenow': 10,
};
const numberInputProps = {
  min: 0,
  max: 100,
  step: 10,
};

const tableRowAriaProps = {
  'aria-level': 1,
  'aria-setsize': 1,
  'aria-posinset': 1,
  'aria-expanded': false,
};

// a11y
// $FlowExpectedError
<VisuallyHidden small="a" />;
<VisuallyHidden {...commonProps}>
  <div />
</VisuallyHidden>;
<VisuallyHidden autoRead={true} assertive id="visually-hidden">
  <div />
</VisuallyHidden>;
<FocusHighlight
  highlightStyle="outset"
  cornerStyle="round"
  inline
  {...commonProps}
>
  <div />
</FocusHighlight>;

export default function App() {
  return (
    <div className="App">
      {/* bases */}
      <Balloon
        small
        border="default"
        position="left"
        verticalPosition="bottom"
        {...marginProps}
        {...commonProps}
      >
        balloon
      </Balloon>
      <ColumnBase
        small
        border="default"
        inline
        paddingSize="small"
        {...marginProps}
        {...commonProps}
      >
        <div />
      </ColumnBase>
      <Container {...marginProps} {...commonProps}>
        <div />
        <div />
      </Container>
      <ContentsBase paddingSize="small" {...marginProps} {...commonProps}>
        <div />
        <div />
      </ContentsBase>
      <DialogBase
        small
        border="default"
        inline
        paddingSize="small"
        message
        {...marginProps}
        {...commonProps}
      >
        <div />
      </DialogBase>
      <FloatingBase
        small
        border="default"
        inline
        paddingSize="small"
        {...commonProps}
        {...marginProps}
      >
        <div />
      </FloatingBase>
      <MarginBase
        marginTop
        marginLeft
        marginRight
        marginBottom
        marginSize="xxLarge"
        {...commonProps}
      >
        <div />
      </MarginBase>
      <NegativeMarginBase
        marginSize="small"
        top
        left
        right
        bottom
        {...commonProps}
      >
        <div />
      </NegativeMarginBase>
      <PopupBase
        small
        border="default"
        inline
        paddingSize="small"
        {...commonProps}
        {...marginProps}
      >
        <div />
      </PopupBase>
      <CardBase
        small
        inline
        clickable
        url="test"
        target="_blank"
        rel="test"
        onClick={(_e: SyntheticMouseEvent<>) => {}}
        onSelfWindowNavigation={() => {}}
        {...commonProps}
        {...marginProps}
      >
        <div />
      </CardBase>
      <ScrimBase small {...commonProps} {...marginProps}>
        <div />
      </ScrimBase>
      <ScrollableBase scrollableX scrollableY {...commonProps}></ScrollableBase>
      <ZebraBase paddingSize="small" {...marginProps} {...commonProps}>
        <div />
      </ZebraBase>
      {/* buttons */}
      <Button
        appearance="primary"
        primary
        danger
        disabled
        small
        large
        href="test"
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        download="test"
        ref={React.createRef<HTMLButtonElement | HTMLAnchorElement>()}
        onClick={(_e: SyntheticMouseEvent<>) => {}}
        onKeyDown={(
          _e: SyntheticKeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
        ) => {}}
        onSelfWindowNavigation={() => {}}
        iconPosition="left"
        IconComponent={StatusIcon}
        width="full"
        {...marginProps}
        {...commonProps}
        {...buttonAriaProps}
        {...linkAriaProps}
      >
        <div />
      </Button>
      <GlobalNaviButton
        IconComponent={StatusIcon}
        href="test"
        current
        onSelfWindowNavigation={() => {}}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </GlobalNaviButton>
      <IconOnlyButton
        IconComponent={StatusIcon}
        primary
        danger
        disabled
        small
        large
        label="test"
        type="button"
        href="test"
        target="test"
        rel="test"
        onSelfWindowNavigation={() => {}}
        onClick={(
          _e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>
        ) => {}}
        onKeyDown={(
          _e: SyntheticKeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
        ) => {}}
        {...marginProps}
        {...commonProps}
        {...buttonAriaProps}
        {...linkAriaProps}
      />
      <IconOnlyJumpButton
        buttonLabel="test"
        url="test"
        disabled
        small
        large
        appearance="primary"
        danger
        target="test"
        type="button"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        onSelfWindowNavigation={() => {}}
        rel="test"
        {...commonProps}
      />
      <IconOnlyBackwardButton
        buttonLabel="test"
        url="test"
        disabled
        small
        large
        appearance="primary"
        danger
        target="test"
        type="button"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        onSelfWindowNavigation={() => {}}
        rel="test"
        {...commonProps}
      />
      <InlineLink
        href="test"
        target="test"
        rel="test"
        onSelfWindowNavigation={() => {}}
        onClick={(
          _e: SyntheticEvent<HTMLAnchorElement | HTMLButtonElement>
        ) => {}}
        {...buttonAriaProps}
        {...linkAriaProps}
        {...commonProps}
      >
        <div />
      </InlineLink>
      <JumpButton
        url="test"
        disabled
        small
        large
        appearance="primary"
        danger
        target="test"
        type="button"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        onSelfWindowNavigation={() => {}}
        rel="test"
        {...marginProps}
        {...commonProps}
      >
        <div />
      </JumpButton>
      <BackwardButton
        url="test"
        disabled
        small
        large
        appearance="primary"
        danger
        type="button"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        onSelfWindowNavigation={() => {}}
        rel="test"
        {...marginProps}
        {...commonProps}
      >
        <div />
      </BackwardButton>
      <LeftIconButton
        IconComponent={StatusIcon}
        primary
        danger
        disabled
        small
        type="button"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </LeftIconButton>
      <ListButton
        selectableItemIndex={0}
        selected
        href="test"
        target="_blank"
        rel="test"
        statusIconText="test"
        statusIconType="done"
        actionButton
        LeftIconComponent={StatusIcon}
        FarRightIconComponent={StatusIcon}
        bgTransparent
        onClick={(
          _e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>
        ) => {}}
        onKeyDown={(
          _e: SyntheticKeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
        ) => {}}
        selectableItemRef={React.createRef<
          HTMLAnchorElement | HTMLButtonElement
        >()}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </ListButton>
      <PagerButton
        current
        disabled
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        small
        {...marginProps}
        {...commonProps}
      >
        <div />
      </PagerButton>
      <RightIconButton
        IconComponent={StatusIcon}
        primary
        danger
        disabled
        small
        type="button"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </RightIconButton>
      <TabButton current small {...marginProps} {...commonProps}>
        <div />
      </TabButton>
      <TextButton
        IconComponent={StatusIcon}
        iconPosition="left"
        id="test"
        url="test"
        target="_blank"
        rel="test"
        noBorder
        disabled
        small
        onClick={(
          _e: SyntheticEvent<HTMLSpanElement | HTMLAnchorElement>
        ) => {}}
        {...buttonAriaProps}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </TextButton>
      {/* forms */}
      <CheckBox
        name="test"
        value="test"
        checked
        required
        autofocus
        disabled
        error
        small
        {...inputHandlers}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </CheckBox>
      <RadioButton
        name="test"
        value="test"
        checked
        required
        autofocus
        disabled
        error
        small
        {...inputHandlers}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </RadioButton>
      <SearchField
        label="test"
        labelledby="test"
        placeholder="test"
        name="test"
        value="test"
        required
        autofocus
        disabled
        error
        small
        large
        {...inputHandlers}
        {...marginProps}
        {...commonProps}
      />
      <SelectBox
        label="test"
        labelledby="test"
        id="selectbox-test"
        options={[
          { name: 'test', value: 'test' },
          { name: 'test', options: [{ name: 'test', value: 'test' }] },
        ]}
        name="test"
        required
        autofocus
        disabled
        error
        small
        large
        alignCenter
        alignRight
        width="small"
        value="test"
        defaultValue="test"
        autoComplete="on"
        onChange={(_e: SyntheticInputEvent<HTMLSelectElement>) => {}}
        onInput={(_e: SyntheticInputEvent<HTMLSelectElement>) => {}}
        onFocus={(_e: SyntheticFocusEvent<HTMLSelectElement>) => {}}
        onBlur={(_e: SyntheticFocusEvent<HTMLSelectElement>) => {}}
        onKeyDown={(_e: SyntheticKeyboardEvent<HTMLSelectElement>) => {}}
        onKeyUp={(_e: SyntheticKeyboardEvent<HTMLSelectElement>) => {}}
        {...marginProps}
        {...commonProps}
      />
      <TextArea
        id="textarea-test"
        label="test"
        labelledby="test"
        placeholder="test"
        name="test"
        value="test"
        defaultValue="text"
        required
        autofocus
        disabled
        error
        small
        large
        autoComplete="on"
        onChange={(_e: SyntheticInputEvent<HTMLTextAreaElement>) => {}}
        onInput={(_e: SyntheticInputEvent<HTMLTextAreaElement>) => {}}
        onFocus={(_e: SyntheticFocusEvent<HTMLTextAreaElement>) => {}}
        onBlur={(_e: SyntheticFocusEvent<HTMLTextAreaElement>) => {}}
        onKeyDown={(_e: SyntheticKeyboardEvent<HTMLTextAreaElement>) => {}}
        onKeyUp={(_e: SyntheticKeyboardEvent<HTMLTextAreaElement>) => {}}
        {...marginProps}
        {...commonProps}
      />
      <TextField
        id="textfield-test"
        label="test"
        labelledby="test"
        placeholder="test"
        name="test"
        value="test"
        required
        autofocus
        disabled
        error
        small
        large
        alignCenter
        alignRight
        maxLength={100}
        width="small"
        autoComplete="on"
        borderless
        ref={React.createRef<HTMLInputElement>()}
        IconComponent={() => <div />}
        onIconClick={(_e) => {}}
        onIconFocus={(_e) => {}}
        onIconBlur={(_e) => {}}
        iconLabel="iconlabel"
        iconAriaProps={buttonAriaProps}
        {...inputHandlers}
        {...numberInputProps}
        {...numberInputAriaProps}
        {...marginProps}
        {...commonProps}
      />
      {/* grids */}
      <GridBlock size="half" {...commonProps}>
        <div />
      </GridBlock>
      <GridWrapper {...marginProps} {...commonProps}>
        <div />
      </GridWrapper>
      <ToggleButton
        type="checkbox"
        name="test"
        value="test"
        toggled
        small
        disabled
        {...commonProps}
      >
        <div />
      </ToggleButton>
      <OptionButton id="test" checked size="medium">
        <div />
      </OptionButton>
      <FormControlLabel
        id="formcontrollabel-test"
        htmlFor="formcontrollabel-test-for"
        required
        {...commonProps}
      >
        あああ
      </FormControlLabel>
      {/* headlines */}
      <Note inline textAlign="left" ellipsis {...marginProps} {...commonProps}>
        <div />
      </Note>
      <PageTitle
        id="test"
        inline
        textAlign="left"
        headlineLevel={1}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </PageTitle>
      <Paragraph
        inline
        textAlign="left"
        ellipsis
        {...marginProps}
        {...commonProps}
      >
        <div />
      </Paragraph>
      <SectionTitle
        id="test"
        inline
        textAlign="left"
        headlineLevel={1}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </SectionTitle>
      <SubSectionTitle
        id="test"
        inline
        textAlign="left"
        headlineLevel={1}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </SubSectionTitle>
      <Text size={0.75} weight="bold" color="P5" {...commonProps}>
        <div />
      </Text>
      {/* icons */}
      <Avatar size="small" imageUrl="hoge" {...commonProps} />
      <MaterialIcon
        label="hoge"
        small
        IconComponent={StatusIcon}
        {...commonProps}
      />
      <RequiredIcon {...commonProps} />
      <StatusIcon type="error" {...commonProps}>
        <div />
      </StatusIcon>
      {/* images */}
      <AlertSwallow {...commonProps} {...marginProps} />
      <AppStoreBadge {...commonProps} {...marginProps} />
      <CloudSkeletonIllust {...commonProps} {...marginProps} />
      <CloudUploadIllust {...commonProps} {...marginProps} />
      <CsvUploadIllust {...commonProps} {...marginProps} />
      <FileUploadIllust {...commonProps} {...marginProps} />
      <GooglePlayBadge {...commonProps} {...marginProps} />
      <ImageUploadIllust {...commonProps} {...marginProps} />
      <NotFoundSwallow {...commonProps} {...marginProps} />
      {/* interactiveParts */}
      <CalendarDate
        date="test"
        dateLabel="test"
        today
        disabled
        secondaryHoliday
        primaryHoliday
        nationalHoliday
        content={{
          type: 'TimeRecord',
          date: 'test',
          status: 'alert',
          dateLabel: 'test',
          openingTime: '2019-01-01',
          endingTime: '2019-12-31',
        }}
        onClickDate={(_date: string) => {}}
        selectableDateRef={(_el: HTMLDivElement) => {}}
        onKeyDown={(
          _e: SyntheticKeyboardEvent<HTMLDivElement>,
          _date: string,
          _onClickDate?: (date: string) => void | Promise<void>
        ) => {}}
        {...commonProps}
      />
      <SegmentControlButton
        current
        small
        large
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        {...commonProps}
      >
        <div />
      </SegmentControlButton>
      <StepNumber number="1" current done disabled small {...commonProps} />
      <StepBlock
        number="test"
        current
        done
        disabled
        small
        {...marginProps}
        {...commonProps}
      >
        <div />
      </StepBlock>
      <StepBorder done separator {...commonProps} />
      <Tab
        current
        small
        selected
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        onBlur={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        {...marginProps}
        {...commonProps}
      >
        <div />
      </Tab>

      {/* layouts */}
      <WithDescriptionContent
        position="vertical"
        renderContent={(_: string) => <div />}
        renderDescriptionContent={() => <div />}
        {...commonProps}
      />
      <WithSideContent
        sideContent={<div />}
        verticalAlign="top"
        {...commonProps}
      >
        <div />
      </WithSideContent>
      <Stack
        direction="horizontal"
        gap={1}
        alignItems="start"
        justifyContent="start"
        wrap="nowrap"
        {...commonProps}
      >
        <div />
      </Stack>

      {/* lists */}
      <BorderTableListCell
        small
        alignCenter
        alignRight
        onClick={() => {}}
        {...commonProps}
      >
        <div />
      </BorderTableListCell>
      <CheckBoxCell
        header
        name="test"
        value="test"
        checked
        disabled
        aria-label="test"
        onChange={(_e: SyntheticInputEvent<HTMLInputElement>) => {}}
        {...commonProps}
      />
      <DescriptionListCell {...commonProps}>
        <div />
      </DescriptionListCell>
      <DescriptionListHeadCell minWidth={1} {...commonProps}>
        <div />
      </DescriptionListHeadCell>
      <TableListCell
        small
        alignCenter
        alignRight
        url="/hoge/fuga"
        onSelfWindowNavigation={() => {}}
        colSpan={2}
        rowSpan={2}
        indentLevel={2}
        {...commonProps}
      >
        <div />
      </TableListCell>
      <TableListHead fixedHeader fixedHeaderOffset={42} {...commonProps}>
        <div />
      </TableListHead>
      <TableListHeadCell
        alignCenter
        alignRight
        ordering="asc"
        onClick={() => {}}
        minWidth={1}
        {...commonProps}
      >
        <div />
      </TableListHeadCell>
      <TableListRow
        onClick={() => {}}
        url="/hoge/fuga"
        onSelfWindowNavigation={() => {}}
        {...tableRowAriaProps}
        {...commonProps}
      >
        <div />
      </TableListRow>

      {/* messages */}
      <Message error notice success info {...marginProps} {...commonProps}>
        test
      </Message>

      {/* ProgressBar */}
      <ProgressBar
        value={1}
        maxValue={100}
        width="full"
        indeterminate
        {...commonProps}
      />

      {/* Loading */}
      <Loading isLoading={false}>children</Loading>
      <Loading isLoading={true}>children</Loading>
      <Loading isLoading={true} coverAll />
      <Loading isLoading={true} coverAll message="hoge" />

      {/* InlineSpinner */}
      <InlineSpinner isLoading={false} large={false} {...commonProps} />
    </div>
  );
}

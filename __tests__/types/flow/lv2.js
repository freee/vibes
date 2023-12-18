// @flow

import * as React from 'react';
import {
  TextField,
  RadioButton,
  CheckBox,
  CardNavigation,
  SelectBox,
  TextArea,
  StatusIcon,
  AccordionPanel,
  BasicTable,
  Breadcrumbs,
  BulletedList,
  ButtonGroup,
  Calendar,
  DatePicker,
  SingleComboBox,
  MultiComboBox,
  DescriptionList,
  MessageDialog,
  MessageDialogConfirm,
  TaskDialog,
  GuideDialog,
  Dropdown,
  DropdownMenuContent,
  DropdownButton,
  NoDataCreated,
  NoSearchResults,
  FileUploader,
  FileDropArea,
  FilterableDropdownButton,
  Footer,
  DateField,
  FormActions,
  FormControl,
  FormControlGroup,
  PhoneNumberField,
  NameField,
  DigitsInput,
  DateInput,
  NumeralCodeInput,
  PasswordField,
  GlobalNavi,
  Header,
  HeadlineArea,
  LineSeparatedList,
  ListButtons,
  ListButtonSelector,
  ListCard,
  ListTable,
  GroupedListTable,
  MessageBlock,
  FloatingMessageBlock,
  MessageIcon,
  NumericTable,
  Pagination,
  Pager,
  PageSelector,
  Paragraph,
  PopupProgressBar,
  StackedBarChart,
  Stepper,
  VerticalSteps,
  TabBar,
  TagBox,
  MiniTag,
  WithAccordionContent,
  WithBalloon,
  WithDropdown,
  WithFilterableDropdown,
  WithPopup,
  SkeletonPageTitle,
  SkeletonSectionTitle,
  SkeletonParagraph,
  SkeletonRectangle,
  SkeletonBlock,
  SkeletonIcon,
  SkeletonCircle,
  SkeletonListTable,
  SkeltonPageTitle,
  SkeltonSectionTitle,
  SkeltonParagraph,
  SkeltonRectangle,
  SkeltonBlock,
  SkeltonIcon,
  SkeltonCircle,
  SkeltonListTable,
  SkeletonDescriptionList,
  SkeletonStackedBarChart,
  WithTOC,
  // eslint-disable-next-line import/no-unresolved
} from 'vibes/index';
import type {
  ComboBoxOption,
  SingleComboBoxOption,
  MultiComboBoxOption,
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

const formHandlers = {
  onChange: (_e: SyntheticInputEvent<*>) => {},
  onInput: (_e: SyntheticInputEvent<*>) => {},
  onFocus: (_e: SyntheticFocusEvent<*>) => {},
  onBlur: (_e: SyntheticFocusEvent<*>) => {},
  onKeyDown: (_e: SyntheticKeyboardEvent<*>) => {},
};

const comboBoxOptions: ComboBoxOption[] = [
  { label: 'hoge', id: 1, keywords: ['hoge', 'fuga'] },
  { label: 'foo', id: 2 },
];

const singleComboBoxOptions: SingleComboBoxOption[] = [
  { label: 'hoge', id: 1, keywords: ['hoge', 'fuga'], subLabel: 'bar' },
  { label: 'foo', id: 2 },
];

export default function App() {
  return (
    <div className="App">
      {/* lv2/accordionPanel */}
      <AccordionPanel
        title="test"
        open
        small
        {...marginProps}
        {...commonProps}
        onClick={() => {}}
      >
        <div />
      </AccordionPanel>
      {/* lv2/basicTable */}
      <BasicTable
        margins={marginProps}
        headers={[
          {
            value: 'test',
            alignCenter: true,
            alignRight: true,
            ordering: 'asc',
            onClick: () => {},
            minWidth: 1,
          },
          { value: <a href="#test">test</a> },
        ]}
        rows={[
          {
            onClick: (_rowIndex: number) => {},
            onSelfWindowNavigation: () => {},
            cells: [
              {
                value: 1,
                alignCenter: true,
                alignRight: true,
                small: true,
              },
              { value: '2' },
            ],
          },
          {
            cells: [{ value: 'link' }],
            url: 'http://example.com',
          },
        ]}
        {...commonProps}
      />

      {/* lv2/breadcrumbs */}
      <Breadcrumbs
        links={[{ title: 'test', url: 'test', onClickNavigator: () => {} }]}
        label="breadcrumbs"
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/bulletedList */}
      <BulletedList
        listContents={[
          {
            value: 'test',
            url: 'test',
            target: '_self',
            rel: 'test',
          },
          {
            value: 'test',
            'data-guide': 'guide',
            'data-test': 'test',
            'data-tracking': 'tracking',
            'data-masking': true,
          },
        ]}
        small
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/buttonGroup */}
      <ButtonGroup responsive align="left" {...marginProps} {...commonProps}>
        <div />
      </ButtonGroup>

      {/* lv2/calendar */}
      <Calendar
        year="2018"
        month="1"
        contents={[
          {
            type: 'timeRecord',
            date: '2019-01-01',
            status: 'notice',
            dateLabel: 'test',
            openingTime: '2019-01-01',
            endingTime: '2019-12-31',
          },
        ]}
        startFromMonday
        nationalHolidays={['test']}
        onClickDate={(_date: string) => {}}
        {...commonProps}
      />
      <DatePicker
        date="2019-12-01"
        onDateClick={(_d: string) => {}}
        minDate="2012-07-09"
        maxDate="2019-12-17"
        {...commonProps}
      />

      {/* lv2/comboBox */}
      <SingleComboBox
        value={{ label: 'hoge', id: 1, keywords: ['hoge', 'fuga'] }}
        options={comboBoxOptions}
        id="single-combobox-test"
        label="test"
        labelledby="test"
        placeholder="test"
        name="test"
        required
        disabled
        error
        small
        large
        width="large"
        listWidth="xSmall"
        emptyMessage={<div />}
        borderless
        trailingItem={{
          onSelect: (_fieldValue: string) => {},
          isVisible: (_fieledValue: string): boolean => {
            return true;
          },
          render: (_fieldValue: string): React.Node => <div />,
        }}
        {...{ ...formHandlers, onChange: (_val?: ComboBoxOption) => {} }}
        {...marginProps}
        {...commonProps}
      />
      <SingleComboBox
        value={{
          label: 'hoge',
          id: 1,
          keywords: ['hoge', 'fuga'],
          subLabel: 'bar',
        }}
        options={singleComboBoxOptions}
        id="single-combobox-test"
        label="test"
        labelledby="test"
        placeholder="test"
        name="test"
        required
        disabled
        error
        small
        large
        width="large"
        listWidth="xSmall"
        emptyMessage={<div />}
        borderless
        trailingItem={{
          onSelect: (_fieldValue: string) => {},
          isVisible: (_fieledValue: string): boolean => {
            return true;
          },
          render: (_fieldValue: string): React.Node => <div />,
        }}
        {...{ ...formHandlers, onChange: (_val?: ComboBoxOption) => {} }}
        {...marginProps}
        {...commonProps}
      />
      <MultiComboBox
        values={[
          { label: 'hoge', id: 1, keywords: ['hoge', 'fuga'], color: 'RE' },
        ]}
        options={[
          { label: 'hoge', id: 1, keywords: ['hoge', 'fuga'], color: 'RE' },
          { label: 'foo', id: 2, color: 'YE' },
        ]}
        id="single-combobox-test"
        label="test"
        labelledby="test"
        placeholder="test"
        name="test"
        required
        disabled
        error
        width="large"
        listWidth="xSmall"
        maxSelectionCount={1}
        emptyMessage={<div />}
        borderless
        {...{ ...formHandlers, onChange: (_val: MultiComboBoxOption[]) => {} }}
        {...commonProps}
      />

      {/* lv2/cardNavigation */}
      <CardNavigation
        navigationContents={[
          {
            title: 'test',
            text: 'test',
            url: '#',
            IconComponent: StatusIcon,
          },
          {
            title: 'test',
            text: 'test',
            url: '#',
            IconComponent: StatusIcon,
          },
          {
            title: 'test',
            text: 'test',
            url: '#',
            IconComponent: StatusIcon,
          },
        ]}
        {...commonProps}
      />

      {/* lv2/descriptionList */}
      <DescriptionList
        listContents={[
          {
            title: <div />,
            value: <div />,
          },
        ]}
        headCellMinWidth={1}
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/dialogs */}
      <MessageDialog
        isOpen
        title="test"
        onRequestClose={(_e: SyntheticEvent<*>) => {}}
        closeButtonLabel="test"
        id="test"
        contentAlign="left"
        {...commonProps}
      >
        <div />
      </MessageDialog>
      <MessageDialogConfirm
        isOpen
        title="test"
        onConfirm={(_e: SyntheticEvent<*>) => {}}
        onRequestClose={(_e: SyntheticEvent<*>) => {}}
        confirmButtonLabel="test"
        closeButtonLabel="test"
        confirmButtonHref="https://example.com"
        confirmButtonTarget="_blank"
        confirmButtonIconPosition="left"
        confirmButtonIconComponent={StatusIcon}
        danger
        disabled
        suspend
        id="test"
        contentAlign="left"
        {...commonProps}
      >
        <div />
      </MessageDialogConfirm>
      <TaskDialog
        isOpen
        title="test"
        onPrimaryAction={(_e: SyntheticEvent<*>) => {}}
        onRequestClose={(_e: SyntheticEvent<*>) => {}}
        primaryButtonLabel="test"
        closeButtonLabel="test"
        danger
        disabled
        id="test"
        headerSideContent={<div />}
        contentLabel="test"
        {...commonProps}
      >
        <div />
      </TaskDialog>
      <GuideDialog
        isOpen
        title="test"
        type="start"
        stepCount={1}
        totalStepCount={100}
        onRequestBackward={(_e: SyntheticMouseEvent<>) => {}}
        backwardButtonLabel="test"
        onRequestForward={(_e: SyntheticMouseEvent<>) => {}}
        forwardButtonLabel="test"
        onRequestClose={(_e: SyntheticMouseEvent<>) => {}}
        closeButtonLabel="test"
        image={{
          src: 'test',
          width: 'test',
          height: 'test',
          alt: 'test',
        }}
        id="test"
        {...commonProps}
      >
        <div />
      </GuideDialog>

      {/* lv2/dropdown */}
      <Dropdown
        contents={[
          {
            type: 'rule',
          },
          {
            type: 'textOnly',
            text: 'test',
          },
          {
            type: 'checkbox',
            text: 'test',
            value: 'test',
            name: 'test',
            onChange: (_e: SyntheticInputEvent<HTMLInputElement>) => {},
            checked: true,
            disabled: true,
          },
          {
            type: 'selectable',
            text: 'test',
            ariaLabel: 'test',
            onClick: (_e: SyntheticEvent<>) => {},
            target: '_blank',
            rel: 'test',
          },
        ]}
        firstSelectableItemRef={(
          _el: ?React.ElementRef<'button' | 'a' | 'input'>
        ) => {}}
        onRequestClose={() => {}}
        align="right"
        positionRelative
        {...commonProps}
      />

      <DropdownMenuContent
        contents={[
          {
            type: 'rule',
          },
          {
            type: 'textOnly',
            text: 'test',
          },
          {
            type: 'checkbox',
            text: 'test',
            value: 'test',
            name: 'test',
            onChange: (_e: SyntheticInputEvent<HTMLInputElement>) => {},
            checked: true,
            disabled: true,
          },
          {
            type: 'selectable',
            text: 'test',
            ariaLabel: 'test',
            onClick: (_e: SyntheticEvent<>) => {},
            target: '_blank',
            rel: 'test',
          },
        ]}
        firstSelectableItemRef={(
          _el: ?React.ElementRef<'button' | 'a' | 'input'>
        ) => {}}
        onRequestClose={() => {}}
        onFocusOut={(_direction: 'upward' | 'downward') => {}}
        {...commonProps}
      />

      {/* lv2/dropdownButton */}
      <DropdownButton
        buttonLabel="button"
        disabled
        small
        large
        appearance="tertiary"
        iconPosition="right"
        IconOnlyComponent={StatusIcon}
        dropdownContents={[
          {
            type: 'rule',
          },
          {
            type: 'textOnly',
            text: 'test',
          },
          {
            type: 'selectable',
            text: 'test',
            ariaLabel: 'test',
            onClick: (_e: SyntheticEvent<>) => {},
          },
        ]}
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/emptyStates} */}
      <NoDataCreated
        actionWord="登録"
        objectName="hoge"
        image={{ src: 'aaa', width: '100', height: '100' }}
        mainText="aaa"
        subText="aaa"
      >
        <div />
      </NoDataCreated>

      <NoSearchResults
        objectName="hoge"
        image={{ src: 'aaa', width: '100', height: '100' }}
        mainText="aaa"
        subText="aaa"
      />

      {/* lv2/fileUploader */}
      <FileUploader
        onFileSelect={() => {}}
        acceptFileTypes={['text/csv']}
        isUploading
        fileLabel="test"
        multiple
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/fileDropArea */}
      <FileDropArea
        onFileSelect={() => {}}
        acceptFileTypes={['text/csv']}
        isUploading
        fileLabel="test"
        multiple
        {...commonProps}
      >
        <div />
      </FileDropArea>

      {/* lv2/filterableDropdownButton */}
      <FilterableDropdownButton
        buttonLabel="button"
        disabled
        small
        large
        appearance="tertiary"
        dropdownContents={[
          {
            type: 'selectable',
            text: 'test',
            ariaLabel: 'test',
            onClick: (_e: SyntheticEvent<>) => {},
            keywords: ['aaa'],
          },
          {
            type: 'checkbox',
            text: 'test',
            onChange: (_e: SyntheticEvent<>) => {},
            keywords: ['aaa'],
          },
        ]}
        iconPosition="left"
        IconComponent={StatusIcon}
        {...commonProps}
      />

      {/* lv2/footer */}
      <Footer
        links={[{ title: 'test', url: 'test' }]}
        AppStoreUrl="test"
        GooglePlayUrl="test"
        disableAppStoreBadge
        disableGooglePlayBadge
        copyright="Copyright 2012-2019 © freee K.K."
        {...commonProps}
      />

      {/* lv2/formBlock */}
      <DateField
        selectedDate="2019-01-01"
        startDate="2019-01-01"
        endDate="2019-01-01"
        small
        disabled
        error
        required
        autoComplete="bday"
        nullable
        onChange={(_date: string | null) => {}}
        onInput={(_date: string | null) => {}}
        onFocus={(_date: string | null) => {}}
        onBlur={(_date: string | null) => {}}
        onKeyDown={(_date: string | null) => {}}
        {...marginProps}
        {...commonProps}
      />
      <FormActions responsive fixed>
        <div />
      </FormActions>
      <FormActions responsive position="fixed">
        <div />
      </FormActions>
      <FormControl
        id="formControl1"
        label="test"
        required
        {...marginProps}
        {...commonProps}
      >
        <TextField />
        <RadioButton />
        <CheckBox />
        <SelectBox />
        <TextArea />
        <NameField />
        <PhoneNumberField />
        <DateField
          selectedDate="2019-01-01"
          startDate="2019-01-01"
          endDate="2019-01-01"
        />
      </FormControl>
      <FormControlGroup {...commonProps}>
        <FormControl>
          <TextField />
        </FormControl>
      </FormControlGroup>
      <NameField
        lastName="Doe"
        firstName="John"
        lastNamePlaceholder="last name"
        firstNamePlaceholder="first name"
        label="name"
        labelledby="idref"
        disabled
        required
        error
        small
        autoComplete="name"
        onChange={(
          _key: 'lastName' | 'firstName',
          _e: SyntheticInputEvent<HTMLInputElement>
        ) => {}}
        onInput={(
          _key: 'lastName' | 'firstName',
          _e: SyntheticInputEvent<HTMLInputElement>
        ) => {}}
        onFocus={(
          _key: 'lastName' | 'firstName',
          _e: SyntheticFocusEvent<HTMLInputElement>
        ) => {}}
        onBlur={(
          _key: 'lastName' | 'firstName',
          _e: SyntheticFocusEvent<HTMLInputElement>
        ) => {}}
        onKeyDown={(
          _key: 'lastName' | 'firstName',
          _e: SyntheticKeyboardEvent<HTMLInputElement>
        ) => {}}
        {...marginProps}
        {...commonProps}
      />
      <PhoneNumberField
        phoneNumberA="000"
        phoneNumberB="0000"
        phoneNumberC="0000"
        placeholderA="000"
        placeholderB="0000"
        placeholderC="0000"
        disabled
        error
        small
        autoComplete="tel"
        onChange={(
          _key: 'a' | 'b' | 'c',
          _e: SyntheticInputEvent<HTMLInputElement>
        ) => {}}
        onInput={(
          _key: 'a' | 'b' | 'c',
          _e: SyntheticInputEvent<HTMLInputElement>
        ) => {}}
        onFocus={(
          _key: 'a' | 'b' | 'c',
          _e: SyntheticFocusEvent<HTMLInputElement>
        ) => {}}
        onBlur={(
          _key: 'a' | 'b' | 'c',
          _e: SyntheticFocusEvent<HTMLInputElement>
        ) => {}}
        onKeyDown={(
          _key: 'a' | 'b' | 'c',
          _e: SyntheticKeyboardEvent<HTMLInputElement>
        ) => {}}
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/formFields */}
      {['xSmall', 'small', 'medium', 'large', 'full'].map((width) => (
        <DigitsInput
          key={width}
          value={0}
          nullable
          id="id_digitsInput"
          label="DigitsInput"
          labelledby="label_digitsInput"
          name="name_digitsInput"
          required
          disabled
          error
          small
          borderless
          width={width}
          autoComplete="off"
          onChange={(_v: number | null) => {}}
          onFocus={(_e: SyntheticFocusEvent<HTMLInputElement>) => {}}
          onBlur={(_e: SyntheticFocusEvent<HTMLInputElement>) => {}}
          onInput={(_e: SyntheticInputEvent<HTMLInputElement>) => {}}
          onKeyDown={(_e: SyntheticKeyboardEvent<HTMLInputElement>) => {}}
          {...marginProps}
          {...commonProps}
        />
      ))}
      {['xSmall', 'small', 'medium', 'large', 'full'].map((width) => (
        <DateInput
          key={width}
          value="2019-01-01"
          id="dateinput-test"
          label="test"
          labelledby="test"
          name="test"
          required
          disabled
          error
          small
          minDate="2012-07-09"
          maxDate="2019-12-17"
          width={width}
          {...{ ...formHandlers, onChange: (_d: string) => {} }}
          {...marginProps}
          {...commonProps}
        />
      ))}
      <NumeralCodeInput
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
        ref={React.createRef<HTMLInputElement>()}
        onChange={(_v: string) => {}}
        onInput={(_e: SyntheticInputEvent<HTMLInputElement>) => {}}
        onFocus={(_e: SyntheticFocusEvent<HTMLInputElement>) => {}}
        onBlur={(_e: SyntheticFocusEvent<HTMLInputElement>) => {}}
        onKeyDown={(_e: SyntheticKeyboardEvent<HTMLInputElement>) => {}}
        onKeyUp={(_e: SyntheticKeyboardEvent<HTMLInputElement>) => {}}
        {...commonProps}
      />
      <PasswordField
        id="passwordfield-test"
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
        width="small"
        autoComplete="current-password"
        ref={React.createRef<HTMLInputElement>()}
        onChange={(_e: SyntheticInputEvent<HTMLInputElement>) => {}}
        onInput={(_e: SyntheticInputEvent<HTMLInputElement>) => {}}
        onFocus={(_e: SyntheticFocusEvent<HTMLInputElement>) => {}}
        onBlur={(_e: SyntheticFocusEvent<HTMLInputElement>) => {}}
        onKeyDown={(_e: SyntheticKeyboardEvent<HTMLInputElement>) => {}}
        onKeyUp={(_e: SyntheticKeyboardEvent<HTMLInputElement>) => {}}
        {...commonProps}
      />

      {/* lv2/globalNavi */}
      <GlobalNavi
        links={[
          {
            title: 'test',
            url: 'test',
            IconComponent: StatusIcon,
            current: true,
            'data-guide': 'guide',
            'data-test': 'test',
            'data-tracking': 'tracking',
            'data-masking': true,
          },
        ]}
        searchUrl="https://support.freee.co.jp/hc/ja/search"
        {...commonProps}
      />

      {/* lv2/header */}
      <Header
        logo={<div />}
        sectionDataList={[
          {
            type: 'plan',
            text: 'test',
            url: 'test',
            IconComponent: StatusIcon,
            iconType: 'default',
            dropdownContents: [
              {
                type: 'selectable',
                text: 'test',
                ariaLabel: 'test',
                onClick: (_: SyntheticEvent<>) => {},
              },
            ],
          },
          {
            type: 'dropdown',
            text: 'test',
            IconComponent: StatusIcon,
            hasBadge: true,
            dropdownContents: [
              {
                type: 'selectable',
                text: <p>test</p>,
                ariaLabel: 'test',
                onClick: (_: SyntheticEvent<>) => {},
                unread: true,
              },
              {
                type: 'textOnly',
                text: <p>test</p>,
              },
            ],
          },
        ]}
        {...commonProps}
      />
      <Header
        logo={<div />}
        sectionDataList={[
          {
            type: 'plan',
            text: 'test',
            url: 'test',
            IconComponent: StatusIcon,
            iconType: 'default',
            dropdownContents: [
              {
                type: 'selectable',
                text: 'test',
                ariaLabel: 'test',
                onClick: (_: SyntheticEvent<>) => {},
              },
            ],
          },
          {
            type: 'dropdown',
            text: 'test',
            IconComponent: StatusIcon,
            hasBadge: true,
            dropdownContents: [
              {
                type: 'selectable',
                text: <p>test</p>,
                ariaLabel: 'test',
                onClick: (_: SyntheticEvent<>) => {},
                unread: true,
              },
              {
                type: 'textOnly',
                text: <p>test</p>,
              },
            ],
          },
        ]}
        {...commonProps}
      />

      {/* lv2/headlineArea */}
      <HeadlineArea
        pageTitle="test"
        statusIconType="done"
        statusIconText="test"
        relatedMenus={<div />}
        {...commonProps}
      >
        <div />
      </HeadlineArea>

      {/* lv2/lineSeparatedList */}
      <LineSeparatedList
        listContents={[
          {
            value: 'test',
          },
          {
            value: <Paragraph>test</Paragraph>,
          },
        ]}
        {...commonProps}
      />

      {/* lv2/listButtons */}
      <ListButtons
        buttons={[
          {
            label: <div />,
            selected: true,
            href: 'test',
            target: '_blank',
            rel: 'test',
            statusIconText: 'test',
            statusIconType: 'success',
            bgTransparent: true,
            onClick: (_e: SyntheticEvent<HTMLButtonElement>) => {},
          },
        ]}
        onKeyDown={(
          _e: SyntheticKeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
        ) => {}}
        selectableItemRef={React.createRef<
          HTMLButtonElement | HTMLAnchorElement
        >()}
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/listButtonSelector */}
      <ListButtonSelector
        buttons={[
          {
            label: <div />,
            selected: true,
            href: 'test',
            target: '_blank',
            rel: 'test',
            statusIconText: 'test',
            statusIconType: 'success',
            bgTransparent: true,
            onClick: (_e: SyntheticEvent<HTMLButtonElement>) => {},
          },
        ]}
        selectedLabel="test"
        selectorLabel="test"
        withActionButton
        actionLabel="test"
        action={() => {}}
        ActionIconComponent={StatusIcon}
        disabled
        {...marginProps}
        {...commonProps}
      ></ListButtonSelector>

      {/* lv2/listCard */}
      <ListCard
        title="test"
        url="test"
        onClick={(_e: SyntheticEvent<HTMLButtonElement>) => {}}
        actions={<div />}
        thumbnail={<div />}
        target="test"
        rel="test"
        {...commonProps}
      >
        <div />
      </ListCard>

      {/* lv2/listTable */}
      <ListTable
        margins={marginProps}
        headers={[
          {
            value: 'test',
            alignCenter: true,
            alignRight: true,
            ordering: 'asc',
            onClick: () => {},
            minWidth: 1,
            'data-test': 'test',
          },
          { value: <a href="#test">test</a> },
        ]}
        rows={[
          {
            onClick: (_rowIndex: number) => {},
            onSelfWindowNavigation: () => {},
            onChangeCheckBox: (_e: SyntheticInputEvent<HTMLInputElement>) => {},
            'data-test': 'test',
            cells: [
              {
                value: 1,
                alignCenter: true,
                alignRight: true,
                small: true,
                colSpan: 2,
                'data-masking': true,
                'data-test': 'test',
              },
              { value: '2' },
            ],
          },
          {
            cells: [{ value: 'link' }],
            url: 'http://example.com',
          },
        ]}
        onChangeHeaderCheckBox={(
          _e: SyntheticInputEvent<HTMLInputElement>
        ) => {}}
        fixedHeader
        fixedHeaderOffset={1}
        {...commonProps}
      />

      <GroupedListTable
        withCheckBox
        foldable
        headers={[
          {
            value: 'test',
            alignCenter: true,
            alignRight: true,
            ordering: 'asc',
            onClick: () => {},
            minWidth: 1,
          },
          { value: <a href="#test">test</a> },
        ]}
        rowGroups={[
          {
            summaryCells: [
              {
                value: 1,
                alignCenter: true,
                alignRight: true,
                small: true,
                colSpan: 2,
                'data-test': 'test',
              },
              { value: '2' },
            ],

            rows: [
              {
                onClick: (_rowIndex: number) => {},
                onSelfWindowNavigation: () => {},
                onChangeCheckBox: (
                  _e: SyntheticInputEvent<HTMLInputElement>
                ) => {},
                cells: [
                  {
                    value: 1,
                    alignCenter: true,
                    alignRight: true,
                    small: true,
                    colSpan: 2,
                  },
                  { value: '2' },
                ],
              },
              {
                cells: [{ value: 'link' }],
                url: 'http://example.com',
              },
            ],
            onClick: () => {},
            onChangeCheckBox: (_e: SyntheticInputEvent<HTMLInputElement>) => {},
            folded: true,
            onToggleFolded: (_b: boolean) => {},
            'data-test': 'test',
          },
        ]}
        onChangeHeaderCheckBox={(
          _e: SyntheticInputEvent<HTMLInputElement>
        ) => {}}
        {...commonProps}
      />

      {/* lv2/messageBlock */}
      <MessageBlock
        linkTitle="test"
        linkUrl="test"
        linkTarget="_blank"
        linkRel="test"
        onRequestClose={() => {}}
        message="test"
        hover
        error
        notice
        success
        info
        {...marginProps}
      />
      <FloatingMessageBlock
        message="test"
        error
        notice
        success
        info
        onClose={(_autoClose: boolean) => {}}
        {...commonProps}
      />

      <MessageBlock
        linkTitle="test"
        linkUrl="test"
        message="test"
        hover
        error
        notice
        success
        info
        {...marginProps}
      />

      {/* lv2/messageIcon */}
      <MessageIcon label="hoge" error success notice small {...marginProps}>
        message
      </MessageIcon>

      {/* lv2/numericTable */}
      <NumericTable
        headers={[
          {
            value: <div />,
            alignCenter: true,
            alignRight: true,
            ordering: 'asc',
            onClick: () => {},
          },
        ]}
        rows={[
          {
            cells: [
              {
                value: <div />,
                alignCenter: true,
                alignRight: true,
                small: true,
                onClick: (_rowIndex: number) => {},
              },
            ],
          },
        ]}
        {...marginProps}
        {...commonProps}
      />

      {/* lv2/pagination */}
      <Pagination
        rowsPerPageOptions={[{ value: '10', name: '10件' }, { value: '20' }]}
        rowsPerPageValue={10}
        defaultRowsPerPageValue={10}
        currentPage={1}
        rowCount={99}
        displayRowCount="100件以上"
        selectBoxWidth="small"
        disabled
        onChange={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        {...commonProps}
      />

      {/* lv2/pager */}
      <Pager
        currentPage={1}
        onPageChange={(_page: number) => {}}
        pageCount={1}
        pageRange={10}
        sidePageRange={10}
        small
      />

      {/* lv2/pageSelector */}
      <PageSelector
        prevDisabled
        nextDisabled
        onClickPrev={() => {}}
        onClickNext={() => {}}
        onClickTitle={() => {}}
        renderPopup={(requestClose, firstSelectableItemRef) => (
          <button onClick={requestClose} ref={firstSelectableItemRef} />
        )}
        hasDropdown
        isExpanded
        {...marginProps}
        {...commonProps}
      >
        <div />
      </PageSelector>

      {/* lv2/popupProgressBar */}
      <PopupProgressBar
        status="doing"
        message="メッセージ"
        onClose={() => {}}
        {...commonProps}
      />

      {/* lv2/stackedBarChart */}
      <StackedBarChart
        items={[
          {
            color: 'RE',
            label: 'label',
            value: 1,
            valueLabel: '1',
          },
          {
            color: 'OR',
            label: 'label',
            value: 2,
            valueLabel: '2',
          },
        ]}
        onClickItem={() => {}}
        {...commonProps}
      />

      {/* lv2/stepper */}
      <Stepper
        steps={['test', <div key={1} />]}
        currentStepIndex={1}
        disabledStepIndex={[1, 2, 3, 4, 5]}
        small
        {...commonProps}
      />
      <VerticalSteps
        steps={[
          {
            title: 'test',
            content: <div />,
            contentSummary: <div />,
            actions: <div />,
          },
        ]}
        currentStepIndex={0}
        stepHeadlineLevel={1}
        {...commonProps}
      />

      {/* lv2/tabbar */}
      <TabBar
        tabs={['test']}
        currentTabIndex={1}
        small
        onClickTab={(_n: number) => {}}
        {...commonProps}
      />
      <TabBar
        tabs={[
          {
            name: 'test',
            'data-guide': 'guide',
            'data-test': 'test',
            'data-tracking': 'tracking',
            'data-masking': true,
          },
        ]}
        currentTabIndex={1}
        small
        onClickTab={(_n: number) => {}}
        {...commonProps}
      />
      {/* lv2/tagbox */}
      <TagBox type="hoge" removable onRemove={() => {}} {...commonProps}>
        hoge
      </TagBox>
      <MiniTag type="hoge" removable onRemove={() => {}} {...commonProps}>
        hoge
      </MiniTag>

      {/* lv2/withAccordionContent */}
      <WithAccordionContent
        renderAccordionButtonArea={(AccordionButton, contentId) => (
          <AccordionButton contentId={contentId} open onClick={() => {}}>
            アコーディオンボタン
          </AccordionButton>
        )}
        isOpen
        {...commonProps}
      >
        <div />
      </WithAccordionContent>
      {/* lv2/withBalloon */}
      <WithBalloon
        border="default"
        balloonContent={<div />}
        {...commonProps}
        balloonDisabled
      >
        <div />
      </WithBalloon>
      <WithBalloon
        border="default"
        renderContent={(_balloonId: string) => <div />}
        renderBalloonContent={(_isVisible: boolean) => <div />}
        {...commonProps}
      ></WithBalloon>

      {/* lv2/WithDropdown */}
      <WithDropdown
        disabled
        dropdownContents={[
          {
            type: 'rule',
          },
          {
            type: 'textOnly',
            text: 'test',
          },
          {
            type: 'selectable',
            text: 'test',
            ariaLabel: 'test',
            onClick: (_e: SyntheticEvent<>) => {},
          },
        ]}
        renderButton={(dropdownId, isOpen, buttonRef) => (
          <button
            aria-controls={dropdownId}
            aria-expanded={isOpen}
            ref={buttonRef}
          >
            hoge
          </button>
        )}
        {...commonProps}
      />
      <WithFilterableDropdown
        disabled
        render={(popupId, isOpen, controlRef, togglePopup) => (
          <button
            aria-controls={popupId}
            aria-expanded={isOpen}
            ref={controlRef}
            onFocus={togglePopup(true)}
          >
            hoge
          </button>
        )}
        dropdownContents={[
          {
            type: 'selectable',
            text: 'test',
            ariaLabel: 'test',
            onClick: (_e: SyntheticEvent<>) => {},
            keywords: ['aaa'],
          },
          {
            type: 'checkbox',
            text: 'test',
            onChange: (_e: SyntheticEvent<>) => {},
            keywords: ['aaa'],
          },
        ]}
        {...commonProps}
      />
      <WithPopup
        disabled
        render={(popupId, isOpen, controlRef, togglePopup) => (
          <button
            aria-controls={popupId}
            aria-expanded={isOpen}
            ref={controlRef}
            onFocus={togglePopup(true)}
          >
            hoge
          </button>
        )}
        renderPopup={(requestClose, firstSelectableItemRef) => (
          <div>
            <button
              onClick={() => requestClose()}
              ref={firstSelectableItemRef}
            ></button>
          </div>
        )}
      />

      {/* lv2/skeleton */}
      <SkeletonPageTitle {...commonProps} />
      <SkeletonSectionTitle {...commonProps} />
      <SkeletonParagraph size="medium" {...commonProps} />
      <SkeletonRectangle size="default" {...commonProps} />
      <SkeletonBlock size="medium" {...commonProps} />
      <SkeletonIcon size="medium" {...commonProps} />
      <SkeletonCircle size="medium" {...commonProps} />
      <SkeletonListTable
        columnCount={5}
        rowCount={5}
        rowCells={[{ value: <SkeletonIcon /> }]}
        {...commonProps}
      />
      <SkeletonStackedBarChart {...commonProps} />
      <SkeltonPageTitle {...commonProps} />
      <SkeltonSectionTitle {...commonProps} />
      <SkeltonParagraph size="medium" {...commonProps} />
      <SkeltonRectangle size="default" {...commonProps} />
      <SkeltonBlock size="medium" {...commonProps} />
      <SkeltonIcon size="medium" {...commonProps} />
      <SkeltonCircle size="medium" {...commonProps} />
      <SkeltonListTable
        columnCount={5}
        rowCount={5}
        rowCells={[{ value: <SkeletonIcon /> }]}
        {...commonProps}
      />
      <SkeletonDescriptionList rowCount={5} {...commonProps} />
      <WithTOC
        containerID="WithTOC--Example"
        contents={[
          { id: 'WithTOC--Example1', label: 'Lorem Ipsum', content: <></> },
        ]}
        offsetTop={200}
        onNavigateTo={(_: string) => {}}
      />
    </div>
  );
}

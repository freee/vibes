import * as React from 'react';

import { commonKnobs } from '../../../stories';
import {
  FormControl,
  Paragraph,
  SectionTitle,
  SkeletonInput,
  Stack,
  TextField,
} from '../../';

export default {
  component: SkeletonInput,
};

export const SkeletonInputComponent = () => (
  <SkeletonInput {...commonKnobs()} />
);

const value =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra ex ac finibus.';

export const SizeComparison = () => (
  <>
    <Stack gap={1}>
      <SectionTitle>{'<SkeletonInput small width={*} />'}</SectionTitle>
      <Stack direction="horizontal" gap={1}>
        <FormControl label="xSmall">
          <SkeletonInput small width="xSmall" />
        </FormControl>
        <FormControl label="small">
          <SkeletonInput small width="small" />
        </FormControl>
        <FormControl label="medium">
          <SkeletonInput small />
        </FormControl>
        <FormControl label="large">
          <SkeletonInput small width="large" />
        </FormControl>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <TextField value={value} small width="xSmall" />
        <TextField value={value} small width="small" />
        <TextField value={value} small />
        <TextField value={value} small width="large" />
      </Stack>
      <SectionTitle>{'<SkeletonInput width={*} />'}</SectionTitle>
      <Stack direction="horizontal" gap={1}>
        <FormControl label="xSmall">
          <SkeletonInput width="xSmall" />
        </FormControl>
        <FormControl label="small">
          <SkeletonInput width="small" />
        </FormControl>
        <FormControl label="medium">
          <SkeletonInput />
        </FormControl>
        <FormControl label="large">
          <SkeletonInput width="large" />
        </FormControl>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <TextField value={value} width="xSmall" />
        <TextField value={value} width="small" />
        <TextField value={value} />
        <TextField value={value} width="large" />
      </Stack>
      <SectionTitle>{'<SkeletonInput large width={*} />'}</SectionTitle>
      <Stack direction="horizontal" gap={1}>
        <FormControl label="xSmall">
          <SkeletonInput large width="xSmall" />
        </FormControl>
        <FormControl label="small">
          <SkeletonInput large width="small" />
        </FormControl>
        <FormControl label="medium">
          <SkeletonInput large />
        </FormControl>
        <FormControl label="large">
          <SkeletonInput large width="large" />
        </FormControl>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <TextField value={value} large width="xSmall" />
        <TextField value={value} large width="small" />
        <TextField value={value} large />
        <TextField value={value} large width="large" />
      </Stack>
      <SectionTitle>{'<SkeletonInput width="full" />'}</SectionTitle>
    </Stack>
    {/* Stack children does not expand to 100% width  */}
    <Paragraph mt={1}>
      <SkeletonInput small width="full" />
    </Paragraph>
    <Paragraph mt={1}>
      <SkeletonInput width="full" />
    </Paragraph>
    <Paragraph mt={1}>
      <SkeletonInput large width="full" />
    </Paragraph>
  </>
);

import React, { SVGProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Icons from '../src';

const SIZE = {
  width: 32,
  height: 32,
};

const meta: Meta<SVGProps<SVGSVGElement>> = {
  title: 'Icons',
  decorators: [
    (Story) => (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '3rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const All = () => (
  <>
    {Object.entries(Icons).map(([name, Icon]) => (
      <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 8 }}>
        <Icon {...SIZE} />
      </div>
    ))}
  </>
);

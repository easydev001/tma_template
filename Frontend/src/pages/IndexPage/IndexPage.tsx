import { Section, Cell } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

import { TabbarMenu } from '../../components/TabbarMenu/TabbarMenu.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <Section>
        <Cell>index page 2</Cell>
      </Section>

      <TabbarMenu />
    </Page>
  );
};

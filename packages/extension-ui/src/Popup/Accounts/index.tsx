// Copyright 2019-2023 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../../types';

import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AccountWithChildren } from '@polkadot/extension-base/background/types';
import getNetworkMap from '@polkadot/extension-ui/util/getNetworkMap';

import ExternalLinkIcon from '../../assets/externalLink.svg';
import { AccountContext, AddButton, MenuCard, MenuItem } from '../../components';
import useTranslation from '../../hooks/useTranslation';
import { Header } from '../../partials';
import AccountsTree from './AccountsTree';
import AddAccount from './AddAccount';

interface Props extends ThemeProps {
  className?: string;
}

function Accounts({ className }: Props): React.ReactElement {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('');
  const [filteredAccount, setFilteredAccount] = useState<AccountWithChildren[]>([]);
  const { hierarchy } = useContext(AccountContext);
  const networkMap = useMemo(() => getNetworkMap(), []);

  useEffect(() => {
    setFilteredAccount(filter ? hierarchy.filter((account) => account.name?.toLowerCase().includes(filter) || (account.genesisHash && networkMap.get(account.genesisHash)?.toLowerCase().includes(filter))) : hierarchy);
  }, [filter, hierarchy, networkMap]);

  const _onFilter = useCallback((filter: string) => {
    setFilter(filter.toLowerCase());
  }, []);

  const _handleMenuCardClick = useCallback(() => {
    // TODO: temponary
    console.log('clicked');
  }, []);

  return (
    <>
      {hierarchy.length === 0 ? (
        <AddAccount />
      ) : (
        <>
          <Header
            onFilter={_onFilter}
            showAdd
            showConnectedAccounts
            showHelp
            showSearch
            showSettings
            text={t<string>('Accounts')}
          />
          <div className={className}>
            {filteredAccount.map(
              (json, index): React.ReactNode => (
                <AccountsTree
                  {...json}
                  key={`${index}:${json.address}`}
                />
              )
            )}
            <div className='bordered mt-20'>
              <MenuCard
                description='Send, Stake and more...'
                extra={
                  <img
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={_handleMenuCardClick}
                    src={ExternalLinkIcon}
                  />
                }
                title='Go to Web Wallet'
              />
            </div>
            <AddButton />
          </div>
        </>
      )}
    </>
  );
}

export default styled(Accounts)(({ theme }: Props) => `
  height: calc(100vh - 2px);
  overflow-y: scroll;
  margin-top: -25px;
  padding-top: 25px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  .bordered {
    border: 1px solid ${theme.warningColor};
    padding: 20px 10px;
  }

  .mt-20{
    margin-top: 20px;
  }
`
);

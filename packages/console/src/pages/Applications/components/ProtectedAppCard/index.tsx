import { Theme } from '@logto/schemas';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import ProtectedAppDarkIcon from '@/assets/icons/protected-app-dark.svg';
import ProtectedAppIcon from '@/assets/icons/protected-app.svg';
import Button from '@/ds-components/Button';
import TextLink from '@/ds-components/TextLink';
import useDocumentationUrl from '@/hooks/use-documentation-url';
import useTheme from '@/hooks/use-theme';

import ProtectedAppModal from '../ProtectedAppModal';

import * as styles from './index.module.scss';

function ProtectedAppCard() {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console.protected_app' });
  const { documentationSiteUrl } = useDocumentationUrl();
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const theme = useTheme();
  const Icon = theme === Theme.Light ? ProtectedAppIcon : ProtectedAppDarkIcon;

  return (
    <>
      <div className={styles.container}>
        <label>{t('name')}</label>
        <div className={styles.card}>
          <Icon className={styles.logo} />
          <div className={styles.wrapper}>
            <div className={styles.name}>{t('title')}</div>
            <div className={styles.description}>
              <Trans
                components={{
                  // TODO: @charles Update documentation URL when it's ready
                  a: <TextLink href={documentationSiteUrl} targetBlank="noopener" />,
                }}
              >
                {t('description')}
              </Trans>
            </div>
          </div>
          <Button
            title="protected_app.fast_create"
            onClick={() => {
              setShowCreateModal(true);
            }}
          />
        </div>
      </div>
      {showCreateModal && (
        <ProtectedAppModal
          onClose={() => {
            setShowCreateModal(false);
          }}
        />
      )}
    </>
  );
}

export default ProtectedAppCard;

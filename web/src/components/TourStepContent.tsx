import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SelectorParam } from 'i18next'
import React, { ReactElement } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { parseHTML } from 'shared'

import buildConfig from '../constants/buildConfig'
import useDimensions from '../hooks/useDimensions'
import LiveAnnouncer from './LiveAnnouncer'

type TourStepContentProps = {
  title: string
  descriptionKey: SelectorParam
}

const TourStepContent = ({ title, descriptionKey }: TourStepContentProps): ReactElement => {
  const { t } = useTranslation()
  const { desktop } = useDimensions()
  const additionalFeature = desktop ? t($ => $.settings.contrast.title) : t($ => $.feedback.title)
  const appName = buildConfig().appName
  const description = t(descriptionKey, { appName, additionalFeature })
  const announcement = `${title}. ${parseHTML(description)}`

  return (
    <>
      <LiveAnnouncer message={announcement} />
      <Stack sx={{ gap: 1 }}>
        <Box sx={{ paddingInlineEnd: 3 }}>
          <Typography variant='subtitle1'>{title}</Typography>
        </Box>
        <Typography variant='body2'>
          <Trans i18nKey={descriptionKey} values={{ appName, additionalFeature }} components={{ strong: <strong /> }} />
        </Typography>
      </Stack>
    </>
  )
}

export default TourStepContent

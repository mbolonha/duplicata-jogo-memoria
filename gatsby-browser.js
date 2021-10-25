import React from 'react'
import './src/scss/styles.scss'
import { GlobalProvider } from '@Layout/services/context'
export const wrapRootElement = ({ element }) => (
	<GlobalProvider>{element}</GlobalProvider>
)

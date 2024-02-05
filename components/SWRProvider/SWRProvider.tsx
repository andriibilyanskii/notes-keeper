'use client';

import React from 'react';
import { SWRConfig } from 'swr';

export const SWRProvider: React.FC = ({ children }) => {
	return <SWRConfig>{children}</SWRConfig>;
};

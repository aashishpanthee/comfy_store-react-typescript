import { Loading } from '@/components';
import React, { Suspense } from 'react';

// Wraps a node with Suspense using the provided fallback component (defaults to Loading)
export const withSuspense = (
  node: React.ReactNode,
  fallback: React.ReactNode = <Loading />
) => <Suspense fallback={fallback}>{node}</Suspense>;

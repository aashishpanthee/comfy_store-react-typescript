import { ProductsSkeleton } from '@/components';
import React, { Suspense } from 'react';

// Wraps a node with Suspense using the provided fallback component (defaults to ProductsSkeleton)
export const withSuspense = (
  node: React.ReactNode,
  fallback: React.ReactNode = <ProductsSkeleton />
) => <Suspense fallback={fallback}>{node}</Suspense>;

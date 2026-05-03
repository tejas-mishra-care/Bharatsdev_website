'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, getFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';

// NOTE: We are hosted on Netlify (not Firebase App Hosting), so we always
// initialize with the explicit firebaseConfig object.
export function initializeFirebase() {
  if (!getApps().length) {
    const firebaseApp = initializeApp(firebaseConfig);
    return getSdks(firebaseApp);
  }

  // Force a completely fresh instance so we bypass the cached instance
  // that was loaded before we added experimentalForceLongPolling
  try {
    const freshApp = initializeApp(firebaseConfig, `App-${Date.now()}`);
    return getSdks(freshApp);
  } catch {
    return getSdks(getApp());
  }
}

export function getSdks(firebaseApp: FirebaseApp) {
  // initializeFirestore with experimentalForceLongPolling disables offline
  // persistence so writes fail immediately instead of queuing silently forever.
  let firestore;
  try {
    firestore = initializeFirestore(firebaseApp, {
      experimentalForceLongPolling: true,
    });
  } catch {
    // Already initialized — getFirestore returns the existing instance
    firestore = getFirestore(firebaseApp);
  }
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore,
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

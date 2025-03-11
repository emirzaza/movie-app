/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WatchListImport } from './routes/watchList'
import { Route as PersonImport } from './routes/person'
import { Route as FavoritesImport } from './routes/favorites'
import { Route as DirectorImport } from './routes/director'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const WatchListRoute = WatchListImport.update({
  id: '/watchList',
  path: '/watchList',
  getParentRoute: () => rootRoute,
} as any)

const PersonRoute = PersonImport.update({
  id: '/person',
  path: '/person',
  getParentRoute: () => rootRoute,
} as any)

const FavoritesRoute = FavoritesImport.update({
  id: '/favorites',
  path: '/favorites',
  getParentRoute: () => rootRoute,
} as any)

const DirectorRoute = DirectorImport.update({
  id: '/director',
  path: '/director',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/director': {
      id: '/director'
      path: '/director'
      fullPath: '/director'
      preLoaderRoute: typeof DirectorImport
      parentRoute: typeof rootRoute
    }
    '/favorites': {
      id: '/favorites'
      path: '/favorites'
      fullPath: '/favorites'
      preLoaderRoute: typeof FavoritesImport
      parentRoute: typeof rootRoute
    }
    '/person': {
      id: '/person'
      path: '/person'
      fullPath: '/person'
      preLoaderRoute: typeof PersonImport
      parentRoute: typeof rootRoute
    }
    '/watchList': {
      id: '/watchList'
      path: '/watchList'
      fullPath: '/watchList'
      preLoaderRoute: typeof WatchListImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/director': typeof DirectorRoute
  '/favorites': typeof FavoritesRoute
  '/person': typeof PersonRoute
  '/watchList': typeof WatchListRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/director': typeof DirectorRoute
  '/favorites': typeof FavoritesRoute
  '/person': typeof PersonRoute
  '/watchList': typeof WatchListRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/director': typeof DirectorRoute
  '/favorites': typeof FavoritesRoute
  '/person': typeof PersonRoute
  '/watchList': typeof WatchListRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/director' | '/favorites' | '/person' | '/watchList'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/director' | '/favorites' | '/person' | '/watchList'
  id: '__root__' | '/' | '/director' | '/favorites' | '/person' | '/watchList'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DirectorRoute: typeof DirectorRoute
  FavoritesRoute: typeof FavoritesRoute
  PersonRoute: typeof PersonRoute
  WatchListRoute: typeof WatchListRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DirectorRoute: DirectorRoute,
  FavoritesRoute: FavoritesRoute,
  PersonRoute: PersonRoute,
  WatchListRoute: WatchListRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/director",
        "/favorites",
        "/person",
        "/watchList"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/director": {
      "filePath": "director.jsx"
    },
    "/favorites": {
      "filePath": "favorites.jsx"
    },
    "/person": {
      "filePath": "person.jsx"
    },
    "/watchList": {
      "filePath": "watchList.jsx"
    }
  }
}
ROUTE_MANIFEST_END */

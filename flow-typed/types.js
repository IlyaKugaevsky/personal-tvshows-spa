// @flow

export type Show = {
  title: string,
  year: string,
  description: string,
  imdbID: string,
  trailer: string,
  poster: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

declare type ActionType = 'SET_SEARCH_TERM';

export type Action = ActionT<'SET_SEARCH_TERM', string>;

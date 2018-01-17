// @flow

export type Show = {
  title: string,
  year: string,
  description: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string
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

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

export type Action =
  | ActionT<'SET_SEARCH_TERM', string>
  | ActionT<'ADD_API_DATA', Show>;

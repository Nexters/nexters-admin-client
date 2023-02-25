import type { QueryObserverOptions } from '@tanstack/react-query';

type OnSuccess<T> = QueryObserverOptions<T>['onSuccess'];
type OnError = QueryObserverOptions['onError'];
type QueryParams<T> = {
  onSuccess?: OnSuccess<T>;
  onError?: OnError;
};

export type { QueryParams };

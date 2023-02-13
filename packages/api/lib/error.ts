import type { AxiosError } from 'axios';
import { isAxiosError } from 'axios';

type ERROR_TYPE = keyof typeof ERROR_STATUS;
type ERROR_CODE = (typeof ERROR_STATUS)[ERROR_TYPE];
type ERROR_MESSAGE_MAP = Record<ERROR_CODE, string>;

const ERROR_STATUS = {
  INTERNAL_SERVER: 500,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
} as const;

const LOGIN_ERROR: ERROR_MESSAGE_MAP = {
  [ERROR_STATUS.BAD_REQUEST]: '유저 정보와 일치하지 않습니다.',
  [ERROR_STATUS.UNAUTHORIZED]: '유저 정보와 일치하지 않습니다.',
  [ERROR_STATUS.FORBIDDEN]: '유저 정보와 일치하지 않습니다.',
  [ERROR_STATUS.INTERNAL_SERVER]: '알 수 없는 오류가 발생했습니다.',
};

function getStatusFromAxiosError(error: AxiosError) {
  return (error.response?.status ?? ERROR_STATUS.INTERNAL_SERVER) as ERROR_CODE;
}

function handleError(messageMap: ERROR_MESSAGE_MAP) {
  return function (error: any) {
    if (isAxiosError(error)) {
      const status = getStatusFromAxiosError(error);
      const message =
        messageMap[status] ?? messageMap[ERROR_STATUS.INTERNAL_SERVER];
      return message;
    }
    return messageMap[ERROR_STATUS.INTERNAL_SERVER];
  };
}

const handleLoginError = handleError(LOGIN_ERROR);

export { handleLoginError };

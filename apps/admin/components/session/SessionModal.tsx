import { useSession } from '@weekly/api';
import { FindSessionResponse } from '@weekly/api/lib/types/admin';
import { Button, Icon, Input, styled } from '@weekly/ui';
import { useInputs, validateDate } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

interface SessionModalProps extends React.ComponentProps<'div'> {
  session: FindSessionResponse | null;
  closeModal: () => void;
}
type Props = Partial<SessionModalProps>;

function SessionModal({ session, closeModal }: Props) {
  const router = useRouter();
  const { generation } = router.query;
  const initForm = {
    sessionDate: session?.sessionDate.replace(/\-/g, '.') || '',
    week: session?.week || 0,
    title: session?.title || '',
    description: session?.description || '오늘은 설레는 넥스터즈 세션이에요 :)',
    generation: Number(generation),
  };

  const [form, onChange, reset] =
    useInputs<
      Omit<FindSessionResponse, 'id' | 'endAttendTime' | 'startAttendTime'>
    >(initForm);
  const [validate, setValidate] = useState<boolean>(false);
  const { sessionDate, week, title, description } = form;

  useEffect(() => {
    reset();
  }, [session]);

  useEffect(() => {
    if (
      !form.description ||
      !form.description ||
      !validateDate(form.sessionDate) ||
      !form.title ||
      form.week < 1
    ) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [form]);

  const { updateSessionMutate, createSessionMutate } = useSession(
    form,
    Number(generation),
    session?.id,
  );

  const onSubmit = () => {
    session ? updateSessionMutate() : createSessionMutate();
    closeModal?.();
  };

  return (
    <Fragment>
      <ModalTitle>
        <h4>{session ? '세션 수정' : '세션 추가'}</h4>
        {session && <Icon name='trash' />}
      </ModalTitle>
      <InputField>
        <p>날짜</p>
        <Input
          placeholder='ex) 2023.01.01'
          value={sessionDate}
          name={'sessionDate'}
          onChange={onChange}
        />
      </InputField>
      <InputField>
        <p>주차 설정</p>
        <Input
          placeholder='숫자 입력'
          value={week ? week : ''}
          name={'week'}
          onChange={onChange}
        />
      </InputField>
      <InputField>
        <p>세션 제목</p>
        <Input
          placeholder='세션 제목 입력'
          value={title}
          name={'title'}
          onChange={onChange}
        />
      </InputField>
      <InputField>
        <p>세션 멘트 설정</p>
        <Input
          placeholder='오늘은 설레는 넥스터즈 세션이에요 :)'
          value={description}
          name={'description'}
          onChange={onChange}
        />
      </InputField>
      <ButtonSet>
        <Button fullWidth varient='secondary' onClick={closeModal}>
          취소
        </Button>
        <Button fullWidth onClick={onSubmit} disabled={validate}>
          {session ? '수정' : '추가'}
        </Button>
      </ButtonSet>
    </Fragment>
  );
}

const ModalTitle = styled.div`
  ${({ theme }) => theme.typo.h4Bold}
  display:flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.rem(16)} ${theme.rem(4)}`};
  svg {
    color: ${({ theme }) => theme.palette.grayScale.g50};
  }
`;

const InputField = styled.div`
  ${({ theme }) => theme.typo.body2Regular}
  color: ${({ theme }) => theme.palette.grayScale.g70};
  margin-bottom: ${({ theme }) => theme.rem(24)};
  input {
    margin-top: ${({ theme }) => theme.rem(8)};
  }
`;

const ButtonSet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.rem(12)};
  margin-top: 4px;
`;

export default SessionModal;

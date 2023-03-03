import { Box, Modal } from '@mui/material';
import { useUploadMemberExcel } from '@weekly/api';
import { Button, styled } from '@weekly/ui';
import React from 'react';
import toast from 'react-hot-toast';

import { File, FileDropzone } from '~/components/FileDropzone/FileDropzone';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '401px',
  bgcolor: '#fff',
  padding: '16px 20px',
  borderRadius: '8px',
};

interface Props {
  open: boolean;
  toggleModal: VoidFunction;
}

function MemberRegisterModal({ open, toggleModal }: Props) {
  const [files, setFiles] = React.useState<File[]>([]);
  const { mutate: uploadExcel } = useUploadMemberExcel();

  const handleDrop = (newFiles: File[]): void => {
    console.log('FILE', newFiles);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (file: File) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_file) => _file.path !== file.path),
    );
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  return (
    <Modal
      open={open}
      onClose={toggleModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Box mb={3}>
          <ModalTitle>회원 일괄 등록</ModalTitle>
        </Box>
        <FileDropzone
          files={files}
          onDrop={handleDrop}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
          maxFiles={1}
          accept={{
            // 'application/vnd.ms-excel': ['.xls'],
            // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            //   ['.xlsx'],
            'text/csv': ['.csv'],
          }}
        />
        <Box width={240} display='flex' flexDirection='column' mt={2}>
          <ModalDescription>
            파일 업로드는 엑셀 파일만 가능합니다.
          </ModalDescription>
          <ModalDescription>
            기본 양식은 아래 첨부파일을 다운로드 해주세요.
          </ModalDescription>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            mt: 4,
          }}
        >
          <Box width={174} mr='12px'>
            <Button
              fullWidth
              varient='secondary'
              onClick={() => {
                toggleModal();
                handleRemoveAll();
              }}
            >
              취소
            </Button>
          </Box>
          <Box width={174}>
            <Button
              fullWidth
              disabled={files.length === 0}
              onClick={() => {
                uploadExcel(
                  {
                    generation: 22,
                    csvFile: files[0],
                  },
                  {
                    onSuccess() {
                      console.log('SUCCESS');
                      toast.success('회원 등록이 완료되었습니다.');
                    },
                  },
                );
                toggleModal();
              }}
            >
              등록
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

const ModalTitle = styled.span`
  ${({ theme }) => theme.typo.h4Bold};
  margin-bottom: 24px;
`;

const ModalDescription = styled.span`
  ${({ theme }) => theme.typo.captionRegular};
  color: ${({ theme }) => theme.palette.grayScale.g60};
`;

export { MemberRegisterModal };

import { useRouter } from 'next/router';

function QR() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>ID {id}</h1>
    </div>
  );
}

export default QR;

import { useState } from 'react';
import { CheckoutPage } from './components/CheckoutPage';
import { ThankYouPage } from './components/ThankYouPage';
import { PaymentSuccess } from './types';

export type { PaymentSuccess };

export default function App() {
  const [page, setPage] = useState<'checkout' | 'thankyou'>('checkout');
  const [successData, setSuccessData] = useState<PaymentSuccess | null>(null);

  const handleSuccess = (data: PaymentSuccess) => {
    setSuccessData(data);
    setPage('thankyou');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === 'thankyou' && successData) {
    return <ThankYouPage data={successData} onBack={() => setPage('checkout')} />;
  }

  return <CheckoutPage onSuccess={handleSuccess} />;
}

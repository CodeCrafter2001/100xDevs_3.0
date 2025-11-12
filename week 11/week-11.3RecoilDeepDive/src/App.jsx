import { useMemo, useState } from 'react';
import './App.css';
import { networkAtom, jobsAtom, notificationAtom, messagingAtom , totalNotificationSelector} from './atoms';
import { RecoilRoot, useRecoilValue } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalNotificationCount= useRecoilValue(totalNotificationSelector);
  return (
    <div className="div_button">
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button> Me ({totalNotificationCount})</button>
    </div>
  );
}

export default App;

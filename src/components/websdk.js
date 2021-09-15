import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import qs from 'query-string';

declare var ZoomMtg

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.6/lib', '/av');

export default function WebSDK() {
  const {
    meetingNumber = '', userName = '',
  } = qs.parse((useHistory().location || {}).search);

  const {
    REACT_APP_ZOOM_API_KEY, REACT_APP_SIGNATURE_ENDPOINT,
  } = process.env;

  const startMeeting = (signature) => {
    document.getElementById('zmmtg-root').style.display = 'block';
    ZoomMtg.init({
      leaveUrl: window.location.origin,
      isSupportAV: true,
      success: (success) => {
        console.log('init success', success);

        ZoomMtg.join({
          signature,
          meetingNumber,
          userName,
          apiKey: REACT_APP_ZOOM_API_KEY,
          success: (joinSuccess) => console.log('Meeting join success: ', joinSuccess),
          error: (joinError) => console.error('Error joining meeting: ', joinError),
        });
      },
      error: (initError) => console.error('init error', initError),
    });
  }

  const getSignature = () => {
    const SIGNATURE_OPTIONS = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ meetingNumber, role: 1 }),
    };

    fetch(REACT_APP_SIGNATURE_ENDPOINT, SIGNATURE_OPTIONS)
    .then((data) => data.json())
    .then(({ signature }) => !!signature && startMeeting(signature));
  }

  return (
    <div className="align-center">
      {getSignature()}
      <Spin />
    </div>
  )
}
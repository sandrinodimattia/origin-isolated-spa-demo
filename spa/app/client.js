import connectToChild from 'penpal/lib/connectToChild';

const iframe = document.createElement('iframe');
iframe.src = window.ORIGIN_FRAME;
iframe.style = 'width:0;height:0;border:0;border:none;display:none;';
document.body.appendChild(iframe);

const connection = connectToChild({
  iframe,
  timeout: 1500,
});

export default async function getClient() {
  const child = await connection.promise;
  return child;
}

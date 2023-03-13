// Select the video element to be recorded
const videoElement = document.getElementById('video');

// Request access to the user's camera and microphone
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
})
.then((stream) => {
  // Play the video stream in the video element
  videoElement.srcObject = stream;
  videoElement.play();

  // Create a new MediaRecorder instance to record the video
  const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  });

  // Create an array to store the recorded video data
  const recordedChunks = [];

  // Listen for data available events and store the recorded data
  mediaRecorder.addEventListener('dataavailable', (event) => {
    recordedChunks.push(event.data);
  });

  // Start recording when the media recorder is ready
  mediaRecorder.addEventListener('start', () => {
    console.log('Recording started');
  });

  // Stop recording and save the video file when the media recorder is stopped
  mediaRecorder.addEventListener('stop', () => {
    console.log('Recording stopped');

    // Combine the recorded chunks into a single video file
    const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });

    // Create a download link for the video file and add it to the page
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(recordedBlob);
    downloadLink.download = 'recorded-video.webm';
    document.body.appendChild(downloadLink);
    downloadLink.click();
  });

  // Start recording when the user clicks a button
  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    mediaRecorder.start();
  });

  // Stop recording when the user clicks a button
  const stopButton = document.getElementById('stop-button');
  stopButton.addEventListener('click', () => {
    mediaRecorder.stop();
  });
})
.catch((error) => {
  console.error('Error accessing media devices', error);
});

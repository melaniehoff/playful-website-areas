$( document ).ready(function() {

console.log( "ready!" );
console.log("I AM A SRCERER ")

const startRecordingBtn = $('#startRecording');
const transcriptionResult = $('#transcriptionResult');
let recognition = null;
let isRecording = false;
let lastProcessedTime = 0;
const MIN_TIME_BETWEEN_PROCESSING = 10; // Even faster updates

// Initialize speech recognition
function initSpeechRecognition() {
  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    const now = Date.now();
    if (now - lastProcessedTime < MIN_TIME_BETWEEN_PROCESSING) {
      return;
    }

    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript.toLowerCase().trim();
    const firstLetter = transcript.charAt(0);

    // Super fast first-letter matching
    let direction = null;
    switch(firstLetter) {
      case 'r': direction = 'right'; break;
      case 'd': direction = 'down'; break;
      case 'l': direction = 'left'; break;
      case 'u': direction = 'up'; break;
    }

    if (direction) {
      lastProcessedTime = now;
      transcriptionResult.text(direction);
      transcriptionResult.removeClass('up down left right');
      transcriptionResult.addClass(direction);
    }
  };

  recognition.onerror = function(event) {
    if (event.error === 'no-speech') {
      return;
    }
    transcriptionResult.text('Error: ' + event.error);
    stopRecording();
  };

  recognition.onend = function() {
    if (isRecording) {
      recognition.start();
    }
  };
}

function startRecording() {
  if (!recognition) {
    initSpeechRecognition();
  }

  try {
    recognition.start();
    isRecording = true;
    startRecordingBtn.addClass('recording');
    startRecordingBtn.html('<span class="mic-icon">🎤</span> Stop Recording');
    transcriptionResult.text('Listening for directions...');
  } catch (error) {
    transcriptionResult.text('Error: ' + error.message);
  }
}

function stopRecording() {
  if (recognition) {
    recognition.stop();
    isRecording = false;
    startRecordingBtn.removeClass('recording');
    startRecordingBtn.html('<span class="mic-icon">🎤</span> Start Recording');
  }
}

startRecordingBtn.on('click', function() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
});

});

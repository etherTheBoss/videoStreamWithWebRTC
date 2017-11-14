

var etherRecorder=document.getElementById('recorder');

var videoEther = document.createElement('video');
videoEther.setAttribute('id', 'gum');
videoEther.setAttribute('autoplay', true);
videoEther.setAttribute('muted', true);
etherRecorder.appendChild(videoEther);

var videoEther1 = document.createElement('video');
videoEther1.setAttribute('id', 'recorded');
videoEther1.setAttribute('loop', true);
videoEther1.setAttribute('controls', true);
etherRecorder.appendChild(videoEther1);

var newLine = document.createElement('br');
etherRecorder.appendChild(newLine);

var buttonRecord = document.createElement('button');
buttonRecord.setAttribute('id', 'record');
buttonRecord.setAttribute('disabled', true);


var buttonPlay = document.createElement('button');
buttonPlay.setAttribute('id', 'play');
buttonPlay.setAttribute('disabled', true);


var buttonDownload = document.createElement('button');
buttonDownload.setAttribute('id', 'download');
buttonDownload.setAttribute('disabled', true);


var buttonRecordtextnode = document.createTextNode("Start Recording");
buttonRecord.appendChild(buttonRecordtextnode);

var buttonPlaytextnode = document.createTextNode("Play");
buttonPlay.appendChild(buttonPlaytextnode);

var buttonDownloadtextnode = document.createTextNode("Download");
buttonDownload.appendChild(buttonDownloadtextnode);

etherRecorder.appendChild(buttonRecord);
etherRecorder.appendChild(buttonPlay);
etherRecorder.appendChild(buttonDownload);

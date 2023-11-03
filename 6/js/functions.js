const isShorter = (string, size) => string.length <= size;

const isPalindrom = (sentence) => {
  sentence.replaceAll(' ', '').toUpperCase();
  const original = sentence;
  sentence.split('').reverse().join();
  if (sentence === original){
    return true;
  }
  else{
    return false;
  }
};

const findNumber = (line) => {
  let result = '';
  line = line.toString();

  for (let i = 0; i < line.length; i++){
    const currentSymbol = parseInt(line[i], 10);
    if(!isNaN(currentSymbol)){
      result += currentSymbol;
    }
  }
  return parseInt(result, 10);
};

isPalindrom('топор');
isShorter('Hello', 5);
findNumber('s!2');

const timeToMinutes = (time) => {
  const timeParts = time.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  return hours * 60 + minutes;
}

const meetingTime = (startWorkingTime, endWorkingTime, meetingDuration) => {
  startWorkingTime = timeToMinutes(startWorkingTime);
  endWorkingTime = timeToMinutes(endWorkingTime);
  startMeetingTime = timeToMinutes(startMeetingTime);
  const meetingEndTime = startMeetingTime + meetingDuration;

  return (startMeetingTime >= startWorkingTime && meetingEndTime <= endWorkingTime);
};

meetingTime('8:00', '17:30', '08:00', 900);

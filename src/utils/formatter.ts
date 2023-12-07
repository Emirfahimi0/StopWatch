export const timeFormatter = (time: number): string => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  const formattedHours = hours < 10 ? "0" + hours : String(hours);
  const formattedMinutes = minutes < 10 ? "0" + minutes : String(minutes);
  const formattedSeconds = seconds < 10 ? "0" + seconds : String(seconds);

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
};

export const validateInput = (input: string): boolean => /^(\d+)?$/.test(input);

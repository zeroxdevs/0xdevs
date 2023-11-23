const milisecInterpreter = (ms: number) => {
  const day = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hour = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((ms % (1000 * 60)) / 1000);
  return { day, hour, min, sec };
};

export default milisecInterpreter;

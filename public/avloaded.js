
()

startLoadTimer() {
  // fix
  let timerStarted = true;
  const loadTimer = setTimeout(() => {
    console.log('loaded');
  }, 1000);
}
startLoadTimer();
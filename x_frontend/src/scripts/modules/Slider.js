export default element => {
  console.log('new Slider' + element);

  return () => {
    console.log('unmounted');
  };
};
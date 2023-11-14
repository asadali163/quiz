const Title = (data) => {
  const { title } = data;
  return (
    <div className="text-3xl pb-8 text-white">
      <h1>{title}</h1>
    </div>
  );
};
export default Title;

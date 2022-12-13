import axios from "axios";

const endpoint = "http://localhost:1337/api/backgrounds";

const index = ({ backgrounds }) => {
  console.log(backgrounds);

  return (
    <div className="h-screen border w-full md:w-4/6 lg:w-3/6 flex  justify-center ">
      <div className="flex flex-col">
        <h1 className="underline">About me</h1>

        <h2>{backgrounds.data[0].attributes.about}</h2>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const response = await axios.get(endpoint);
  return {
    props: {
      backgrounds: response.data,
    },
  };
}

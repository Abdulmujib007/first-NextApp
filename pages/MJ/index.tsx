import axios from "axios";
import Link from "next/link";
export const getStaticProps = async () => {

  // both works,fetch and axios
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await response.json();

  const data = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

  return {
    props: { dataListed: data },
  };
};

type propData = [
  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: [{}]
    };
    phone: "1-770-736-8031 x56442";
    website: "hildegard.org";
    company: Array<{}>
  }
];

const Mujib = ({ dataListed }: { dataListed: propData }) => {
  return (
    <div>
      <p className="text-4xl">Mujib</p>
      <p>
        This is a list made by Abdulmujib Asiyanbi,the man himself,new to next
        but we getting there,always down to learning new technologies mafo,we
        Active
      </p>
      {dataListed.map((item) => (
        <Link href={`/MJ/${item.id}`} className="text-gray-300" key={`div${item.id}`}>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Mujib;

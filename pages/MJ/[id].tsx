import axios from "axios";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const paths = data.map((item: any) => {
    return { params: { id: item.id.toString() } };
  });
  return{
    paths,
    fallback:false
  }
};

export const getStaticProps = async (context : any) => {
    const id = context.params.id
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return {
        props:{singleItem : data}
    }
}
interface PropData  {
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

const Details = ({singleItem} : {singleItem : PropData} ) => {
  return (
    <div>   
      <p className="text-black">{singleItem.name}</p>
      <p className="text-black">{singleItem.email}</p>
      <p className="text-black">{singleItem.username}</p>
      <p className="text-black">{singleItem.address.city}</p>
      <p className="text-black">{singleItem.phone}</p>
      <p className="text-black">{singleItem.website}</p>
    </div>
  );
};

export default Details;

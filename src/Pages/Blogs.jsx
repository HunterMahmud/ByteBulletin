import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Blog from "../Components/Blog";
import Loading from './../Components/Loading';



const Blogs = () => {
    const navigation = useNavigation();
  const blogsData = useLoaderData();
  if(navigation.state==="loading") return <Loading />;
  return (
    <section className=" mx-auto">
	<div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link rel="noopener noreferrer" to={`/blogs/${blogsData[0].id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
			<img src={blogsData[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogsData[0].title}</h3>
				<span className="text-xs ">{new Date(blogsData[0].published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour24: false,
            })}</span>
				<p>{blogsData[0].description}</p>
			</div>
		</Link>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				blogsData.slice(1).map((item)=> <Blog deletable={false} key={item.id} blog={item} />)
			}
			
		</div>
		
	</div>
</section>
  );
};

export default Blogs;

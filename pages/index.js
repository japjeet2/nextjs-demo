import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
	const router = useRouter();

	const handleClick = () => {
		console.log("placing your order");
		// router.push("/product");
    router.replace("/product")
	};
	return (
		<div>
			<h1>Home page</h1>
			<Link href="/blog">
				<a>Blog</a>
			</Link>

			<div>
				<Link href="/product">
					<a>Product</a>
				</Link>
			</div>
      <button onClick={handleClick}>Place Order</button>
		</div>
	);
}

export default Home;

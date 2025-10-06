import Counter from "@/app/components/Counter";

async function Page() {
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    console.log(data);
    return (
        <>
            <h1>
                Mehraneh cabins
            </h1>
            <ul>
                {data.map((user) =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <Counter user={data}/>
        </>
    );
}

export default Page